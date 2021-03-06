import React from "react";
import Svg, { Path } from "react-native-svg";

const PadlockF = ({ color, ...props }) => (
  <Svg viewBox="0 0 48 64" {...props}>
    <Path
      d="M44 32h-2V18c0-9.9-8.1-18-18-18S6 8.1 6 18v14H4c-2.2 0-4 1.8-4 4v24c0 2.2 1.8 4 4 4h40c2.2 0 4-1.8 4-4V36c0-2.2-1.8-4-4-4zM24 53c-2.8 0-5-2.2-5-5s2.2-5 5-5 5 2.2 5 5-2.2 5-5 5zm13-21H11V18c0-7.2 5.8-13 13-13s13 5.8 13 13v14z"
      fill={color}
    />
  </Svg>
);

export default PadlockF;
