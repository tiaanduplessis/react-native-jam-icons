import React from "react";
import Svg, { Path } from "react-native-svg";

const Vimeo = ({ color, ...props }) => (
  <Svg viewBox="0 0 64 53" {...props}>
    <Path
      d="M61.4 2.6C59.8 1 57.6.1 54.7 0c-8.1-.3-13.9 4-17.1 12.6-.2.5-.1 1 .3 1.3.3.4.8.5 1.3.4.9-.2 1.8-.4 2.7-.4 1.2 0 2.8.2 3.5 1.2.6.8.7 2 .2 3.5-.4 1.3-2.3 4.7-4.6 8.4-2.9 4.4-4.5 6.4-4.9 6.4-1.5 0-7-23.9-7.2-24.4C27.3 3.5 26.5.8 21.4.8c-3.9 0-12.6 7-19.8 13.1-.4.4-.8.7-1.1.9-.7.6-.8 1.6-.2 2.3l1.3 1.7c.6.7 1.6.9 2.3.3L4 19c2.3-1.6 4.5-3.1 6.1-3.2 1.8-.1 3.3 2.7 5.2 9.2 3.5 12.7 8.9 27.9 14.4 27.9 5.8 0 12.6-4.8 21.5-16.1 8-10.3 12.3-18.4 12.6-24.3.4-4.5-.5-7.8-2.4-9.9z"
      fill={color}
    />
  </Svg>
);

export default Vimeo;
