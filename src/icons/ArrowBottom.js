import React from "react";
import Svg, { Path } from "react-native-svg";

const ArrowBottom = ({ color, ...props }) => (
  <Svg viewBox="0 0 62 63" {...props}>
    <Path
      d="M60.7 30c-1.2-1.2-3.1-1.2-4.2 0L34 52.5V3.3c0-1.7-1.3-3-3-3s-3 1.3-3 3v49.2L5.5 30c-1.2-1.2-3.1-1.2-4.2 0-1.2 1.2-1.2 3.1 0 4.2l27.6 27.6c.6.6 1.4.9 2.1.9.8 0 1.5-.3 2.1-.9l27.6-27.6c1.2-1.1 1.2-3 0-4.2z"
      fill={color}
    />
  </Svg>
);

export default ArrowBottom;
