import React from "react";
import useHeatmap from "../../../../hooks";

// CHAKRA
import { Tooltip } from "@chakra-ui/react";

const Chiquimula = () => {
  const { color, onClick } = useHeatmap("chiquimula");

  return (
    <Tooltip label="Chiquimula" placement="auto">
      <path
        onClick={onClick}
        d="m 427.99741,423.26 0,0 -1.34,1.92 -3.46,3.01 -1.1,1.69 -0.14,2.72 0.67,2.02 1.22,1.86 2.81,3.41 1.32,2.18 2.63,6.39 1.53,1.98 1.27,1.13 0.61,0.93 0.24,0.37 0.25,2.46 -0.36,1.13 -1.48,1.62 -0.5,0.91 0.59,7.28 -0.08,2.56 -0.65,2.39 -1.64,1.58 -1.61,0.12 -3.52,-1.21 -1.71,-0.31 -2.38,0.31 -1.06,0.71 -0.68,1.13 -1.27,1.58 -4.37,3.79 -1.95,2.12 -1.39,2.51 -1.15,1.22 -3.11,0.8 -1.43,0.94 -0.91,1.88 -0.25,2.29 0.3,4.49 -4.05,-2.97 -0.15,0.33 -0.72,1.11 -0.19,-2.79 -1.42,0.56 -3.18,3.29 -2.2,0.46 -1.58,-0.59 -1.58,-0.83 -2.21,-0.29 -1.52,0.64 -0.06,-0.06 -1.82,-2.16 -0.16,-0.29 -0.11,-0.22 -0.02,-0.52 0.07,-0.78 0.36,-1.66 0.46,-1.38 0.42,-0.93 0.66,-1.99 0.14,-0.75 0.03,-0.65 -0.39,-1 -1.96,-2.16 -0.87,-0.32 -10.51,0.42 -0.51,-0.15 -0.49,-0.33 -1.59,-2.37 -0.67,-1.31 -0.79,-1.16 -0.98,-1.07 -0.29,-0.26 -1.76,-0.6 -5.63,-0.64 -1.5,0.07 -0.48,-0.07 0.5,-3.08 5.01,-13.98 -0.55,-1.69 -0.51,-1.2 -0.16,-0.81 0.04,-0.86 0.09,-0.43 0.12,-0.41 0.29,-1.74 0.01,-0.47 -0.28,-1.66 -0.53,-1.55 -0.73,-1.17 -1.81,-0.52 -6.62,0.35 3.31,-6 0.56,-2.38 -0.43,-3.54 0.19,-0.72 3.19,-3.04 2.4,-1.85 1.64,0.21 4.75,2.45 4.48,2.2 2.06,0.48 7.49,0.14 2.13,-0.52 8.44,-6.81 2.71,-0.78 1.15,0.03 3.06,0.93 1.93,1.32 2.28,0 6.89,-2.34 2.19,0.69 0.56,0.74 0.9,0.62 1.05,-0.05 1.66,-0.55 0.86,-0.7 0.65,-0.74 0.72,-1.1 0.57,-0.55 0.94,-0.65 3.09,-1.58 1.06,-0.31 0.74,-0.11 0.36,0.15 0.26,0.19 0.25,0.23 0.23,0.26 0.21,0.31 0.54,1 0.41,1.01 0.18,0.33 0.14,0.33 0.2,0.33 0.44,0.99 0.04,0.11 z"
        title="Chiquimula"
        className="cls-1"
        fill={color}
        id="GT-CQ"
      />
    </Tooltip>
  );
};

export default Chiquimula;
