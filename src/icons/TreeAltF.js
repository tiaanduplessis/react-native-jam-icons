import React from "react";
import Svg, { Path } from "react-native-svg";

const TreeAltF = ({ color, ...props }) => (
  <Svg viewBox="0 0 48 64" {...props}>
    <Path
      d="M39 15v-.5C39 6.5 32.5 0 24.5 0c-7.2 0-13.2 5.3-14.3 12.2C4.4 13.3 0 18.1 0 24c0 6.6 5.6 12 12.5 12 2.3 0 4.4-.6 6.2-1.6l1.2.7v28c0 .5.4 1 1 1h6c.5 0 1-.4 1-1V35.4c1.9-.6 3.6-1.8 4.9-3.3 1.6 1.1 3.5 1.8 5.6 1.8 5.2 0 9.5-4.3 9.5-9.5.1-5-3.9-9.1-8.9-9.4z"
      fill={color}
    />
  </Svg>
);

export default TreeAltF;
