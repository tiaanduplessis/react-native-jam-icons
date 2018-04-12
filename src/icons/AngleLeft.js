import React from "react";
import Svg, { Path } from "react-native-svg";

const AngleLeft = ({ color, ...props }) => (
  <Svg viewBox="0 0 34 62" {...props}>
    <Path
      d="M7.5 31L32.9 5.5c1.2-1.2 1.2-3.1 0-4.2s-3.1-1.2-4.2 0L1.1 28.9c-1.2 1.2-1.2 3.1 0 4.2l27.6 27.6c1.2 1.2 3.1 1.2 4.2 0s1.2-3.1 0-4.2L7.5 31z"
      fill={color}
    />
  </Svg>
);

export default AngleLeft;
