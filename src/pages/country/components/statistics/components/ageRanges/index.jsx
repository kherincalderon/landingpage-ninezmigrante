import React, { useEffect, useState } from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Legend,
  Tooltip,
} from "chart.js";
ChartJS.register(CategoryScale, LinearScale, BarElement, Legend, Tooltip);
import { useParams } from "react-router-dom";

import { Bar } from "react-chartjs-2";
import { colors } from "../../../../../../utils/theme";

import { Box, Grid, GridItem, Stack, Text } from "@chakra-ui/react";
import useFetch from "../../../../../../hooks/fetch";
import { useQuery } from "@apollo/client";
import { GET_DETAINED, GET_RETURNEDS_BY_COUNTRY_FOR_AGE_GROUP } from "../../../../../../utils/query/returned";
import { compareDateRange } from "../../../../../../utils/tools";
import useReturnedFilteredQuery from "../../../../../../hooks/query";

export const options = {
  responsive: true,
  plugins: {
    legend: {
      display: false,
    },
  },
};

const AgeRanges = ({
  period,
  year,
  country,
  disableFirstAge = false,
  defData: { f1 = undefined, f2 = undefined, f3 = undefined, f4 = undefined },
}) => {
  let labels = ["P. INF", "NIÑEZ", "ADOL", "NR"];
  let chartColors = [
    colors.yellow[700],
    colors.blue[700],
    colors.green[700],
    colors.gray[500],
  ];
  let agesLabels = [
    "Primera infancia",
    "Niñez",
    "Adolescencia",
    "No registrado",
  ];

  const rdata = useReturnedFilteredQuery({
    year,
    period,
    query: GET_RETURNEDS_BY_COUNTRY_FOR_AGE_GROUP
  });

  let totalAdolescencia = 0;
  let totalNinez = 0;
  let totalNoRegistrados = 0;
  let totalPrimeraInfancia = 0;

  rdata?.forEach((report) => {
    report.attributes?.users_permissions_user?.data?.attributes?.organization?.data?.attributes?.department?.data?.attributes?.country?.data?.attributes?.country_contributions?.data?.forEach(
      (contribution) => {
        contribution.attributes?.returned?.data?.attributes?.age_group_contributions?.data?.forEach(
          (ageGroupContribution) => {
            const ageGroup =
              ageGroupContribution.attributes?.age_group?.data?.attributes?.name?.toLowerCase();

            switch (ageGroup) {
              case "adolescencia":
                totalAdolescencia += ageGroupContribution.attributes?.cant || 0;
                break;
              case "niñez":
                totalNinez += ageGroupContribution.attributes?.cant || 0;
                break;
              case "no registrados":
                totalNoRegistrados +=
                  ageGroupContribution.attributes?.cant || 0;
                break;
              case "primera infancia":
                totalPrimeraInfancia +=
                  ageGroupContribution.attributes?.cant || 0;
                break;
              default:
                break;
            }
          }
        );
      }
    );
  });

  const totals = [
    totalPrimeraInfancia,
    totalNinez,
    totalAdolescencia,
    totalNoRegistrados,
  ]

  console.log({
    totalAdolescencia,
    totalNinez,
    totalNoRegistrados,
    totalPrimeraInfancia,
  });

  if (disableFirstAge) {
    chartColors = chartColors.slice(1);
    agesLabels = agesLabels.slice(1);
  }

  const data = {
    labels: disableFirstAge ? labels.slice(1) : labels,
    datasets: [
      {
        data: totals,
        backgroundColor: chartColors,
      },
    ],
  };

  return (
    <Box width="100%">
      <Stack justifyContent="center" alignItems="center">
        <Text fontFamily="Oswald" fontSize="2xl">
          Rangos etarios
        </Text>
        <Box width="300px">
          <Bar options={options} data={data} />
        </Box>

        <Grid
          templateColumns="1fr 1fr"
          templateRows="1fr 1fr"
          columnGap={2}
          rowGap={0}
        >
          {chartColors.map((color, index) => (
            <Stack
              direction="row"
              alignItems="center"
              justifyContent="space-between"
              key={`age_${color}`}
              minWidth={160}
            >
              <Stack direction="row" alignItems="center">
                <Box bgColor={color} width="18px" height="18px" />
                <Text fontFamily="Oswald" fontSize="md">
                  {agesLabels[index]}
                </Text>
              </Stack>
              <Text fontFamily="Oswald" fontSize="2xl">
                {totals[index] || 0}
              </Text>
            </Stack>
          ))}
        </Grid>
      </Stack>
    </Box>
  );
};

AgeRanges.defaultProps = {
  disableFirstAge: false,
  defData: { f1: undefined, f2: undefined, f3: undefined, f4: undefined },
};

export default AgeRanges;
