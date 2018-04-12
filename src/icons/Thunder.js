import React from "react";
import Svg, { Path } from "react-native-svg";

const Thunder = ({ color, ...props }) => (
  <Svg viewBox="0 0 34 64" {...props}>
    <Path
      d="M34 25.6H18V0L0 38.4h16V64l18-38.4zM6.3 34.4L14 18v11.6h13.7L20 46V34.4H6.3z"
      fill={color}
    />
  </Svg>
);

export default Thunder;
