import React from "react";
import Svg, { Path } from "react-native-svg";

const Minus = ({ color, ...props }) => (
  <Svg viewBox="0 0 64 6" {...props}>
    <Path
      d="M61 0H3C1.3 0 0 1.3 0 3s1.3 3 3 3h58c1.7 0 3-1.3 3-3s-1.3-3-3-3z"
      fill={color}
    />
  </Svg>
);

export default Minus;
