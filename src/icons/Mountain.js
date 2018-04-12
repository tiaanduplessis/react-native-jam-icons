import React from "react";
import Svg, { Path } from "react-native-svg";

const Mountain = ({ color, ...props }) => (
  <Svg viewBox="0 0 64 64" {...props}>
    <Path
      d="M63.3 58.6L34.7 3c-1.5-2.9-4-2.9-5.5 0L.7 58.6C-.8 61.5.6 63.9 4 63.9h56c3.3 0 4.8-2.4 3.3-5.3zM32 6.5l12.3 24-6.6-3.1c-1-.5-2.6-.5-3.6 0L30.8 29c-.5.2-1.2.1-1.5-.3l-5.4-6.4L32 6.5zM4.5 59.9L22 26l5.6 6.8c.7.8 2.1 1.1 3.1.7l4.4-2.1c.5-.2 1.3-.2 1.8 0l10.4 5 12.2 23.7h-55z"
      fill={color}
    />
  </Svg>
);

export default Mountain;
