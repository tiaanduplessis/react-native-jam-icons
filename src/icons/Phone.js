import React from "react";
import Svg, { Path, Circle } from "react-native-svg";

const Phone = props => (
  <Svg viewBox="0 0 38 64" {...props}>
    <Path
      className="st0"
      d="M34 0H4C1.8 0 0 1.8 0 4v56c0 2.2 1.8 4 4 4h30c2.2 0 4-1.8 4-4V4c0-2.2-1.8-4-4-4zm0 4v4H4V4h30zm0 8v36H4V12h30zM4 60v-8h30v8H4z"
    />
    <Circle className="st0" cx={19} cy={56} r={3} />
  </Svg>
);

export default Phone;
