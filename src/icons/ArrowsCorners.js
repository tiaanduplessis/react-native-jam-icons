import React from "react";
import Svg, { Path } from "react-native-svg";

const ArrowsCorners = props => (
  <Svg viewBox="0 0 64 64" {...props}>
    <Path
      d="M61 40c-1.7 0-3 1.3-3 3v10.8L10.2 6H21c1.7 0 3-1.3 3-3s-1.3-3-3-3H3C1.3 0 0 1.3 0 3v18c0 1.7 1.3 3 3 3s3-1.3 3-3V10.2L53.8 58H43c-1.7 0-3 1.3-3 3s1.3 3 3 3h18c1.7 0 3-1.3 3-3V43c0-1.7-1.3-3-3-3z"
      fill="#333"
    />
  </Svg>
);

export default ArrowsCorners;
