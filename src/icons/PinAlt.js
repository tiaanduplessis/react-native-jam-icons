import React from "react";
import Svg, { Path } from "react-native-svg";

const PinAlt = ({ color, ...props }) => (
  <Svg viewBox="0 0 30 64" {...props}>
    <Path
      d="M15 0C6.7 0 0 6.7 0 15c0 7.6 5.7 13.9 13 14.9V62c0 1.1.9 2 2 2s2-.9 2-2V29.9c7.3-1 13-7.3 13-14.9 0-8.3-6.7-15-15-15zm-.1 26c-6.1 0-11-4.9-11-11s4.9-11 11-11 11 4.9 11 11-4.9 11-11 11z"
      fill={color}
    />
  </Svg>
);

export default PinAlt;
