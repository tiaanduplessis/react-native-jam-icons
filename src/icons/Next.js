import React from "react";
import Svg, { Path } from "react-native-svg";

const Next = ({ color, ...props }) => (
  <Svg viewBox="0 0 40 52" {...props}>
    <Path
      d="M36.8 8.2c-1.7 0-3 1.3-3 3v10.2L2.7.8C1.3-.1.2.5.2 2.2v47.6c0 1.6 1.1 2.3 2.5 1.3l31.1-20.5v10.6c0 1.7 1.3 3 3 3s3-1.3 3-3v-30c0-1.7-1.4-3-3-3zM6.2 41.7V10.3L29.9 26 6.2 41.7z"
      fill={color}
    />
  </Svg>
);

export default Next;
