import React from "react";
import useHeatmap from "../../../../../../pages/country/components/statistics/components/heatMap/hooks";

// CHAKRA
import { Tooltip } from "@chakra-ui/react";

const Morazan = ({ customColor = "", disableHeat = false }) => {
  let { color, onClick } = useHeatmap("morazan", disableHeat);
  color = customColor || color;

  return (
    <Tooltip label="Morazan" placement="auto">
      <path
        onClick={onClick}
        fill={color}
        className="cls-1"
        d="M 656.831177 154.091522 L 659.931213 156.181519 L 668.121216 156.731537 L 668.231201 163.16153 L 670.411194 166.39151 L 671.971191 167.781525 L 674.321228 172.011536 L 685.061218 187.271515 L 686.621216 193.281509 L 703.571228 183.581512 L 705.291199 185.26152 L 705.291199 185.26152 L 702.751221 191.661514 L 702.271179 195.411514 L 702.321228 197.931519 L 703.791199 206.26152 L 704.191223 215.411514 L 701.541199 227.211517 L 702.251221 228.251511 L 706.841187 227.661514 L 707.691223 228.341522 L 708.321228 233.101517 L 709.801208 236.371521 L 709.181213 243.251511 L 707.451172 246.981522 L 704.801208 255.89151 L 695.531189 275.971527 L 695.991211 279.571503 L 692.881226 288.031525 L 689.971191 292.131531 L 683.001221 295.16153 L 681.851196 296.241516 L 681.851196 296.241516 L 679.371216 295.831512 L 676.741211 296.091522 L 664.381226 300.601501 L 657.611206 302.311523 L 656.041199 301.461517 L 652.721191 294.231506 L 645.541199 291.521515 L 644.701172 290.631531 L 645.181213 288.301514 L 646.861206 286.311523 L 646.291199 284.041504 L 646.941223 283.021515 L 645.471191 282.131531 L 645.451172 281.16153 L 644.411194 280.191528 L 644.721191 278.321503 L 638.271179 278.461517 L 631.951172 279.761505 L 628.431213 280.011505 L 626.481201 280.65152 L 622.321228 283.501526 L 620.381226 283.871521 L 622.061218 280.451508 L 624.181213 278.571503 L 623.871216 277.491516 L 617.481201 272.861511 L 617.221191 271.751526 L 617.861206 268.981506 L 617.251221 267.331512 L 613.051208 264.801514 L 611.041199 261.41153 L 603.391174 254.721512 L 602.501221 252.311523 L 602.321228 247.171509 L 603.211182 243.461517 L 604.361206 241.571518 L 608.481201 238.441513 L 617.161194 233.001511 L 617.651184 231.90152 L 617.291199 227.601517 L 604.751221 218.061523 L 602.731201 212.961517 L 601.991211 206.941513 L 606.51123 199.801514 L 606.681213 194.181519 L 608.181213 193.061523 L 610.381226 193.51152 L 611.021179 193.211517 L 609.871216 189.591522 L 606.181213 187.871521 L 606.341187 185.781509 L 605.611206 184.431519 L 605.611206 184.431519 L 607.401184 183.631516 L 620.241211 172.581512 L 619.771179 165.621521 L 621.01123 161.011536 L 621.381226 155.701538 L 623.281189 155.671509 L 623.971191 154.701538 L 627.281189 154.721527 L 627.461182 155.861511 L 628.531189 156.66153 L 630.391174 157.121521 L 632.931213 156.871521 L 634.161194 156.811523 L 635.141174 158.721527 L 636.191223 158.831512 L 637.411194 158.241516 L 638.301208 158.481537 L 638.971191 159.101532 L 640.391174 158.811523 L 642.191223 158.671509 L 643.331177 156.931519 L 644.901184 157.311523 L 645.541199 156.671509 L 647.51123 157.501526 L 651.151184 156.371521 L 654.451172 154.341522 Z"
        title="Morazan"
        id="SV-MO"
      />
    </Tooltip>
  );
};

export default Morazan;
