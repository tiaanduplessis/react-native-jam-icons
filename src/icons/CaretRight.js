import React from "react";
import Svg, { Path } from "react-native-svg";

const CaretRight = ({ color, ...props }) => (
  <Svg viewBox="0 0 40 64" {...props}>
    <Path
      d="M39.2 31.4L1.6 1.3C.7.6 0 .9 0 2v60c0 1.1.7 1.4 1.6.7l37.7-30.1c.4-.3.4-.9-.1-1.2z"
      fill={color}
    />
  </Svg>
);

export default CaretRight;
