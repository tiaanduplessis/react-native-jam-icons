import React from "react";
import Svg, { Path } from "react-native-svg";

const Computer = ({ color, ...props }) => (
  <Svg viewBox="0 0 64 48" {...props}>
    <Path
      d="M5 40h54c1.7 0 3-1.3 3-3V3c0-1.7-1.3-3-3-3H5C3.3 0 2 1.3 2 3v34c0 1.7 1.3 3 3 3zM6 4h52v32H6V4zm56 40H2c-1.1 0-2 .9-2 2s.9 2 2 2h60c1.1 0 2-.9 2-2s-.9-2-2-2z"
      fill={color}
    />
  </Svg>
);

export default Computer;
