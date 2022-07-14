import React from "react";
import useHeatmap from "../../../../hooks";

// CHAKRA
import { Tooltip } from "@chakra-ui/react";

const Valle = ({ customColor = "", disableHeat = false }) => {
  let { color, onClick } = useHeatmap("valle", disableHeat);
  color = customColor || color;

  return (
    <Tooltip label="Valle" placement="auto">
      <path
        onClick={onClick}
        fill={color}
        className="cls-1"
        d="m 195.23094,484.61213 0.63,0.58 0.82,0 0.38,0.61 0.63,-0.39 0.41,0.22 0.28,0.89 -0.44,0.41 0.67,0.52 -0.44,1.94 -2.06,1.03 -2.98,-0.26 -0.51,-1.13 0.31,-1.24 -0.41,-0.51 -0.38,0 0.07,-0.33 0.44,0.2 0.41,-0.23 -0.18,-0.48 0.5,-0.45 0,-0.84 0.67,-0.26 0.25,0.23 0.93,-0.51 z m -3.83,-3.79 0.76,0.98 0.1,0.65 -1.11,0.55 0.19,0.58 -0.47,0.45 -0.16,-0.74 -0.51,-0.48 0.34,-0.16 0.16,-0.84 0.7,-0.99 z m 10.92,-3.41 1.28,0.35 0.67,-0.06 0.47,1.1 1.36,0.28 0.48,0.56 -0.57,0.52 -3.2,0.29 -0.04,-0.65 0.38,-0.61 -0.24,-0.36 -1.01,-0.26 -0.75,-0.47 1.17,-0.69 z m -2.11,-2.25 1.01,0.36 0.76,-0.26 1.01,0.26 0.44,0.45 -0.38,0.16 0.22,0.46 1.05,0.29 -0.38,0.68 -1.68,-0.39 -0.95,0.58 -0.79,0.03 0.76,0.81 1.55,0.55 -0.51,0.81 0.44,1.61 -0.82,0.65 0.13,1.33 -0.98,0.23 -0.32,-0.36 -0.57,-0.42 -0.31,0.39 -0.92,0.03 -0.28,-0.35 -0.63,0.58 -3.39,-1.26 -0.28,-0.89 -1.29,-1.06 -0.13,-1.39 0.89,-0.42 -0.44,-0.52 0.03,-1.29 0.92,0.42 0.63,-1.29 0.79,-0.16 0.63,1.03 1.05,0.16 1.43,-0.68 0.41,-0.88 0.9,-0.25 z m 15.65,-3.02 0.22,0.47 -0.29,0.69 0.63,0.48 0.83,-0.39 0.44,1.1 1.46,0.1 -1.17,1.26 -1.46,-0.23 -1.36,0.49 -1.33,-1.59 0.35,-1.68 0.38,0.13 1.3,-0.83 z m 0.22,-1.12 1.41,0.29 0.03,0.35 -0.8,0.2 -0.1,0.62 0.54,0.29 1.49,-0.1 0.6,1.39 -1.24,0.2 -0.33,-0.3 -0.16,-0.87 -0.52,0 -0.53,0.49 -0.47,-0.33 0.3,-0.69 -0.39,-1.24 0.17,-0.3 z m 1.64,0.97 -0.13,-0.87 -1.49,-0.26 -0.35,0.13 -0.25,1.13 -0.38,0.23 -0.85,-0.03 -0.27,0.3 -0.39,1.61 -0.28,-0.61 -0.16,0.29 1.01,2.4 0.03,0.78 -0.41,0.74 -1.17,-0.19 -0.06,-0.46 -1.08,-1.16 -1.24,-0.36 1.11,-1.2 -0.41,0.06 -0.89,0.75 0.01,0.25 -0.26,0.01 -0.41,-0.19 0.35,1.03 1.36,-0.23 -0.03,1.59 -0.92,0.49 -0.25,-0.61 -0.41,0.61 -0.28,-0.06 -0.06,0.71 -1.74,0.58 -1.14,-0.91 -1.27,-0.19 -0.38,-0.68 0.57,-1.03 0.76,-0.48 -0.16,-0.03 -1.28,0.55 -0.98,-0.37 0.19,-0.3 -0.56,-0.61 -1.11,-0.27 -1.54,-0.1 0.67,-0.61 -1.78,0.42 -1.04,0.81 -0.51,0.03 0.06,-0.81 0.57,-0.58 0.1,-0.61 0.82,-0.36 0.26,-1.16 -0.73,0.49 -0.51,-0.74 -2.03,-0.71 0.28,-0.71 0.98,0.19 -0.48,-0.55 0.44,-1.16 -0.53,-0.29 0.22,-0.97 0.25,-0.26 -0.09,-0.45 0.73,-0.43 0.13,-0.51 -0.95,0.07 -0.09,-0.23 0.6,-0.26 -0.22,-0.32 -0.67,-0.29 -0.89,0.23 -0.22,0.1 -0.73,0.39 -0.54,0.52 -1.14,0.29 0.13,0.68 -0.32,0.65 -0.35,0.06 -0.09,0.65 1.01,0.2 0.38,2.14 -0.73,1.46 -0.7,0 0.44,0.61 0.13,0.46 -0.25,0.58 -0.85,-0.42 -0.76,0.26 0.06,0.97 -0.42,0.14 0.01,0.91 -0.38,0.39 -0.66,0.19 -0.97,-0.42 -0.04,0.71 -2.57,0.26 -0.13,0.78 -2.44,0.03 -0.82,-0.06 -0.63,-0.23 -1.49,-1.94 -0.66,-0.29 -1.46,0.22 -0.22,-0.32 -0.6,-0.26 -0.95,-0.42 0,-0.65 -0.31,-0.16 -0.35,-0.23 -0.73,-1.07 1.9,-0.08 0.96,-1.46 1.47,-0.09 0.27,-0.58 1.68,-1.22 0.75,0.33 1.12,-0.97 1.68,0.04 0.84,-2.65 -0.75,-2.8 0.29,-1.72 -2.1,-0.77 -0.91,0.39 -0.54,-0.86 -1.39,1.05 -1.21,-0.49 -0.64,0.14 -0.17,-0.8 -0.86,-0.51 -0.05,-0.38 0.73,-0.92 -0.5,-1.08 0.18,-1.89 0.79,-1 -0.63,-0.62 1.08,-0.4 0.25,-1.12 2.03,-2.49 0.03,-3.27 0.55,-3.11 -0.34,-2.56 0.16,-1.12 0.45,-0.85 1.86,-1.85 0.69,-1.81 -0.09,-0.63 -0.7,-0.56 -0.05,-0.75 0.48,-1.09 0.97,-0.91 1.21,-1.96 0.09,-4.05 -1.07,-0.67 -1.05,-0.14 -1.42,-1.13 -0.45,-0.8 0,0 2.64,-0.93 2.83,-0.11 0.36,0.58 1.37,0.59 0.93,1.17 2.68,0.02 0,0 -0.19,2.55 0.34,2.96 -0.43,0.82 -0.25,3.45 1.07,-0.58 1.28,0.1 3.51,2.43 1.7,0.68 4.52,-0.45 0.27,0.9 2.35,1.47 0.58,0.79 2.81,0.75 0.38,0.46 0.27,-0.19 0.53,0.39 0.86,0.04 0.81,0.94 1.1,0.1 0,0 0.72,1.51 3.08,1.47 1.6,1.19 -1.82,5.29 1.43,0.55 0.53,0.98 -0.34,0.75 1.68,3.26 1.08,1.18 3.43,1.61 -0.18,2.3 -0.57,1.39 0.12,1.17 2.92,4.35 -0.45,0.35 0.14,1.12 -0.65,0.69 -0.57,2.02 -1.93,0.9 -0.68,-0.28 -0.27,0.19 -0.26,0.48 0.27,0.37 -0.31,0.22 0,0 -0.54,0.2 -0.14,1.45 -0.42,0.44 -1.25,-0.17 -0.41,-0.13 -0.92,0.36 -1.08,1.49 -0.38,-0.71 0.06,-1.39 0.98,-3.33 1.33,0.71 0.95,-0.42 0.19,-0.06 0.79,0.32 0.1,-0.23 -0.29,-0.36 -1.39,0.07 0.48,-0.39 -0.1,-1.07 -0.6,-0.19 -0.73,0.74 0.1,-1.16 -1.3,0.81 0.35,0.26 -1.05,1.88 -0.82,-0.94 -0.83,-0.41 z"
        title="Valle"
        id="HN-VA"
      />
    </Tooltip>
  );
};

export default Valle;
