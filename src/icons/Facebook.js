import React from "react";
import Svg, { Path } from "react-native-svg";

const Facebook = ({ color, ...props }) => (
  <Svg viewBox="0 0 30 64" {...props}>
    <Path
      d="M22.7 11.2H30V0h-9.9C6.2 0 6.5 10.8 6.5 12.4v8.8H0V32h6.5v32h13.3V32h8.9s.8-5.2 1.2-10.8h-10v-7.4c0-1.1 1.4-2.6 2.8-2.6z"
      fill={color}
    />
  </Svg>
);

export default Facebook;
