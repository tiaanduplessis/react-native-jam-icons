import React from "react";
import Svg, { Path, Circle } from "react-native-svg";

const UList = props => (
  <Svg viewBox="0 0 64 38" {...props}>
    <Path
      className="st0"
      d="M15 6h46c1.7 0 3-1.3 3-3s-1.3-3-3-3H15c-1.7 0-3 1.3-3 3s1.3 3 3 3z"
    />
    <Circle className="st0" cx={3} cy={3} r={3} />
    <Circle className="st0" cx={3} cy={19} r={3} />
    <Circle className="st0" cx={3} cy={35} r={3} />
    <Path
      className="st0"
      d="M61 16H15c-1.7 0-3 1.3-3 3s1.3 3 3 3h46c1.7 0 3-1.3 3-3s-1.3-3-3-3zm0 16H15c-1.7 0-3 1.3-3 3s1.3 3 3 3h46c1.7 0 3-1.3 3-3s-1.3-3-3-3z"
    />
  </Svg>
);

export default UList;
