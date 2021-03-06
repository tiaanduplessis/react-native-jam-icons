import React from "react";
import Svg, { Path } from "react-native-svg";

const GlassEmpty = ({ color, ...props }) => (
  <Svg viewBox="0 0 32 64" {...props}>
    <Path
      d="M30 0H2C.9 0 0 .9 0 2v16c0 8.2 6.1 14.9 14 15.9V60H9c-1.1 0-2 .9-2 2v2h18v-2c0-1.1-.9-2-2-2h-5V33.9c7.9-1 14-7.7 14-15.9V2c0-1.1-.9-2-2-2zm-2 18c0 6.6-5.4 12-12 12S4 24.6 4 18V4h24v14z"
      fill={color}
    />
  </Svg>
);

export default GlassEmpty;
