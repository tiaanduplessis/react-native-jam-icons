import React from "react";
import Svg, { Path } from "react-native-svg";

const Heading = ({ color, ...props }) => (
  <Svg viewBox="0 0 62 63" {...props}>
    <Path
      d="M57.6 4c1.3-.3 2.5-.8 3.6-1.4V0H38.3v2.6c1 .5 2.1.9 3.2 1.3s2.3.7 3.6 1v23.5H16.8V4.9c1.2-.3 2.4-.6 3.5-.9 1.1-.4 2.2-.8 3.2-1.4V0H.8v2.6c2.1 1.1 4.6 1.8 7.4 2.2v53.4c-2.5.5-5 1.2-7.4 2.2V63h22.8v-2.6c-1-.5-2.1-.9-3.2-1.3s-2.3-.7-3.5-.9V33h28.3v25.2c-2.3.5-4.6 1.2-6.8 2.2V63h22.8v-2.6c-1-.5-2.2-.9-3.4-1.3-1.2-.4-2.6-.7-4-.9V4.9c1.2-.3 2.5-.6 3.8-.9z"
      fill={color}
    />
  </Svg>
);

export default Heading;
