import React from "react";
import Svg, { Path } from "react-native-svg";

const Cutlery = ({ color, ...props }) => (
  <Svg viewBox="0 0 36 64" {...props}>
    <Path
      d="M14 0c-1.1 0-2 .9-2 2v14c0 .5-.4 1-1 1s-1-.5-1-1V2c0-1.1-.9-2-2-2S6 .9 6 2v14c0 .6-.4 1-1 1s-1-.4-1-1V2c0-1.1-.9-2-2-2S0 .9 0 2v15c0 3.2 2.1 5.8 5 6.7V61c0 1.7 1.3 3 3 3s3-1.3 3-3V23.7c2.9-.9 5-3.5 5-6.7V2c0-1.1-.9-2-2-2zm19 0c-.7 0-1.4.3-1.9.7C28.3 2.3 26.3 12 26.3 15c0 3.3.5 16.7 3.7 17.1V61c0 1.7 1.3 3 3 3s3-1.3 3-3V3c0-1.7-1.3-3-3-3z"
      fill={color}
    />
  </Svg>
);

export default Cutlery;
