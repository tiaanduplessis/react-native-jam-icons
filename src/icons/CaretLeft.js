import React from "react";
import Svg, { Path } from "react-native-svg";

const CaretLeft = props => (
  <Svg viewBox="0 0 40 64" {...props}>
    <Path
      d="M38.4 1.3L.8 31.4c-.4.3-.4.9 0 1.2l37.7 30.1c.9.7 1.6.4 1.6-.7V2c-.1-1.1-.8-1.4-1.7-.7z"
      fill="#333"
    />
  </Svg>
);

export default CaretLeft;
