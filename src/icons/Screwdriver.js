import React from "react";
import Svg, { Path } from "react-native-svg";

const Screwdriver = ({ color, ...props }) => (
  <Svg viewBox="0 0 60 60" {...props}>
    <Path
      d="M57.5 3.7L56 2.3c-2.3-2.3-6.1-2.3-8.5 0L26.3 23.5l2.8 2.8L1.6 53.9C.4 55.1.4 57 1.6 58.1c1.2 1.2 3.1 1.2 4.2 0l27.6-27.6 2.8 2.8 21.2-21.2c2.4-2.2 2.4-6 .1-8.4zM4.4 56.8c-.4.4-1 .4-1.4 0-.4-.4-.4-1 0-1.4l27.6-27.6 1.4 1.4L4.4 56.8zm50.9-46.7L36.2 29.2l-5.7-5.7L49.7 4.4c1.2-1.2 3.1-1.2 4.2 0l1.4 1.4c1.2 1.2 1.2 3.1 0 4.3zm-4.2-2.8L35.5 22.8c-.4.4-.4 1 0 1.4.4.4 1 .4 1.4 0L52.5 8.7c.4-.4.4-1 0-1.4-.4-.4-1-.4-1.4 0z"
      fill={color}
    />
  </Svg>
);

export default Screwdriver;
