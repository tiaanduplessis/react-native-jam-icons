import React from "react";
import Svg, { Path } from "react-native-svg";

const EggF = ({ color, ...props }) => (
  <Svg viewBox="0 0 48 64" {...props}>
    <Path
      d="M23.6.3C10.6.3 0 26.4 0 39.5s10.6 23.7 23.6 23.7 23.6-10.6 23.6-23.7S36.6.3 23.6.3z"
      fill={color}
    />
  </Svg>
);

export default EggF;
