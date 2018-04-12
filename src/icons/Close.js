import React from "react";
import Svg, { Path } from "react-native-svg";

const Close = ({ color, ...props }) => (
  <Svg viewBox="0 0 62 62" {...props}>
    <Path
      d="M61.1 56.9L35.3 31.1 60.8 5.6c1.2-1.2 1.2-3.1 0-4.2-1.2-1.2-3.1-1.2-4.2 0L31.1 26.8 5.9 1.7C4.7.5 2.8.5 1.7 1.7.5 2.9.5 4.8 1.7 5.9L26.8 31 1.4 56.5c-1.2 1.2-1.2 3.1 0 4.2 1.2 1.2 3.1 1.2 4.2 0l25.5-25.5L56.9 61c1.2 1.2 3.1 1.2 4.2 0 1.2-1.1 1.2-3 0-4.1z"
      fill={color}
    />
  </Svg>
);

export default Close;
