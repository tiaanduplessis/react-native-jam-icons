import React from "react";
import Svg, { Path } from "react-native-svg";

const ThunderF = ({ color, ...props }) => (
  <Svg viewBox="0 0 34 64" {...props}>
    <Path d="M34 25.6H18V0L0 38.4h16V64z" fill={color} />
  </Svg>
);

export default ThunderF;
