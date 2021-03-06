import React from "react";
import Svg, { Path } from "react-native-svg";

const Italic = ({ color, ...props }) => (
  <Svg viewBox="0 0 37 64" {...props}>
    <Path
      d="M13.3 0l-.6 2.7L16 4c1.1.4 2.2.7 3.4 1L8.2 59.2c-2.5.4-5.1 1.1-7.7 2.2L0 64h23l.4-2.7c-.9-.5-1.9-.9-3.1-1.3-1.2-.4-2.4-.7-3.6-.9L28.1 4.9c1.2-.2 2.5-.6 3.9-1s2.7-.8 3.9-1.3l.4-2.6h-23z"
      fill={color}
    />
  </Svg>
);

export default Italic;
