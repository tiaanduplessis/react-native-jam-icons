import React from "react";
import Svg, { Path } from "react-native-svg";

const EjectF = ({ color, ...props }) => (
  <Svg viewBox="0 0 64 55" {...props}>
    <Path
      d="M60 47H4c-2.2 0-4 1.8-4 4s1.8 4 4 4h56c2.2 0 4-1.8 4-4s-1.8-4-4-4zM1 39h62c.6 0 .7-.3.4-.8L33.9 1.3c-1-1.3-2.7-1.3-3.7 0L.6 38.2c-.3.5-.1.8.4.8z"
      fill={color}
    />
  </Svg>
);

export default EjectF;
