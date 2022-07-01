// REACT
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

// CHAKRA UI COMPONENTS
import { Box, Stack, Text, Image } from "@chakra-ui/react";

// ASSETS
import Airplane from "../../../../../../assets/airplane.png";
import Bus from "../../../../../../assets/bus.png";

const ReturnPath = ({ period, year, country }) => {
  const countryID = useParams().countryID || country;
  const [total, setTotal] = useState({ air: 0, tr: 0 });

  useEffect(() => {
    if (period.length > 0 && year.length > 0) {
      const quads = {
        q1: "enero - abril",
        q2: "mayo - agosto",
        q3: "septiembre - diciembre",
      };
      fetch(
        `${
          import.meta.env.VITE_APP_API_URL
        }consultas/totalporviaderetorno/${countryID}/${year}/${encodeURI(
          quads[period]
        )}`
      )
        .then((res) => res.json())
        .then((data) => {
          let totals = { tr: 0, air: 0 };
          data?.data.forEach((stats) => {
            if (stats._id.startsWith("Terrestre")) totals.tr += stats.total;
            if (stats._id.startsWith("Aérea")) totals.air += stats.total;
          });
          setTotal(totals);
        })
        .catch((err) => console.log(err));
    }
  }, [period, year, countryID]);

  return (
    <Box width="100%">
      <Stack justifyContent="center" alignItems="center" spacing="24px">
        <Text fontFamily="Oswald" fontSize="2xl">
          Vía de retorno
        </Text>
        <Stack
          gap="24px"
          direction="row"
          alignItems="center"
          justifyContent="center"
        >
          <Image src={Airplane} height="50px" />

          <Stack
            spacing="8px"
            direction="column"
            alignItems="center"
            justifyContent="center"
          >
            <Text fontFamily="Oswald" fontSize="md" lineHeight="1">
              Aérea
            </Text>
            <Text fontFamily="Oswald" fontSize="3xl" lineHeight="1">
              {total.air}
            </Text>
          </Stack>
        </Stack>

        <Stack
          gap="24px"
          direction="row"
          alignItems="center"
          justifyContent="center"
        >
          <Image src={Bus} height="50px" />

          <Stack
            spacing="8px"
            direction="column"
            alignItems="center"
            justifyContent="center"
          >
            <Text fontFamily="Oswald" fontSize="md" lineHeight="1">
              Terrestre
            </Text>
            <Text fontFamily="Oswald" fontSize="3xl" lineHeight="1">
              {total.tr}
            </Text>
          </Stack>
        </Stack>
      </Stack>
    </Box>
  );
};

export default ReturnPath;
