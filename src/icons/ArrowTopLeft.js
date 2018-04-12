import React from "react";
import Svg, { Path } from "react-native-svg";

const ArrowTopLeft = ({ color, ...props }) => (
  <Svg viewBox="0 0 63 63" {...props}>
    <Path
      d="M62.1 57.9L10.2 6H45c1.7 0 3-1.3 3-3s-1.3-3-3-3H3C1.3 0 0 1.3 0 3v42c0 1.7 1.3 3 3 3s3-1.3 3-3V10.2l51.9 51.9c1.2 1.2 3.1 1.2 4.2 0s1.2-3.1 0-4.2z"
      fill={color}
    />
  </Svg>
);

export default ArrowTopLeft;
