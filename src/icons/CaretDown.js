import React from "react";
import Svg, { Path } from "react-native-svg";

const CaretDown = props => (
  <Svg viewBox="0 0 64 40" {...props}>
    <Path
      d="M62 0H2C.9 0 .6.7 1.3 1.6l30.1 37.7c.3.4.9.4 1.2 0L62.7 1.6c.7-.9.4-1.6-.7-1.6z"
      fill="#333"
    />
  </Svg>
);

export default CaretDown;
