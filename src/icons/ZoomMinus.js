import React from "react";
import Svg, { Path } from "react-native-svg";

const ZoomMinus = ({ color, ...props }) => (
  <Svg viewBox="0 0 63 63" {...props}>
    <Path
      d="M61.9 57.6l-15-15c8.1-10.2 7.4-25.1-2-34.5C34.7-2 18.3-2 8.1 8.1S-2 34.7 8.1 44.9c9.4 9.4 24.3 10.1 34.5 2l15 15c1.2 1.2 3.1 1.2 4.2 0 1.2-1.2 1.2-3.1.1-4.3zM41.4 41.4c-8.2 8.2-21.5 8.2-29.7 0s-8.2-21.5 0-29.7 21.5-8.2 29.7 0 8.2 21.5 0 29.7zM40 24H14c-1.7 0-3 1.3-3 3s1.3 3 3 3h26c1.7 0 3-1.3 3-3s-1.3-3-3-3z"
      fill={color}
    />
  </Svg>
);

export default ZoomMinus;
