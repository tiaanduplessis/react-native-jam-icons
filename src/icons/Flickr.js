import React from "react";
import Svg, { Path } from "react-native-svg";

const Flickr = ({ color, ...props }) => (
  <Svg viewBox="0 0 64 29" {...props}>
    <Path
      d="M64 14.5c0 8-6.5 14.5-14.5 14.5S35 22.5 35 14.5 41.5 0 49.5 0 64 6.5 64 14.5zM14.5 0C6.5 0 0 6.5 0 14.5S6.5 29 14.5 29 29 22.5 29 14.5 22.5 0 14.5 0z"
      fill={color}
    />
  </Svg>
);

export default Flickr;
