import React from "react";
import Svg, { Path } from "react-native-svg";

const File = props => (
  <Svg viewBox="0 0 48 64" {...props}>
    <Path
      d="M32 0H1C.4 0 0 .5 0 1v62c0 .6.4 1 1 1h46c.6 0 1-.5 1-1V16L32 0zm12 60H4V4h26.3L44 17.7V60z"
      fill="#343434"
    />
  </Svg>
);

export default File;
