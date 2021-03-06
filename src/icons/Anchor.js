import React from "react";
import Svg, { Path } from "react-native-svg";

const Anchor = ({ color, ...props }) => (
  <Svg viewBox="0 0 64 64" {...props}>
    <Path
      d="M61 35c-1.7 0-3 1.3-3 3 0 .8.3 1.5.8 2.1C55.5 51 45.8 59.1 34 60V26h7c1.1 0 2-.9 2-2s-.9-2-2-2h-7v-4.2c4-.9 7-4.5 7-8.8 0-5-4-9-9-9s-9 4-9 9c0 4.3 3 7.9 7 8.8V22h-7c-1.1 0-2 .9-2 2s.9 2 2 2h7v33.9C18.2 59.1 8.5 51 5.2 40.1c.5-.6.8-1.3.8-2.1 0-1.7-1.3-3-3-3s-3 1.3-3 3c0 .9.4 1.8 1.1 2.3C4.8 54 17.2 64 32 64s27.2-10 30.9-23.7c.7-.6 1.1-1.4 1.1-2.3 0-1.7-1.3-3-3-3zM27 9c0-2.8 2.2-5 5-5s5 2.2 5 5-2.2 5-5 5-5-2.2-5-5z"
      fill={color}
    />
  </Svg>
);

export default Anchor;
