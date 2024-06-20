// REACT
import { useContext, useEffect } from "react";
import HeatMapContext from "../context";

// COLORS
import { colors } from "../../../../../../../utils/theme";
import getCountryContent from "../../../../../../../utils/country";
import useReturnedFilteredQuery from "../../../../../../../hooks/query";
import { GET_RETURNEDS_BY_COUNTRY_FOR_DEPARTMENT } from "../../../../../../../utils/query/returned";

/**
 * Devuelve un objeto de mapa de calor con un color y una función onClick si la propiedad disabledHeat
 * es falsa; de lo contrario, devuelve un objeto de mapa de calor con un color predeterminado y una
 * función onClick vacía
 * @param id - La identificación del elemento al que desea agregar el mapa de calor.
 * @param disableHeat - booleano: si es verdadero, el mapa de calor se desactivará
 * @returns Una función que toma una identificación y deshabilita el calor y devuelve un objeto.
 */
const useHeatmap = (id, disableHeat) => {
  if (!disableHeat) {
    const heatmap = useContext(HeatMapContext);
    const heatmapDefault = {
      ...heatmap,
      color: heatmap.colorScales[id] ?? colors.heatMin[100],
      onClick: heatmap.onClick(id),
    };
    return heatmapDefault;
  }
  return { color: colors.heatMin[100], onClick: () => {} };
};

/**
 * Obtiene datos de la API, calcula el porcentaje del total para cada departamento y luego establece la
 * escala de colores para cada departamento en función de ese porcentaje.
 * @param setColorScales - una función que establece las escalas de color en el estado
 * @param countryID - El ID del país para el que se obtendrán los datos.
 * @param period - El período del año, que puede ser "T1", "T2", "T3" o "T4".
 * @param year - El año que se mostrará
 */
export const useHeatColors = (setColorScales, countryID, period, year) => {
  const setColor = (countryID, escala) => {
    return getCountryContent({
      countryID,
      content: {
        guatemala: `rgba(146,189,87, ${escala})`,
        honduras: `rgba(221,184,65, ${escala})`,
      },
    });
  };

  const databorders = useReturnedFilteredQuery({
    query: GET_RETURNEDS_BY_COUNTRY_FOR_DEPARTMENT,
    year,
    period,
  });

  const depTotals = {};
  const depSubDepTotals = {};

  databorders?.forEach((report) => {
    report.attributes?.users_permissions_user?.data?.attributes?.organization?.data?.attributes?.department?.data?.attributes?.country?.data?.attributes?.country_contributions?.data?.forEach(
      (contribution) => {
        contribution.attributes?.returned?.data?.attributes?.municipality_contributions?.data?.forEach(
          (muni) => {
            const subDepName =
              muni.attributes?.municipality?.data?.attributes?.name;

            const depName =
              muni.attributes?.municipality?.data?.attributes?.department?.data?.attributes?.name
                ?.toLowerCase()
                .replaceAll(" ", "")
                .replaceAll("department", "")
                .normalize("NFD")
                .replace(/[\u0300-\u036f]/g, "");

            const muniCant = muni.attributes?.cant || 0;

            depSubDepTotals[depName] = {
              ...depSubDepTotals[depName],
              [subDepName]: depSubDepTotals?.[depName]?.[subDepName]
                ? depSubDepTotals[depName][subDepName] + muniCant
                : muniCant,
            };

            depTotals[depName] = depTotals[depName]
              ? depTotals[depName] + muniCant
              : muniCant;
          }
        );
      }
    );
  });

  useEffect(() => {
    const filteredData = Object.entries(depTotals).map(([dep, total]) => ({
      id: dep,
      total,
    }));

    const totales = filteredData.map((department) => department.total);
    const scales = {};
    const higher = Math.max(...totales);

    filteredData.forEach((department) => {
      const percent = department.total / higher;
      const scale = Math.round((percent + Number.EPSILON) * 100) / 100;

      if (scale === 0) scales[department.id] = colors.heatMin[100];
      else scales[department.id] = setColor(countryID, scale);
    });

    setColorScales(scales);
  }, [countryID, period, year]);

  return {
    depSubDepTotals,
  };
};

export default useHeatmap;
