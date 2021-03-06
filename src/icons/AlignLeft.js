import React from "react";
import Svg, { Path } from "react-native-svg";

const AlignLeft = ({ color, ...props }) => (
  <Svg viewBox="0 0 64 48" {...props}>
    <Path
      d="M61 0H3C1.3 0 0 1.3 0 3s1.3 3 3 3h58c1.7 0 3-1.3 3-3s-1.3-3-3-3zM47 28H3c-1.7 0-3 1.3-3 3s1.3 3 3 3h44c1.7 0 3-1.3 3-3s-1.3-3-3-3zM3 20h26c1.7 0 3-1.3 3-3s-1.3-3-3-3H3c-1.7 0-3 1.3-3 3s1.3 3 3 3zm20 22H3c-1.7 0-3 1.3-3 3s1.3 3 3 3h20c1.7 0 3-1.3 3-3s-1.3-3-3-3z"
      fill={color}
    />
  </Svg>
);

export default AlignLeft;
