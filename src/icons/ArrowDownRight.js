import React from "react";
import Svg, { Path } from "react-native-svg";

const ArrowDownRight = ({ color, ...props }) => (
  <Svg viewBox="0 0 63 63" {...props}>
    <Path
      d="M60 15c-1.7 0-3 1.3-3 3v34.8L5.4 1.1C4.2-.1 2.3-.1 1.2 1.1S0 4.2 1.2 5.3L52.8 57H18c-1.7 0-3 1.3-3 3s1.3 3 3 3h42c1.7 0 3-1.3 3-3V18c0-1.7-1.3-3-3-3z"
      fill={color}
    />
  </Svg>
);

export default ArrowDownRight;
