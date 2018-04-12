import React from "react";
import Svg, { Path } from "react-native-svg";

const StarF = ({ color, ...props }) => (
  <Svg viewBox="0 0 62 60" {...props}>
    <Path
      d="M62 23l-21-3L31 0 21 20 0 23l15 15-3 22 19-10 19 10-3-22z"
      fill={color}
    />
  </Svg>
);

export default StarF;
