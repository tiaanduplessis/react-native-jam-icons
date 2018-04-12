import React from "react";
import Svg, { Path } from "react-native-svg";

const Brightness = ({ color, ...props }) => (
  <Svg viewBox="0 0 64 64" {...props}>
    <Path
      d="M32 0C14.3 0 0 14.3 0 32s14.3 32 32 32 32-14.3 32-32S49.7 0 32 0zM6 32C6 17.6 17.6 6 32 6v52C17.6 58 6 46.4 6 32z"
      fill={color}
    />
  </Svg>
);

export default Brightness;
