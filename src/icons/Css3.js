import React from "react";
import Svg, { Path } from "react-native-svg";

const Css3 = ({ color, ...props }) => (
  <Svg viewBox="0 0 64 58" {...props}>
    <Path
      d="M9.5 0L7.4 10.8h43.7l-1.4 6.9H6L3.9 28.5h43.7l-2.5 12.2-17.6 5.9-15.2-5.9 1-5.3H2.6L0 48.3 25.3 58l29.1-9.7L64 0z"
      fill={color}
    />
  </Svg>
);

export default Css3;
