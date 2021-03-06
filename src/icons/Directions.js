import React from "react";
import Svg, { Path } from "react-native-svg";

const Directions = ({ color, ...props }) => (
  <Svg viewBox="0 0 59 64" {...props}>
    <Path
      d="M54 32H29v-5h22l8-9-8-10H29V2c0-1.1-.9-2-2-2s-2 .9-2 2v6H5c-1.1 0-2 .9-2 2v15c0 1.1.9 2 2 2h20v5H8L0 42l8 9h17v11c0 1.1.9 2 2 2s2-.9 2-2V51h25c1.1 0 2-.9 2-2V34c0-1.1-.9-2-2-2zM7 23V12h42.1l4.7 5.9-4.6 5.1H7zm45 24H9.6L5 41.9 9.7 36H52v11z"
      fill={color}
    />
  </Svg>
);

export default Directions;
