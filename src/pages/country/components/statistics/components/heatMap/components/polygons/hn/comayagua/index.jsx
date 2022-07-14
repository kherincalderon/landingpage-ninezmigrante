import React from "react";
import useHeatmap from "../../../../hooks";

// CHAKRA
import { Tooltip } from "@chakra-ui/react";

const Comayagua = ({ customColor = "", disableHeat = false }) => {
  let { color, onClick } = useHeatmap("comayagua", disableHeat);
  color = customColor || color;

  return (
    <Tooltip label="Comayagua" placement="auto">
      <path
        onClick={onClick}
        fill={color}
        className="cls-1"
        d="m 183.57094,285.26213 1.7,0.45 1.75,-0.52 0.92,0.21 0.9,-0.75 0.56,0.44 1.2,-0.79 0.47,0.12 0.37,-0.55 0.91,0.59 0.87,-0.17 0.51,0.25 0.42,-0.47 1.06,-0.04 1.22,1.31 0.52,0.17 1.19,-1.55 2.79,-0.44 0.14,-0.38 -0.8,-0.84 0.13,-0.22 0.89,-0.23 0.79,0.23 1.14,-1.6 1.14,0.12 1.08,-0.56 1.14,1.22 0.64,0.01 0.73,0.63 0.25,0.81 0.98,1.11 0.5,1.27 -0.41,0.52 0.1,2.02 0.79,0.66 0.05,0.82 1.05,0.81 1.04,-0.13 -0.23,1.03 1.39,-0.07 -0.1,0.83 0.38,1.21 -0.45,0.93 0.45,0.87 0.74,0.31 -0.64,1.02 0.55,0.36 -0.23,1.26 0.52,0.69 1.13,-0.01 0.28,0.32 0.34,-0.22 0.85,0.54 1.61,-0.71 0.93,0.17 0.46,-0.93 2.57,-2.4 1.93,-0.38 0.22,0.47 1.47,0.75 2.26,-0.06 0.49,0.34 0.66,-0.47 1.6,2.06 0.52,-0.23 0.67,-1.24 1.44,-0.05 1.46,2.19 1.16,0.76 1.22,0.31 1.08,0.84 1.69,0.31 0.17,0.71 0,0 -0.61,0.36 -0.18,0.52 0.73,0.1 0.77,1.05 -0.19,1.46 -1.61,0.55 -2.09,-0.2 -0.8,0.63 -0.39,1.15 -0.78,0.66 -0.28,1.55 0.62,0.34 0.18,1.18 1,1.37 -0.28,2.05 0.41,0.34 0.12,1.16 -0.13,1.34 -0.64,0.73 -0.04,1.29 -1.31,0.15 0.19,1.67 -0.52,0.44 0.59,0.83 -1.1,0.32 -0.06,0.56 -0.55,0.21 -0.98,-0.21 0.16,0.65 -0.72,0.23 -0.96,1 -1.24,0 -0.16,0.96 0.65,0.56 -0.17,0.31 -0.85,0.06 -0.11,-0.71 -0.63,0.06 -0.17,0.57 0.54,1.09 0.06,0.93 -0.73,0.75 0.53,0.72 -0.49,0.05 -0.51,0.85 0.25,1.15 -0.48,0.53 0.1,0.48 -2.4,0.06 -0.87,-0.49 -0.05,-0.69 -1.39,0.31 -2.23,-0.85 -0.89,0.38 0.36,1.44 -0.82,1.91 0.25,1.95 -0.41,0.06 -0.89,1.35 -5.56,4.91 1.82,5.34 1.59,0.3 1.07,1.21 1.11,0.27 0.54,0.85 1.49,0.06 -0.01,2.14 -0.52,0.54 -1.23,0.34 -0.08,0.32 2.61,0.43 0.47,1.53 0.82,0.33 -0.35,1.56 -1.91,4.58 -3.4,0.92 -0.52,0.4 -3.31,5.19 1.12,2.89 1.84,1.16 2.1,0.75 0.15,0.56 1.41,0.26 -0.32,0.53 -0.96,0.2 0.61,0.79 -0.4,0.36 0.23,0.28 -0.44,0.09 0.03,0.39 -1.54,-0.02 -2.89,1.17 -0.79,1.14 -0.17,1.23 -0.71,1.53 -2.37,1.15 -4.85,3.62 -4.24,-0.74 -1.1,0.58 -3.06,3.74 0.02,2.65 0,0 -3.08,-0.25 -0.74,0.27 -0.64,0.56 -0.19,0.95 -1.92,1.58 -0.19,0.8 -0.97,0.63 -0.19,-0.56 0.33,-0.14 -0.31,-0.16 0.02,-1.08 -0.33,-0.31 0.33,-0.12 -0.02,-1.55 0.41,-0.24 -1.15,-2.58 -1.78,1.14 -2.59,-4.24 -2.25,-0.07 -2.81,-0.71 -0.01,-1.79 1.76,-1.11 -1.95,-3.12 -4.02,-1.15 -0.07,-1.53 -0.83,-1.1 0.4,-0.73 1.28,-0.68 0.14,0.65 3.81,-1.72 0.59,1.02 0.49,-0.26 0.69,0.18 0.91,-0.53 1.5,0.33 0.67,-1.09 1.14,-0.18 0.25,-0.37 1.01,-0.3 1.38,0.26 1.78,-1.26 0.24,-0.5 0.3,0.8 0.84,-0.57 0.19,0.65 0.63,-1.09 0.64,0.39 0.26,-0.62 0.51,0.75 1.25,-0.7 -0.31,-1.29 0.77,0.29 0.43,-1.1 0.48,0.21 -0.57,-2.13 -0.52,-0.14 0.96,-1.05 -1.13,-0.48 0.15,-0.82 -0.38,-0.1 0.17,-0.31 -0.27,-0.55 0.63,-1.2 -0.4,-0.04 -0.26,-0.49 0.05,-1.1 -0.5,-0.7 -0.35,-0.02 0.25,-1.3 -0.33,0.48 -0.79,-0.47 -0.34,0.62 -0.28,-0.26 -4.21,2.62 -1.24,-1.13 -2.23,-0.27 -2.24,-1.26 -3.02,-0.2 -0.57,-0.95 -0.2,-1.17 -1.33,0.02 -1.2,-0.42 -2.3,0.14 -0.87,-2.3 -1.17,-1.45 0,0 0.98,-0.78 -0.49,-1.77 -0.84,-0.46 -0.08,-0.52 -2.71,-2.98 -0.65,-1.49 -1.38,-0.74 -0.34,-1.28 0.53,-1.19 -0.52,-1.21 -3.1,-1.32 -1.05,0.14 -0.24,-0.24 -0.84,-2.91 -0.01,-1.72 -1.26,-1.47 0.05,-1.81 -1.47,-0.46 -1.21,0.4 -1.03,-1.19 -6.01,-1.66 -2.16,0.34 -0.63,-0.73 -0.33,-1.31 -0.86,-0.83 0,0 2.64,-2.29 -2.08,-3.22 -1.28,-0.26 -0.03,-0.75 4.3,-4.79 2.32,-0.96 3.72,-3.89 0,0 1.5,-0.06 1.1,-1.39 8.52,-5.53 1.75,-1.36 0.96,-1.52 1.75,-0.99 -0.13,-0.7 1.44,-1.4 1.64,-0.08 0.29,-0.63 0.83,0.01 0.35,-0.83 0.58,0.42 0.89,-0.7 0.24,-1.44 1.6,0.46 0.04,-1.2 0.6,-0.78 3.28,-1 1.37,-1.7 -0.08,-0.59 0.36,-0.66 -0.28,-0.97 -0.64,-0.12 -0.19,-0.7 0.32,-0.76 -0.27,-0.54 z"
        title="Comayagua"
        id="HN-CM"
      />
    </Tooltip>
  );
};

export default Comayagua;
