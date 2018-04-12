import React from "react";
import Svg, { Path } from "react-native-svg";

const WaterDropF = ({ color, ...props }) => (
  <Svg viewBox="0 0 42 64" {...props}>
    <Path
      d="M21 0S0 31.4 0 43c0 11.6 9.4 21 21 21s21-9.4 21-21S21 0 21 0z"
      fill={color}
    />
  </Svg>
);

export default WaterDropF;
