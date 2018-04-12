import React from "react";
import Svg, { Path } from "react-native-svg";

const Check = props => (
  <Svg viewBox="0 0 60 42" {...props}>
    <Path
      d="M59.1 1.5C57.9.3 56 .3 54.9 1.5L21.6 34.7 5.4 18.5c-1.2-1.2-3.1-1.2-4.2 0-1.2 1.2-1.2 3.1 0 4.2l18.4 18.4c.6.6 1.4.9 2.1.9.8 0 1.5-.3 2.1-.9L59.1 5.7c1.2-1.1 1.2-3 0-4.2z"
      fill="#333"
    />
  </Svg>
);

export default Check;
