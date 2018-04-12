import React from "react";
import Svg, { Path } from "react-native-svg";

const RecF = ({ color, ...props }) => (
  <Svg viewBox="0 0 64 64" {...props}>
    <Circle cx={32} cy={32} r={32} fill={color} />
  </Svg>
);

export default RecF;
