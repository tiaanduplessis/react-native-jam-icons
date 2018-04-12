import React from "react";
import Svg, { Path } from "react-native-svg";

const ArrowsV = ({ color, ...props }) => (
  <Svg viewBox="0 0 24 63" {...props}>
    <Path
      d="M22.4 48.6c-1.2-1.2-3.1-1.2-4.3 0L15 51.7V10.8l3.1 3.1c1.2 1.2 3.1 1.2 4.2 0 1.2-1.2 1.2-3.1 0-4.2l-8.5-8.5c-.6-.6-1.3-.9-2.1-.9s-1.5.3-2.1.9L1.1 9.6c-1.2 1.2-1.2 3.1 0 4.2 1.2 1.2 3.1 1.2 4.2 0L9 10.2v42l-3.6-3.6c-1.2-1.2-3.1-1.2-4.2 0-1.2 1.2-1.2 3.1 0 4.2l8.5 8.5c.6.6 1.3.9 2.1.9s1.5-.3 2.1-.9l8.5-8.5c1.2-1.2 1.2-3.1 0-4.2z"
      fill={color}
    />
  </Svg>
);

export default ArrowsV;
