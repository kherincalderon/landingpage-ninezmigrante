import React from "react";
import useHeatmap from "../../../../../../pages/country/components/statistics/components/heatMap/hooks";

// CHAKRA
import { Tooltip } from "@chakra-ui/react";

const Atlantida = ({ customColor = "", disableHeat = false }) => {
  let { color, onClick } = useHeatmap("atlantida", disableHeat);
  color = customColor || color;

  return (
    <Tooltip label="Atlántida" placement="auto">
      <path
        onClick={onClick}
        fill={color}
        className="cls-1"
        d="m 199.73094,176.71213 -0.22,0.56 -0.67,0.29 -1.17,1.28 -1.08,0.26 0.44,1.87 0.86,1.67 3.1,3.57 0.28,0.49 4.37,3.8 3.17,1.9 0.22,0.2 4.31,1.37 3.1,-0.16 1.24,-0.75 1.36,-1.73 0.1,-1.28 2.72,0 1.55,-0.52 0.86,-1.14 1.24,-1.41 -0.06,-0.88 4.85,1.6 2.88,0.52 10.26,3.21 7.7,1.41 0.79,0.13 5.64,0.29 4.91,1.28 3.61,-0.06 0.82,0.1 2.09,0.92 3.49,0.85 6.46,0.72 2.69,-1.01 5.92,-0.42 0.98,-0.78 0.86,-0.42 1.24,-0.39 1.39,-1.37 1.52,-0.79 0.35,1.08 1.01,-1.05 0.95,0.23 0.89,0.43 3.39,0.56 5.16,0.13 2.82,-0.49 1.74,-0.69 4.53,0 8.05,-1.08 1.55,-0.82 0,0 0.13,0.9 1.15,1 0.77,0.08 2.87,2.25 0.04,0.36 -0.92,0.16 -0.11,0.44 1,5.06 2.36,1.15 1.19,0.12 1.3,1.42 0.35,3.16 0.92,-0.08 0.46,0.55 1.34,-0.16 0.65,0.75 0.31,3.72 -0.31,0.24 0,2.25 0.27,0.59 -0.23,1.22 -1.32,0.68 -4.37,0.96 -1.31,1.49 0,0 -3.18,-0.75 -0.97,-0.72 -1.34,-0.38 -1.03,0.01 -0.3,0.62 -1.89,-0.02 -1.05,0.56 -0.81,-0.24 -0.07,0.39 -0.43,0.12 -1.43,-1.28 -2.14,0.11 -2.35,0.61 -7.51,-1.99 -6.38,2.46 -4.02,2.68 -3.13,0.87 -0.87,0.79 -4.07,-0.64 -0.5,-0.77 -0.47,-0.08 -0.58,0.15 -1.56,1.43 -1.59,-0.87 -1.15,0.13 -0.29,-2.03 -0.78,-0.15 -1.19,0.86 -1.44,-0.06 -1.73,0.61 -1.29,-0.52 -2.34,1.73 -1.95,-0.2 -3.27,0.21 -0.89,-0.29 -0.46,-0.66 -1.81,1.77 -0.97,1.56 -1.31,0.66 -0.98,1.13 -1.55,0.54 0.02,0.64 -0.78,0.63 0.02,1.41 -2.89,1.69 -1.92,0.12 -1.67,1.88 -2.04,0.16 -2.97,-0.36 -1.97,2.38 -0.21,1.29 -0.75,0.94 -0.98,-0.07 -0.6,-0.7 -1.06,0.44 -1.72,-0.02 -3.47,-1.55 -1.16,0.29 -0.52,-0.51 -1.01,0.08 -0.69,-0.94 -1.19,-0.37 -2.52,0.83 -1.09,-1.43 -1.07,0.11 -0.86,-0.63 -0.87,0.37 -1.19,1.2 -1.9,0.63 0.03,-0.26 -0.58,-0.07 -0.24,-0.46 0.2,-0.27 -0.6,0.07 0.11,-0.8 -0.89,0.4 -0.02,-0.4 -0.35,0.07 0.31,-0.48 -0.72,-0.29 -0.35,0.24 -0.32,-0.64 -0.39,0.18 -0.18,-0.72 -0.46,0.16 0.15,-0.81 -0.36,-0.91 -1.3,-0.81 0.67,-0.69 -0.88,-0.97 0.19,-0.88 -0.22,-0.58 0.52,-0.18 -0.16,-0.6 0.39,-0.08 -0.34,-0.58 0.25,-0.9 -1.54,-0.17 -1.19,-1.54 -0.45,0.5 -1.2,0.01 -1.37,1.73 -2.49,0.76 -0.47,0.51 -0.61,-0.93 -0.76,-0.13 -0.89,0.24 -0.68,0.61 -0.58,0.11 -0.45,-0.33 -1.1,0.43 0.04,0.27 -1.69,0.32 -4.36,0.23 -1.36,-0.33 -0.9,-0.93 -0.86,-1.79 -1.02,-0.28 -0.8,-1.44 -0.9,-0.25 -0.15,-0.85 -0.77,-1.21 0.14,-0.36 -0.48,-0.62 0.24,-0.38 -0.13,-0.85 -0.46,-0.97 0.25,-1.18 -0.47,-1.62 -0.02,-3.57 -1.37,-1.01 -0.25,-1.41 -0.85,0.27 0.01,-0.52 -1.66,-0.15 -0.7,-0.89 -0.77,-0.21 -0.1,-0.34 -0.46,0.06 -1.12,-1.91 -2.8,-0.44 -0.35,-0.55 0.3,-0.92 -0.15,-0.64 0,0 -0.08,-1.11 1.98,-0.11 0.18,-0.54 -0.99,-1.15 0.02,-1.58 -0.99,-1.53 -0.47,0.24 -0.47,1.37 -0.46,-0.11 0.56,-1.7 -0.78,-0.82 -0.17,-0.75 -1.24,-0.06 0.67,-1.01 -0.15,-1.61 0.55,-0.06 0.59,0.57 0.47,-0.14 0.18,-0.5 -0.4,-1.77 1.05,0.67 0.48,-0.04 -0.35,-0.48 0.14,-2.04 0.67,-0.52 -0.67,-0.65 -0.09,-0.84 1.56,-1.46 0.99,-1.48 1.13,0.45 1.06,-0.69 0.06,-1.92 0.44,-0.44 0.51,-1.92 0,0 1.04,0 0.13,0.36 0.86,-0.13 3.52,2.1 0.44,0.26 2.6,0.88 0.19,-0.2 0.79,-0.39 -0.6,1.57 0.67,0.72 0.7,0.13 0.67,-0.36 -0.03,-1.54 -0.32,-0.23 0.19,-0.56 -0.35,-1.01 0.73,0.13 0.25,-0.56 -0.28,-0.16 0.79,-0.79 0.63,-0.33 0.57,0.2 1.45,-1.08 z"
        title="Atlántida"
        id="HN-AT"
      />
    </Tooltip>
  );
};

export default Atlantida;
