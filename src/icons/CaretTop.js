import React from "react";
import Svg, { Path } from "react-native-svg";

const CaretTop = ({ color, ...props }) => (
  <Svg viewBox="0 0 64 40" {...props}>
    <Path
      d="M62.7 38.4L32.6.8c-.3-.4-.9-.4-1.2 0L1.3 38.4C.6 39.3.9 40 2 40h60c1.1 0 1.4-.7.7-1.6z"
      fill={color}
    />
  </Svg>
);

export default CaretTop;
