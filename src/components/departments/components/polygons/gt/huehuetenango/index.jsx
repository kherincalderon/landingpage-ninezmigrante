import React from "react";
import useHeatmap from "../../../../../../pages/country/components/statistics/components/heatMap/hooks";

// CHAKRA
import { Tooltip } from "@chakra-ui/react";

const Huehuetenango = ({ customColor = "", disableHeat = false }) => {
  let { color, onClick } = useHeatmap("huehuetenango", disableHeat);
  color = customColor || color;

  return (
    <Tooltip label="Huehuetenango" placement="auto">
      <path
        onClick={onClick}
        d="m 138.13741,319.8 0,0 -0.9,0 -0.43,0.06 -0.37,0.1 -0.33,0.17 -1.72,1.49 -0.58,0.19 -0.53,0.08 -0.44,-0.04 -0.39,0.28 -0.32,0.59 -0.2,1.75 -0.37,1.37 -0.81,1.63 -0.46,0.7 -0.32,0.84 -0.15,0.51 -0.19,3.37 -0.78,1.31 -0.28,0.7 -0.08,0.39 -0.07,0.46 0,0.45 0.1,0.9 0.1,0.39 0.13,0.38 0.31,0.66 0.19,0.29 0.15,0.33 0.42,0.65 2.8,3.39 0.23,0.45 0.1,0.45 0.01,1.84 0.16,0.81 0.59,1.4 0.81,1.25 0.87,0.98 2.63,2.47 0.55,0.12 0.79,0.02 4.09,-0.5 1.77,0.36 3.87,1.81 0.31,2.62 -1.21,5.19 0.14,0.83 0.81,2.17 0.69,2.9 -2.16,0.5 -1.23,0.13 -3.42,-0.62 -1.26,0.03 -3.17,1.06 -6.07,1.12 -1.11,0.76 -0.63,1.23 -3.6,-0.25 -1.64,0.3 -3.37,1.52 -2.17,1.61 -6.06,1.41 -1.4,0.39 -0.7,0.35 -0.5,0.54 -1.84,2.72 -0.83,1.63 -0.1,0.38 -0.31,3.64 -0.09,0.45 -0.61,0.35 -0.52,0.24 -4.71,0.25 -2.73,-3.33 -0.47,-1.35 0.05,-1.42 -1.05,-0.86 -9.4,-2.44 -0.72,-1.94 -1.4,-1.36 -1.38,-0.97 -2.76,-2.34 -2.58,-2.81 -2.32,-3.22 -1.97,-3.6 -0.69,-1.94 -0.1,-0.55 -2.15,0.02 -7.62,2.18 -2.97,-0.23 -4.75,-3.01 -1.23,-0.57 -0.92,0.08 -0.94,0.35 -2.38,1.46 -4.24,2.66 -4.56,0.35 -1.91,1.23 -4.71,5.47 -0.38,0.48 -7.14,-0.33 -1.56,-1.21 -1.37,-15.04 -0.36,-2.16 -2.08,-0.79 -2.42,-3.05 -0.86,-3.02 5.23,-9.06 11.03,-19.17 11.05,-19.16 9.63,-16.73 6.81,-11.85 2.59,-4.49 3.15,-5.51 1.69,-2.13 2.24,-1.14 6.35,-0.01 19.28,-0.04 19.27,-0.02 19.27,-0.03 19.27,-0.04 18.47,-0.01 -17.14,34.25 -1.36,2.66 -9.1,18.62 -0.33,0.47 -2.61,2.53 0.17,0.96 0.17,0.25 0.11,0.35 -0.28,0.25 -0.51,0.19 -1.21,0.12 -0.57,0.13 -0.56,0.8 -3.77,2.68 -0.46,0.09 z"
        title="Huehuetenango"
        className="cls-1"
        fill={color}
        id="GT-HU"
      />
    </Tooltip>
  );
};

export default Huehuetenango;
