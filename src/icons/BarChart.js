import React from "react";
import Svg, { Path } from "react-native-svg";

const BarChart = props => (
  <Svg viewBox="0 0 64 64" {...props}>
    <Path
      d="M61 58H6V3c0-1.7-1.3-3-3-3S0 1.3 0 3v58c0 1.7 1.3 3 3 3h58c1.7 0 3-1.3 3-3s-1.3-3-3-3zm-46-4c2.2 0 4-1.8 4-4V18c0-2.2-1.8-4-4-4s-4 1.8-4 4v32c0 2.2 1.8 4 4 4zm14 0c2.2 0 4-1.8 4-4V34c0-2.2-1.8-4-4-4s-4 1.8-4 4v16c0 2.2 1.8 4 4 4zm14 0c2.2 0 4-1.8 4-4V26c0-2.2-1.8-4-4-4s-4 1.8-4 4v24c0 2.2 1.8 4 4 4zm14 0c2.2 0 4-1.8 4-4v-8c0-2.2-1.8-4-4-4s-4 1.8-4 4v8c0 2.2 1.8 4 4 4z"
      fill="#333"
    />
  </Svg>
);

export default BarChart;
