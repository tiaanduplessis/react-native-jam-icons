import React from "react";
import Svg, { Path } from "react-native-svg";

const ArrowTopRight = ({ color, ...props }) => (
  <Svg viewBox="0 0 63 63" {...props}>
    <Path
      d="M60 0H18c-1.7 0-3 1.3-3 3s1.3 3 3 3h35L1.1 57.9c-1.2 1.2-1.2 3.1 0 4.2s3.1 1.2 4.2 0L57 10.5V45c0 1.7 1.3 3 3 3s3-1.3 3-3V3c0-1.7-1.3-3-3-3z"
      fill={color}
    />
  </Svg>
);

export default ArrowTopRight;
