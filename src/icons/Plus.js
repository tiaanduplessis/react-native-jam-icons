import React from "react";
import Svg, { Path } from "react-native-svg";

const Plus = props => (
  <Svg viewBox="0 0 64 64" {...props}>
    <Path
      d="M61 29H35V3c0-1.7-1.3-3-3-3s-3 1.3-3 3v26H3c-1.7 0-3 1.3-3 3s1.3 3 3 3h26v26c0 1.7 1.3 3 3 3s3-1.3 3-3V35h26c1.7 0 3-1.3 3-3s-1.3-3-3-3z"
      fill="#333"
    />
  </Svg>
);

export default Plus;
