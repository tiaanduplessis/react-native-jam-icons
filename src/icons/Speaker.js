import React from "react";
import Svg, { Path, Circle } from "react-native-svg";

const Speaker = props => (
  <Svg viewBox="0 0 48 64" {...props}>
    <Path
      className="st0"
      d="M44 0H4C1.8 0 0 1.8 0 4v56c0 2.2 1.8 4 4 4h40c2.2 0 4-1.8 4-4V4c0-2.2-1.8-4-4-4zm0 60H4V4h40v56zM24 24c-8.8 0-16 7.2-16 16s7.2 16 16 16 16-7.2 16-16-7.2-16-16-16zm0 28c-6.6 0-12-5.4-12-12s5.4-12 12-12 12 5.4 12 12-5.4 12-12 12z"
    />
    <Circle className="st0" cx={24} cy={14} r={4} />
  </Svg>
);

export default Speaker;
