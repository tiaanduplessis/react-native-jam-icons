import React from "react";
import Svg, { Path } from "react-native-svg";

const Direction = ({ color, ...props }) => (
  <Svg viewBox="0 0 56 64" {...props}>
    <Path
      d="M48 8H26V2c0-1.1-.9-2-2-2s-2 .9-2 2v6H2c-1.1 0-2 .9-2 2v15c0 1.1.9 2 2 2h20v35c0 1.1.9 2 2 2s2-.9 2-2V27h22l8-9-8-10zm-1.8 15H4V12h42.1l4.7 5.9-4.6 5.1z"
      fill={color}
    />
  </Svg>
);

export default Direction;
