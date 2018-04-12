import React from "react";
import Svg, { Path } from "react-native-svg";

const BoxF = ({ color, ...props }) => (
  <Svg viewBox="0 0 64 48" {...props}>
    <Path
      d="M32 28c-5.2 0-9.7-3.3-11.3-8H0v26c0 1.1.9 2 2 2h60c1.1 0 2-.9 2-2V20H43.3c-1.6 4.7-6.1 8-11.3 8zM61 0H3C1.3 0 0 1.3 0 3v13h64V3c0-1.7-1.3-3-3-3z"
      fill={color}
    />
  </Svg>
);

export default BoxF;
