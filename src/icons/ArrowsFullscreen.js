import React from "react";
import Svg, { Path } from "react-native-svg";

const ArrowsFullscreen = ({ color, ...props }) => (
  <Svg viewBox="0 0 64 64" {...props}>
    <Path
      d="M61 24c1.7 0 3-1.3 3-3V3c0-1.7-1.3-3-3-3H43c-1.7 0-3 1.3-3 3s1.3 3 3 3h10.8L32 27.8 10.2 6H21c1.7 0 3-1.3 3-3s-1.3-3-3-3H3C1.3 0 0 1.3 0 3v18c0 1.7 1.3 3 3 3s3-1.3 3-3V10.2L27.8 32 6 53.8V43c0-1.7-1.3-3-3-3s-3 1.3-3 3v18c0 1.7 1.3 3 3 3h18c1.7 0 3-1.3 3-3s-1.3-3-3-3H10.2L32 36.2 53.8 58H43c-1.7 0-3 1.3-3 3s1.3 3 3 3h18c1.7 0 3-1.3 3-3V43c0-1.7-1.3-3-3-3s-3 1.3-3 3v10.8L36.2 32 58 10.2V21c0 1.7 1.3 3 3 3z"
      fill={color}
    />
  </Svg>
);

export default ArrowsFullscreen;
