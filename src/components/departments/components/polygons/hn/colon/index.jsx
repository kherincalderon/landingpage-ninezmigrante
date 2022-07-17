import React from "react";
import useHeatmap from "../../../../../../pages/country/components/statistics/components/heatMap/hooks";

// CHAKRA
import { Tooltip } from "@chakra-ui/react";

const Colon = ({ customColor = "", disableHeat = false }) => {
  let { color, onClick } = useHeatmap("colon", disableHeat);
  color = customColor || color;

  return (
    <Tooltip label="Colón" placement="auto">
      <path
        onClick={onClick}
        fill={color}
        className="cls-1"
        d="m 382.86094,164.85213 8.46,1.67 6.05,0.59 10.11,2.62 2.79,0.92 1.52,1.15 0.35,0.33 0.44,0.62 0.35,0 0.67,-0.88 0.54,0 3.01,1.24 0.54,0.56 0.03,0.98 0.63,0.03 0.16,-0.59 7.6,4.81 11.69,4.98 2.63,0.69 3.99,0.13 1.62,-0.33 1.39,-1.18 2.22,-0.2 0.95,-0.46 9.06,0.23 5.45,-0.46 4.81,-0.95 3.45,-1.08 3.01,-1.37 6.34,-5.37 2.95,-1.87 2.63,-1.21 0.51,-0.23 2.47,-0.46 3.1,0.16 0.44,0.16 0.35,-0.1 1.93,0.62 0,0 -0.35,0.12 -0.11,0.77 0.47,107.1 0,0 -11.44,-13.14 -15.63,-3.88 -9.71,-12.54 -6.43,-9.75 -16.03,-5.87 -2.68,-1.91 -6.82,-7.19 -12.44,-6.19 -1.49,0.56 -0.64,0.93 -0.76,0.33 -1.35,-0.26 -1.37,-1.68 -0.67,-0.3 -1.13,0.8 -1.38,0.21 -0.17,0.73 0.37,1.16 -0.21,0.48 -0.79,0.52 -2.07,0.54 -2,2.2 -0.55,1.05 -1.19,-0.12 -0.87,-0.53 -1.07,0.01 -0.59,-0.88 -2.21,0.19 -0.9,0.95 0.56,2.34 -4.75,4.71 -0.34,0.21 -1.05,-0.2 -0.47,0.3 -2.02,2.28 -0.43,1.89 -0.88,0.32 -0.58,0.81 -1.17,-0.11 -0.45,0.95 -1.3,-0.1 -0.48,0.83 -1.4,-0.23 -0.58,0.51 -0.24,0.89 -1.38,0.27 -1.07,-1.24 -4.1,-0.46 -0.49,1.43 -1.33,-0.57 -1.28,1.32 -1.4,0.67 -1.38,-0.08 -0.91,0.63 -0.5,-0.02 -1.83,-0.39 -7.54,-4.63 0,0 0.09,-3.5 -1.05,-1.32 0.54,-0.94 0.93,-0.37 -0.58,-1.47 0.57,-0.52 -0.29,-0.92 0.57,-1.83 -1.34,-2.52 0.93,-0.75 -2.51,0.19 0.29,0.93 -0.45,0.15 -0.74,-0.78 -0.34,0.46 -0.91,-0.69 -0.06,-0.61 -0.86,-0.08 -0.3,-0.46 -1.51,0.09 -0.59,-0.48 -1.63,-0.04 -0.23,-0.46 -0.46,0.35 -0.34,-0.41 -3.37,0.42 -0.99,-0.18 -0.84,0.82 -3.18,0.32 -0.71,-0.47 -0.33,-0.81 -1.62,-0.83 -1.67,-1.44 -2.52,-0.75 0,0 1.31,-1.49 4.37,-0.96 1.32,-0.68 0.23,-1.22 -0.27,-0.59 0,-2.25 0.31,-0.24 -0.31,-3.72 -0.65,-0.75 -1.34,0.16 -0.46,-0.55 -0.92,0.08 -0.34,-3.16 -1.3,-1.42 -1.19,-0.12 -2.35,-1.15 -1,-5.06 0.12,-0.44 0.92,-0.16 -0.04,-0.36 -2.87,-2.25 -0.77,-0.08 -1.14,-1 -0.12,-0.9 0,0 0.92,-0.33 1.33,0.1 5.77,3.31 3.23,1.15 1.14,-0.16 1.01,-0.82 2.66,0.72 1.39,-0.06 0.95,-0.62 0.54,-0.95 1.11,-0.29 0.41,-0.62 2.5,-0.26 2.88,-1.05 1.24,-1.37 1.36,-0.59 0.86,-1.54 1.08,-0.39 0.7,-1.18 2,-1.77 1.17,-0.36 1.2,-0.85 2,-0.39 0.44,-0.46 2.34,-0.03 1.77,-0.92 1.49,-0.2 0.82,-0.79 1.24,0.59 5.26,0.3 8.74,-0.89 2.85,-1.63 2.85,-0.92 1.68,-1.96 0.98,-0.03 1.3,-1.18 0.47,-0.76 1.62,0.92 1.05,1.31 0.73,0.36 2.57,-0.72 0.92,-1.37 0.22,-0.16 0.7,-1.57 1.49,0.13 0.38,-0.43 -0.22,-1.28 -1.74,-0.46 -2.63,-1.25 -1.3,0.39 -0.13,-0.29 -0.95,-0.2 -1.24,0.72 0.13,0.52 -0.48,0.39 0.13,0.26 0.29,0.16 0.13,0.72 -1.46,0.69 -1.88,2.58 -0.6,0 0.81,-1.92 0.34,-2.13 -0.19,-1.47 -0.76,-1.21 -2.06,-0.75 -1.52,0.36 -1.36,-0.13 -0.95,0.56 -1.27,-0.03 -1.33,-1.28 -1.93,-0.82 0.19,-0.49 1.37,-0.19 z"
        title="Colón"
        id="HN-CL"
      />
    </Tooltip>
  );
};

export default Colon;
