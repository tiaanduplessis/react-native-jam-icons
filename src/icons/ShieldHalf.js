import React from "react";
import Svg, { Path } from "react-native-svg";

const ShieldHalf = ({ color, ...props }) => (
  <Svg viewBox="0 0 54 64" {...props}>
    <Path
      d="M27 0L0 8v20c.3 16.5 27 36 27 36s26.7-19.5 27-36V8L27 0zm23 28c-.2 14.3-23 31-23 31V4l23 7v17z"
      fill={color}
    />
  </Svg>
);

export default ShieldHalf;
