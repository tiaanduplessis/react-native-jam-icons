import React from "react";
import Svg, { Path } from "react-native-svg";

const ArrowRightCircle = ({ color, ...props }) => (
  <Svg viewBox="0 0 64 64" {...props}>
    <Path
      d="M32 0C14.3 0 0 14.3 0 32s14.3 32 32 32 32-14.3 32-32S49.7 0 32 0zm0 58C17.6 58 6 46.4 6 32S17.6 6 32 6s26 11.6 26 26-11.6 26-26 26zm-2.9-40.9c-1.2-1.2-3.1-1.2-4.2 0-1.2 1.2-1.2 3.1 0 4.2L35.5 32 24.9 42.6c-1.2 1.2-1.2 3.1 0 4.2 1.2 1.2 3.1 1.2 4.2 0l12.7-12.7c.6-.6.9-1.3.9-2.1s-.3-1.5-.9-2.1L29.1 17.1z"
      fill={color}
    />
  </Svg>
);

export default ArrowRightCircle;
