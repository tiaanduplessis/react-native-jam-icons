import React from "react";
import Svg, { Path } from "react-native-svg";

const Time = ({ color, ...props }) => (
  <Svg viewBox="0 0 64 64" {...props}>
    <Path
      d="M32 0C14.3 0 0 14.3 0 32s14.3 32 32 32 32-14.3 32-32S49.7 0 32 0zm0 60C16.5 60 4 47.5 4 32S16.5 4 32 4s28 12.5 28 28-12.5 28-28 28zm15-28H33V9c0-.6-.4-1-1-1h-2c-.6 0-1 .4-1 1v26c0 .6.4 1 1 1h17c.6 0 1-.4 1-1v-2c0-.6-.4-1-1-1z"
      fill={color}
    />
  </Svg>
);

export default Time;
