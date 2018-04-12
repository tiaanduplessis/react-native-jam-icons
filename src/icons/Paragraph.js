import React from "react";
import Svg, { Path } from "react-native-svg";

const Paragraph = props => (
  <Svg viewBox="0 0 47 64" {...props}>
    <Path
      d="M46 0H18C8.1 0 0 8.1 0 18s8.1 18 18 18h5v27c0 .6.4 1 1 1h4c.5 0 1-.5 1-1V6h7v57c0 .6.4 1 1 1h4c.5 0 1-.5 1-1V6h4c.6 0 1-.4 1-1V1c0-.5-.4-1-1-1z"
      fill="#333"
    />
  </Svg>
);

export default Paragraph;
