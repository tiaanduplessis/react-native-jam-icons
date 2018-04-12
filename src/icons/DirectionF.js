import React from "react";
import Svg, { Path } from "react-native-svg";

const DirectionF = props => (
  <Svg viewBox="0 0 56 64" {...props}>
    <Path
      d="M48 8H26V2c0-1.1-.9-2-2-2s-2 .9-2 2v6H2c-1.1 0-2 .9-2 2v15c0 1.1.9 2 2 2h20v35c0 1.1.9 2 2 2s2-.9 2-2V27h22l8-9-8-10z"
      fill="#333"
    />
  </Svg>
);

export default DirectionF;
