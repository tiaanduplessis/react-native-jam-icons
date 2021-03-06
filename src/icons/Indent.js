import React from "react";
import Svg, { Path } from "react-native-svg";

const Indent = ({ color, ...props }) => (
  <Svg viewBox="0 0 64 48" {...props}>
    <Path
      d="M3 6h58c1.7 0 3-1.3 3-3s-1.3-3-3-3H3C1.3 0 0 1.3 0 3s1.3 3 3 3zm58 22H27c-1.7 0-3 1.3-3 3s1.3 3 3 3h34c1.7 0 3-1.3 3-3s-1.3-3-3-3zm0-14H27c-1.7 0-3 1.3-3 3s1.3 3 3 3h34c1.7 0 3-1.3 3-3s-1.3-3-3-3zm0 28H3c-1.7 0-3 1.3-3 3s1.3 3 3 3h58c1.7 0 3-1.3 3-3s-1.3-3-3-3zM1.5 37.5l13.8-13c.4-.4.4-1 0-1.4l-13.8-13c-.8-.7-1.5-.4-1.5.7v26.1c0 1.1.6 1.4 1.5.6z"
      fill={color}
    />
  </Svg>
);

export default Indent;
