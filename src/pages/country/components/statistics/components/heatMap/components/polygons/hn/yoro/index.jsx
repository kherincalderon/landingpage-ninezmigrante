import React from "react";
import useHeatmap from "../../../../hooks";

// CHAKRA
import { Tooltip } from "@chakra-ui/react";

const Yoro = ({ customColor = "", disableHeat = false }) => {
  let { color, onClick } = useHeatmap("yoro", disableHeat);
  color = customColor || color;

  return (
    <Tooltip label="Yoro" placement="auto">
      <path
        onClick={onClick}
        fill={color}
        className="cls-1"
        d="m 183.57094,285.26213 0.72,-0.75 -0.98,-0.87 -0.76,-2.55 0.5,-1.21 -0.01,-1.88 0.95,-0.55 0.34,-0.64 0.02,-0.35 -0.53,-0.42 0.22,-0.67 -0.4,-0.55 0.73,-1.18 -0.95,-0.35 -1.44,-1.47 -0.17,-0.78 -1.54,-0.93 -1.28,0.8 -1.87,-0.31 -0.16,-0.31 0.36,-0.18 0.08,-0.66 -0.74,-0.94 -1.32,0.65 -0.69,-1.11 -2.34,0.44 -0.58,-0.18 -0.42,-0.5 0.29,-1.08 -1.25,-0.49 -0.75,-1.52 -1.48,-0.17 -2.01,0.45 -1.57,-0.95 -1.23,-0.19 -0.14,-0.45 0.57,-0.52 -0.71,-0.6 0.63,-1.13 -0.76,-1.04 0.48,-1.27 -1.52,1.01 -0.35,-2.03 0.57,-1.38 -0.19,-1.11 0.46,-0.18 1.24,0.27 0.66,-0.36 0.16,-1.34 -1.59,-0.4 -0.26,-0.32 0.52,-1.2 1.81,-0.09 -0.09,-0.48 -1.12,-0.99 0.02,-0.74 1.14,-0.28 1.33,0.32 0.51,-0.49 0.21,-1.67 0.37,-0.46 1.2,1.02 0.74,-0.05 0.19,-0.81 -1.54,-0.28 -0.05,-0.6 2.17,-1.48 1.19,-1.5 0.99,-3.32 1.58,0.39 0.54,-0.42 0.08,-1.21 -0.63,-2.12 -2.45,-1.47 -1.76,-0.45 -0.24,-0.7 0.78,-0.48 2.47,-0.13 0.52,2.1 0.63,0.27 1.68,-2.2 0.13,-1.02 -0.32,-0.67 -1.89,-0.79 0.49,-1.79 -1.44,-1.04 0.02,-0.59 0.93,-1.21 -0.55,-1.45 0.81,-0.31 1.27,1.17 0.71,-0.08 0.14,-0.77 -0.99,-1 -0.22,-1.58 0.26,-0.59 1.01,-0.22 0.59,-0.6 -0.73,-2.31 0.38,-0.42 0.76,0.09 1.08,0.69 0.56,0.95 0.7,-0.15 0.24,-0.67 -1.35,-2.33 0.61,-0.46 1.42,0.43 0.07,-2.05 -1.1,-1.13 0.3,-1.65 -0.36,-0.75 -0.91,-0.16 -1.68,0.43 -1.2,-0.65 -0.25,-0.82 0.7,-1.03 -0.14,-0.61 -0.65,0.02 -0.78,1.27 -0.99,-0.57 -0.19,-0.88 0.55,-1.65 0.73,-0.55 1.23,0.08 -0.01,-0.85 -0.6,0.04 -0.95,0.69 -1.04,-0.33 -0.94,0.2 1.39,-1.71 2.24,-0.88 0.45,-2.22 0.9,0.13 1.28,1.56 0.79,-0.52 0.2,-0.86 0,0 0.16,0.64 -0.3,0.92 0.35,0.55 2.8,0.44 1.12,1.91 0.47,-0.06 0.1,0.34 0.77,0.21 0.7,0.89 1.66,0.15 -0.01,0.52 0.85,-0.28 0.25,1.41 1.37,1.01 0.03,3.56 0.47,1.62 -0.25,1.18 0.47,0.97 0.13,0.85 -0.24,0.39 0.48,0.62 -0.14,0.36 0.77,1.2 0.15,0.85 0.91,0.25 0.8,1.45 1.02,0.28 0.86,1.79 0.9,0.93 1.36,0.34 4.36,-0.23 1.68,-0.32 -0.03,-0.27 1.09,-0.43 0.45,0.33 0.58,-0.11 0.68,-0.61 0.89,-0.24 0.75,0.13 0.61,0.93 0.47,-0.51 2.49,-0.76 1.37,-1.73 1.2,-0.01 0.45,-0.5 1.2,1.54 1.54,0.18 -0.25,0.9 0.34,0.58 -0.4,0.08 0.16,0.6 -0.51,0.18 0.22,0.58 -0.19,0.88 0.88,0.97 -0.66,0.69 1.3,0.81 0.37,0.91 -0.16,0.81 0.47,-0.16 0.18,0.72 0.39,-0.18 0.31,0.65 0.35,-0.24 0.73,0.29 -0.31,0.48 0.35,-0.08 0.02,0.4 0.89,-0.4 -0.1,0.8 0.6,-0.06 -0.2,0.27 0.24,0.46 0.58,0.07 -0.03,0.26 1.9,-0.63 1.19,-1.2 0.87,-0.37 0.86,0.63 1.07,-0.1 1.1,1.43 2.52,-0.84 1.19,0.37 0.69,0.94 1.01,-0.08 0.51,0.51 1.17,-0.29 3.47,1.54 1.72,0.02 1.07,-0.44 0.59,0.71 0.98,0.07 0.75,-0.94 0.21,-1.29 1.97,-2.38 2.98,0.36 2.04,-0.16 1.67,-1.88 1.91,-0.11 2.89,-1.69 -0.02,-1.41 0.79,-0.63 -0.03,-0.64 1.55,-0.54 0.98,-1.13 1.3,-0.67 0.97,-1.56 1.81,-1.77 0.46,0.66 0.89,0.29 3.27,-0.21 1.95,0.2 2.34,-1.73 1.29,0.52 1.73,-0.61 1.44,0.07 1.19,-0.86 0.78,0.15 0.29,2.03 1.15,-0.13 1.59,0.87 1.56,-1.43 0.59,-0.15 0.47,0.08 0.49,0.78 4.07,0.64 0.87,-0.8 3.14,-0.86 4.02,-2.68 6.37,-2.47 7.51,2 2.35,-0.61 2.15,-0.12 1.42,1.29 0.44,-0.12 0.07,-0.39 0.81,0.24 1.05,-0.56 1.89,0.03 0.3,-0.62 1.03,-0.01 1.34,0.38 0.97,0.72 3.18,0.74 0,0 2.53,0.76 1.66,1.44 1.62,0.83 0.33,0.81 0.71,0.46 3.19,-0.32 0.84,-0.82 0.99,0.18 3.36,-0.43 0.34,0.42 0.46,-0.35 0.23,0.46 1.63,0.04 0.59,0.48 1.51,-0.09 0.31,0.46 0.86,0.08 0.06,0.61 0.91,0.69 0.34,-0.46 0.74,0.78 0.45,-0.15 -0.28,-0.93 2.5,-0.19 -0.92,0.75 1.34,2.51 -0.56,1.83 0.29,0.93 -0.57,0.52 0.58,1.47 -0.93,0.37 -0.54,0.94 1.05,1.33 -0.09,3.49 0,0 -5.91,3.95 -0.7,0.02 -8.39,4.98 -3.96,2.1 -1.25,0.33 -1.21,-0.19 -1.36,-4.31 -0.87,-1.05 -0.34,-0.11 -0.28,0.45 -0.7,-0.5 -0.99,0.06 0.16,-0.39 -0.49,0.04 0.2,-0.61 -0.77,-0.6 -0.52,-1.48 -4.14,-1.09 0.11,0.83 -0.3,0.31 -1.58,0.32 -1.07,0.97 -0.68,-0.63 -1.2,0.07 -2.78,1.63 -0.62,0.93 -1.47,0.09 -3.93,1.92 -0.71,1.07 -1.36,0.76 -0.93,-0.04 -0.71,-0.57 -1.79,0.61 -0.27,3.9 -1.63,1.27 -0.14,1.08 -1,0.29 -3.08,1.91 -2.21,-0.37 -1.78,0.31 -1.91,-0.56 -0.71,-0.97 -0.22,-1.17 -1.58,-0.89 -0.77,1.24 -1.12,0.5 -0.15,0.44 -2.67,-0.86 -0.33,1.68 -1.8,0.43 -1.39,1.21 -1.04,0.03 -0.97,1.02 -0.41,1.98 0.67,4.34 0.91,2.06 -0.02,1.99 -1.07,1.66 0.72,0.37 -0.26,1.05 -0.48,0.15 -0.14,0.49 -0.79,0.42 -0.45,0.67 0.08,1.88 -0.61,0.18 0.36,2.53 -0.56,0.47 -1.16,-0.35 -0.87,0.88 -1.68,0.53 -0.28,0.73 0.01,1.92 -0.35,0.62 -0.89,-0.42 -1.16,0.35 -2,-0.57 -1.05,0.37 -1.08,1.08 -1.39,2.23 0,0 -4.66,-1.06 -1.91,0.36 -1.52,-0.12 -1.24,0.68 -1.48,0.28 -1.55,-0.63 -1.63,-1.24 -2.19,0.26 -0.81,-0.4 -0.46,0.69 -2.04,-0.06 -0.85,0.55 -1.05,-0.03 -1.49,1.8 0.27,1.26 -0.25,1.06 0.18,2.29 -0.63,0.66 -1.01,0.27 -2.26,2.54 0.07,0.96 1.14,1.09 0.02,0.39 -0.5,0.41 0.09,0.64 1.96,0.48 -0.31,0.89 0.63,1.05 -0.62,0.8 -0.08,0.82 -1.04,-0.01 -0.67,-0.68 0,0 -0.17,-0.71 -1.69,-0.31 -1.08,-0.84 -1.22,-0.31 -1.16,-0.76 -1.46,-2.19 -1.44,0.05 -0.67,1.24 -0.52,0.23 -1.6,-2.06 -0.66,0.47 -0.49,-0.34 -2.26,0.06 -1.47,-0.75 -0.22,-0.47 -1.93,0.38 -2.57,2.4 -0.46,0.93 -0.93,-0.17 -1.61,0.71 -0.85,-0.54 -0.34,0.22 -0.28,-0.32 -1.13,0.01 -0.52,-0.69 0.23,-1.26 -0.55,-0.36 0.64,-1.02 -0.74,-0.31 -0.45,-0.87 0.45,-0.93 -0.38,-1.21 0.1,-0.83 -1.39,0.07 0.23,-1.03 -1.04,0.13 -1.05,-0.81 -0.05,-0.82 -0.79,-0.66 -0.1,-2.02 0.41,-0.52 -0.5,-1.27 -0.98,-1.11 -0.25,-0.81 -0.73,-0.63 -0.64,-0.01 -1.14,-1.22 -1.08,0.56 -1.14,-0.12 -1.14,1.6 -0.79,-0.23 -0.89,0.23 -0.13,0.22 0.8,0.84 -0.14,0.38 -2.79,0.44 -1.19,1.55 -0.52,-0.17 -1.22,-1.31 -1.06,0.04 -0.42,0.47 -0.51,-0.25 -0.87,0.17 -0.91,-0.59 -0.37,0.55 -0.47,-0.12 -1.2,0.79 -0.56,-0.44 -0.9,0.75 -0.92,-0.21 -1.75,0.52 z"
        title="Yoro"
        id="HN-YO"
      />
    </Tooltip>
  );
};

export default Yoro;
