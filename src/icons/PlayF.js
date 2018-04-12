import React from "react";
import Svg, { Path } from "react-native-svg";

const PlayF = ({ color, ...props }) => (
  <Svg viewBox="0 0 47 62" {...props}>
    <Path
      d="M45.5 29.1L2.5.4C1.1-.5 0 .1 0 1.8v58c0 1.7 1.1 2.3 2.5 1.3l43-28.7c1.4-.9 1.4-2.4 0-3.3z"
      fill={color}
    />
  </Svg>
);

export default PlayF;
