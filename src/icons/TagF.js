import React from "react";
import Svg, { Path } from "react-native-svg";

const TagF = ({ color, ...props }) => (
  <Svg viewBox="0 0 64 64" {...props}>
    <Path
      d="M54.2.9l-16 .1c-1.1 0-2.6.7-3.4 1.4L1.4 35.8c-.8.8-.8 2.1 0 2.8l24 24c.8.8 2.1.8 2.8 0l33.4-33.4c.8-.8 1.4-2.3 1.4-3.4l.1-16L54.2.9zm-.6 19.5c-2.8 2.8-7.2 2.8-10 .1-2.7-2.7-2.7-7.2.1-10 2.8-2.8 7.2-2.8 10-.1 2.7 2.8 2.7 7.3-.1 10z"
      fill={color}
    />
  </Svg>
);

export default TagF;
