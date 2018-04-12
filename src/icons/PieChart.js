import React from "react";
import Svg, { Path } from "react-native-svg";

const PieChart = ({ color, ...props }) => (
  <Svg viewBox="0 0 64 64" {...props}>
    <Path
      d="M32 0v32h32C64 14.3 49.7 0 32 0zm-4 36V.2C12.2 2.2 0 15.7 0 32c0 17.7 14.3 32 32 32 16.3 0 29.8-12.2 31.8-28H28z"
      fill={color}
    />
  </Svg>
);

export default PieChart;
