import React from "react";
import Svg, { Path } from "react-native-svg";

const FlickrCircle = ({ color, ...props }) => (
  <Svg viewBox="0 0 64 64" {...props}>
    <Path
      d="M32 0C14.3 0 0 14.3 0 32s14.3 32 32 32 32-14.3 32-32S49.7 0 32 0zM21 41c-5 0-9-4-9-9s4-9 9-9 9 4 9 9-4 9-9 9zm22 0c-5 0-9-4-9-9s4-9 9-9 9 4 9 9-4 9-9 9z"
      fill={color}
    />
  </Svg>
);

export default FlickrCircle;
