import React from "react";
import useHeatmap from "../../../../../../pages/country/components/statistics/components/heatMap/hooks";

// CHAKRA
import { Tooltip } from "@chakra-ui/react";

const SanSalvador = ({ customColor = "", disableHeat = false }) => {
  let { color, onClick } = useHeatmap("sansalvador", disableHeat);
  color = customColor || color;

  return (
    <Tooltip label="San Salvador" placement="auto">
      <path
        onClick={onClick}
        fill={color}
        className="cls-1"
        d="M 278.221191 137.381531 L 279.671204 135.601532 L 281.101196 136.121521 L 284.401215 135.251526 L 284.991211 133.481537 L 286.431213 132.871521 L 292.091187 133.821533 L 295.161194 135.941528 L 296.281189 135.771515 L 299.291199 134.601532 L 301.541199 132.181519 L 304.331207 130.711517 L 305.141205 130.751526 L 306.561188 131.941528 L 306.981201 133.581512 L 306.471191 135.481537 L 308.781189 137.581512 L 309.211212 138.791534 L 311.131195 138.121521 L 313.181213 138.051514 L 314.941193 134.821533 L 317.081207 133.971527 L 317.821198 131.981537 L 319.361206 131.291534 L 318.981201 133.101532 L 319.871185 132.781525 L 319.871185 132.781525 L 318.531189 137.061523 L 316.131195 139.971527 L 316.061188 142.881531 L 317.281189 144.291534 L 317.871185 147.571533 L 317.341187 153.271515 L 314.781189 160.451538 L 311.881195 162.431519 L 311.291199 164.461517 L 314.391205 169.91153 L 316.52121 174.821533 L 317.781189 176.521515 L 319.02121 180.481522 L 321.691193 183.221512 L 324.961212 184.251511 L 327.341187 186.461517 L 327.441193 187.111511 L 321.721191 192.191513 L 317.50119 193.801514 L 316.741211 194.911514 L 316.741211 195.851517 L 319.051208 196.911514 L 319.741211 200.781509 L 320.52121 201.751511 L 322.461212 201.931519 L 325.491211 201.221512 L 326.681213 201.631516 L 328.121185 202.911514 L 329.181213 204.621521 L 330.971191 209.681519 L 332.931213 211.911514 L 335.331207 216.121521 L 344.441193 217.941513 L 344.901215 221.821518 L 349.221191 228.241516 L 351.701202 234.931519 L 358.431213 248.661514 L 358.121185 250.201523 L 360.671204 249.14151 L 362.781189 250.101517 L 363.471191 251.061523 L 364.451202 251.201523 L 366.02121 249.591522 L 368.471191 248.201523 L 369.681213 255.471527 L 363.291199 258.451508 L 363.121185 258.961517 L 364.421204 261.821503 L 364.421204 261.821503 L 365.841187 263.66153 L 366.631195 263.751526 L 365.241211 266.871521 L 362.2612 266.89151 L 359.941193 268.031525 L 358.991211 269.221527 L 357.75119 269.321503 L 355.701202 271.821503 L 354.641205 272.431519 L 352.571198 272.15152 L 349.52121 269.801514 L 347.461212 269.131531 L 346.50119 269.181519 L 346.291199 270.581512 L 344.75119 271.14151 L 339.7612 269.481506 L 337.241211 272.081512 L 333.601196 278.331512 L 332.061188 279.601501 L 319.621185 280.551514 L 316.801208 281.65152 L 316.411194 282.741516 L 317.741211 284.851501 L 318.611206 288.561523 L 322.371185 293.321503 L 322.821198 295.051514 L 322.801208 298.551514 L 323.631195 301.39151 L 323.051208 303.211517 L 320.661194 305.701508 L 320.851196 309.40152 L 319.621185 311.14151 L 319.151215 313.201508 L 316.731201 314.761505 L 314.931213 319.931519 L 314.931213 319.931519 L 309.461212 320.011505 L 309.221191 320.571503 L 309.731201 321.181519 L 309.111206 322.281525 L 309.25119 324.871521 L 308.171204 325.781525 L 304.77121 324.65152 L 301.50119 324.321503 L 300.061188 323.41153 L 299.971191 322.481506 L 300.661194 320.731506 L 300.401215 318.701508 L 297.921204 316.341522 L 297.071198 312.851501 L 295.621185 310.761505 L 292.691193 304.471527 L 292.741211 302.551514 L 293.421204 300.461517 L 295.331207 297.471527 L 295.941193 292.521515 L 294.961212 290.191528 L 292.961212 287.271515 L 292.711212 284.65152 L 293.791199 282.531525 L 293.411194 279.781525 L 294.431213 277.121521 L 296.741211 274.871521 L 296.841187 274.221527 L 294.431213 273.14151 L 291.27121 273.111511 L 290.541199 272.711517 L 290.401215 271.89151 L 290.941193 268.521515 L 291.921204 266.271515 L 292.601196 265.731506 L 295.121185 265.16153 L 295.721191 264.071503 L 295.101196 263.181519 L 291.981201 261.171509 L 291.381195 260.191528 L 290.441193 258.051514 L 289.211212 252.771515 L 288.491211 251.701523 L 281.841187 248.781509 L 278.371185 247.831512 L 278.231201 247.001511 L 279.421204 246.031509 L 278.831207 245.071518 L 278.861206 243.781509 L 282.131195 240.331512 L 282.571198 237.981522 L 281.361206 237.721512 L 277.091187 239.531509 L 276.201202 239.161514 L 275.75119 238.371521 L 276.971191 237.021515 L 278.831207 232.691513 L 282.621185 219.841522 L 281.881195 215.061523 L 284.481201 209.851517 L 285.741211 204.101517 L 287.52121 198.961517 L 288.951202 192.961517 L 289.671204 184.691513 L 291.541199 183.201523 L 291.75119 179.841522 L 294.77121 177.771515 L 295.211212 175.501511 L 295.0112 171.921509 L 294.461212 170.621521 L 287.121185 169.421509 L 280.991211 166.751526 L 280.331207 164.791534 L 280.971191 164.081512 L 282.77121 163.621521 L 283.181213 163.211517 L 282.931213 162.451538 L 281.231201 161.311523 L 280.101196 158.341522 L 279.191193 158.881531 L 278.651215 158.621521 L 276.681213 156.64151 L 275.411194 157.251526 L 274.77121 157.031525 L 271.951202 152.281525 L 272.481201 150.751526 L 272.181213 148.751526 L 272.841187 147.981537 L 273.641205 148.231537 L 273.891205 147.89151 L 274.941193 144.231537 L 274.911194 141.761536 L 276.671204 140.91153 L 277.00119 139.601532 L 278.341187 138.481537 Z"
        title="San Salvador"
        id="SV-SA"
      />
    </Tooltip>
  );
};

export default SanSalvador;
