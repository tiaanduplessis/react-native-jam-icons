import React from "react";
import Svg, { Path } from "react-native-svg";

const BatteryFull = ({ color, ...props }) => (
  <Svg viewBox="0 0 64 32" {...props}>
    <Path
      d="M63 10h-2V3c0-1.7-1.3-3-3-3H3C1.3 0 0 1.3 0 3v26c0 1.7 1.3 3 3 3h55c1.7 0 3-1.3 3-3v-7h2c.6 0 1-.4 1-1V11c0-.5-.5-1-1-1z"
      fill={color}
    />
  </Svg>
);

export default BatteryFull;
