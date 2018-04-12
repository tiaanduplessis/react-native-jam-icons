import React from "react";
import Svg, { Circle } from "react-native-svg";

const MoreF = props => (
  <Svg viewBox="0 0 64 16" {...props}>
    <Circle className="st0" cx={8} cy={8} r={8} />
    <Circle className="st0" cx={32} cy={8} r={8} />
    <Circle className="st0" cx={56} cy={8} r={8} />
  </Svg>
);

export default MoreF;
