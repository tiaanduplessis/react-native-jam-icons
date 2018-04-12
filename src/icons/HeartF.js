import React from "react";
import Svg, { Path } from "react-native-svg";

const HeartF = ({ color, ...props }) => (
  <Svg viewBox="0 0 63 58" {...props}>
    <Path
      d="M56.6 6.3c-7-7-17.9-7.5-24.3-1.1l-1.1 1.1-.2-.2C24.1-.8 12.8-.8 5.7 6.3c-7 7-7.1 18.3-.2 25.3l25.7 25.7 26.6-26.6c6.4-6.5 5.9-17.4-1.2-24.4z"
      fill={color}
    />
  </Svg>
);

export default HeartF;
