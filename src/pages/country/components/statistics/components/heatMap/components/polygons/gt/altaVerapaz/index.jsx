import React from "react";
import useHeatmap from "../../../../hooks";

// CHAKRA
import { Tooltip } from "@chakra-ui/react";

const AltaVerapaz = () => {
  const { color, onClick } = useHeatmap("altaverapaz");

  return (
    <Tooltip label="Alta Verapaz" placement="auto">
      <path
        onClick={onClick}
        d="m 309.04741,265.78 0,0 0.23,-0.17 0.02,-0.04 0.08,-0.18 0.09,-0.29 0.37,-0.38 0.61,-0.35 1.53,-0.23 0.62,0.17 0.37,0.4 0.11,0.48 0.39,0.49 0.53,0.11 0.76,-0.18 0.39,-0.01 0.22,0.07 0.54,0.63 0.34,0.07 0.4,-0.08 0.39,-0.18 1.12,-0.22 0.26,-0.16 0.08,-0.09 0.01,-0.05 0,-0.15 -0.04,-0.29 -0.29,-1.14 0.04,-0.43 0.24,-0.06 0.28,0.08 1.06,0.44 0.3,0.19 0.19,0.27 0.01,0.37 -0.07,0.32 -0.1,0.27 -0.05,0.09 -0.02,0.07 0.19,0.36 0.41,0.25 0.26,0.23 0.04,0.31 -0.35,1 2.37,1.83 1.59,0.33 0.35,-0.15 0.62,-0.64 2.44,1.67 1.32,0.16 0.78,-0.12 0.34,0.19 0.42,0.59 0.48,0.87 1.82,2.49 0.37,0.86 0.22,0.72 0.65,1.29 0.5,0.45 0.48,0.17 0.38,-0.11 0.51,-0.05 0.59,0.04 2.16,0.33 4.71,-0.26 0.75,-0.21 0.26,-0.15 0.16,-0.14 0.17,-0.21 0.58,-0.84 0.24,-0.25 0.27,-0.21 0.37,-0.13 0.42,-0.01 1.22,0.11 0.39,-0.06 0.76,-0.44 0.52,-0.38 0.42,0.04 0.41,0.11 3.29,1.53 0.39,0.23 2.22,1.88 2.91,2.01 0.79,0.39 0.65,0.23 1.87,0.11 0.76,-0.18 0.35,-0.15 0.32,-0.19 1.63,-1.33 0.98,-0.05 8.66,1.14 0.53,0.01 0.41,-0.09 0.37,-0.14 0.32,-0.18 0.28,-0.22 0.62,-0.21 0.85,-0.19 1.94,-0.09 0.89,0.08 0.6,0.23 0.11,0.37 0.35,7.57 0.08,0.14 0.18,-0.02 3.7,-1.73 2.98,-0.6 2.37,1.3 1.11,0.11 1.69,-0.78 4.2,-1.06 -3.83,5.15 -1.43,1.14 -2.71,0.28 -0.49,0.26 -0.34,0.28 -0.71,1.32 -0.14,0.38 -1.7,3.11 -0.54,0.72 -0.5,0.39 -1.46,0.66 -2.33,1.66 -0.73,0.36 -1.45,0.45 -0.41,0.3 -0.29,0.36 -0.31,0.73 -8.81,12.46 -7.84,11.17 -1.03,2.44 0.38,0.11 0.62,0.38 0.28,0.23 0.28,0.31 0.2,0.26 0.53,0.88 3.09,3.33 1.11,1.67 1.22,1.35 1.83,1.68 0.5,0.79 0.2,0.57 -1.15,1.84 -0.17,0.35 -0.26,0.73 -0.4,1.61 -0.33,0.68 -0.19,0.29 -0.25,0.3 -0.25,0.25 -0.29,0.21 -2.65,1.28 -0.85,0.65 -0.23,0.27 -1.25,16.99 0.03,2.17 0.12,0.5 0.57,1.4 0.34,0.63 0.93,1.28 0.79,1.39 0.12,0.6 -0.01,0.74 -0.45,2.39 -0.03,0.8 0.03,0.62 0.27,0.76 0.62,1.36 2.51,3.59 -9.67,2.26 -4.47,-0.3 -8.89,1.36 -1.65,-0.35 -4.89,-1.88 -3.23,-0.12 -1.45,0.21 -3.84,1.72 -4.09,1.08 -2.32,0.19 -6.88,-0.79 6.18,-8.89 1.49,-4.22 0.11,-1.47 -0.27,-0.72 -0.34,-0.64 -0.65,-0.82 -1.57,-1.49 -1.04,-0.61 -0.51,-0.16 -0.47,-0.1 -6.28,0.53 -1.27,0.3 -4.58,1.83 -5.48,0.19 -15.26,-2.16 -6.72,-1.62 -1.89,-0.11 -0.6,0.42 -0.24,0.25 -0.22,0.28 -0.35,0.69 -0.12,0.32 -0.11,0.9 -1.12,4.47 -0.95,1.37 -0.67,0.58 -1.7,2.14 -0.55,0.58 -1.41,0.77 -0.55,0.07 -0.41,-0.11 -1.49,-1.49 -7.7,-5.25 -3.03,-0.96 -3.29,0.12 -4.7,-0.12 -3.19,-0.02 -3.25,-0.16 0.92,-1.25 1.31,-2.44 1.31,-3.33 0.12,-2.95 -2.22,-1.27 -21.99,-3.38 -4.37,-1.72 -2.88,-2.81 -0.71,-2.05 -0.28,-2.63 0.58,-2.28 1.88,-0.97 5.58,-0.52 1.7,-0.91 -1.12,-1.54 0,-0.99 3.91,-3.51 0.78,-0.39 1.51,-1.58 0.95,-1.72 -0.9,-0.81 -0.74,-1.34 -0.95,-2.98 -1.41,-3.02 -2.11,-1.49 1.22,-2.36 -0.11,-2.07 -1.4,-1.88 -2.66,-1.71 -0.06,-0.68 0.21,-0.19 0.4,0 0.49,-0.12 -1.14,-0.69 -1.28,-0.23 -1.28,0.23 -1.15,0.69 -1.68,-0.92 -5.92,-1.74 -5.21,-0.89 -1.06,-1.39 0.52,-1.64 1.89,-1.35 -0.79,-0.48 -2.07,-1.59 0,-0.9 0.69,-0.24 0.62,-0.53 0.68,-0.31 -0.93,-1.31 -1.33,-0.7 -1.63,-0.19 -1.83,0.21 0.88,-2.1 3.8,-4.84 1.86,-5.09 0.57,-0.86 3.4,-1.34 1.45,-2.84 -0.85,-2.49 -3.48,-0.37 1.36,-4.83 1.08,-2.11 1.38,-1 0,-0.99 -0.72,-0.13 -0.11,-0.15 0.04,-0.26 -0.25,-0.46 -0.96,1 -1.24,-1.4 -0.58,-0.5 0,-1.08 1.87,-0.45 2.2,-1.83 1.57,-0.7 0.35,0.46 0.45,0.96 0.66,0.61 0.97,-0.59 0.51,-1.21 -0.26,-0.76 -0.02,-0.63 1.25,-0.83 -1.04,-1.98 5.94,-3.24 3.62,-0.79 1.98,2.04 0.95,0 0.45,-1.16 0.64,-0.55 0.81,0.04 0.96,0.59 0,1.08 -0.62,0.28 -0.69,0.41 -0.68,0.22 0,1.08 2.35,-0.12 1.41,0.83 1.24,1.21 1.85,0.97 0.42,-0.47 0.91,-0.79 0.58,-0.64 0.24,0.9 0.15,0.04 0.18,-0.44 0.3,-0.5 1,0.98 0.46,-0.08 0.53,-0.9 0.96,0 1.45,0.66 2.71,-1.71 1.65,1.05 0.87,0 0.21,-0.72 0.48,-0.63 0.27,-0.72 1.67,0.62 1.43,-0.6 0.6,-1.34 -0.84,-1.57 1.18,-1.63 0.29,-1.38 -0.69,-1.13 -1.65,-0.87 0.01,0 0.04,-0.06 3.79,-0.39 28.51,4.39 23.79,7.67 0.91,0.09 z"
        title="Alta Verapaz"
        className="cls-1"
        fill={color}
        id="GT-AV"
      />
    </Tooltip>
  );
};

export default AltaVerapaz;
