import React from "react";
import useHeatmap from "../../../../../../pages/country/components/statistics/components/heatMap/hooks";

// CHAKRA
import { Tooltip } from "@chakra-ui/react";

const Retalhuleu = ({ customColor = "", disableHeat = false }) => {
  let { color, onClick } = useHeatmap("retalhuleu", disableHeat);
  color = customColor || color;

  return (
    <Tooltip label="Retalhuleu" placement="auto">
      <path
        onClick={onClick}
        d="m 81.75741,459.56 0,0 1.31,-1.25 0.41,-0.97 0.29,-0.21 0.47,-0.21 0.81,0.24 0.86,0.49 0.39,0 0.49,-0.18 1.05,-1.16 0.7,-0.99 0.14,-0.31 0.8,-1.24 0.48,-0.51 0.38,-0.16 0.52,-0.04 1.46,0.38 0.84,0.31 0.76,0.18 0.46,0.02 0.68,-0.22 0.83,-0.41 2.85,-1.94 0.86,-0.26 1.69,0.14 2.21,0.94 -4.21,3.73 -3.17,3.59 -0.37,0.57 -0.43,0.88 -0.09,0.41 -0.08,1.63 0.11,1.84 0.08,1.42 -5.52,11.33 -0.06,0.9 0.01,0.47 0.06,0.42 -1.11,8.46 0.11,0.87 0.21,0.75 0.28,0.72 1.77,3.17 0.08,1.07 -0.64,9.39 0.09,1.92 -0.07,0.94 -0.11,0.66 -1.59,2.37 -1.74,5.32 -0.65,4.3 -0.29,4.74 -0.16,0.91 -0.15,0.32 -3.99,5.94 0.83,5.76 0.11,1.17 -14.55,-9.06 -20.36,-14.95 -19.77,-17.92 -15.76,-11.45 0,-0.01 0.23,-0.39 0.38,-0.13 0.56,-0.11 1.46,0.36 0.7,-0.05 0.7,-0.32 1.24,-0.88 1.25,-1.15 0.47,-0.19 0.68,-0.14 1.4,0.09 1.33,0.28 0.73,0.27 0.4,0.06 0.43,0.02 0.4,-0.05 0.51,-0.22 0.55,-0.39 1.56,-1.73 1.22,-0.57 4.17,-1.05 1.13,-0.79 0.73,-0.32 0.34,-0.06 0.58,0.16 8.22,3.54 1.58,0.25 4.08,-0.37 5.83,-1.32 4.36,-6.56 1.37,-1.6 0.31,-0.6 0.33,-0.94 0.49,-2.07 0.48,-1.32 0.62,-1.31 2.51,-3.77 0.62,-1.38 1.22,-3.97 0.93,-1.49 5.01,-2.45 1.89,-2.09 1.04,-0.89 0.59,-0.4 0.38,-0.21 0.42,-0.17 0.6,-0.09 0.48,0.03 0.37,0.13 0.24,0.36 0.16,0.31 -0.21,1.77 -2,4.77 -0.4,2.53 0.37,0.41 0.7,0.36 1.74,0.32 0.81,0.24 1.1,0.06 z"
        title="Retalhuleu"
        className="cls-1"
        fill={color}
        id="GT-RE"
      />
    </Tooltip>
  );
};

export default Retalhuleu;
