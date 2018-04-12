import React from "react";
import Svg, { Path } from "react-native-svg";

const PadlockAltOpen = ({ color, ...props }) => (
  <Svg viewBox="0 0 40 64" {...props}>
    <Path
      d="M20 24c-3.6 0-7.1 1-10 2.7V14c0-5.5 4.5-10 10-10s10 4.5 10 10v2h4v-2c0-7.7-6.3-14-14-14S6 6.3 6 14v15.7C2.3 33.4 0 38.4 0 44c0 11 9 20 20 20s20-9 20-20-9-20-20-20zm0 36c-8.8 0-16-7.2-16-16s7.2-16 16-16 16 7.2 16 16-7.2 16-16 16zm8-18h-2.4c-.6-1.7-2-3.1-3.7-3.7V36c0-1.1-.9-2-2-2s-2 .9-2 2v2.4c-1.7.6-3.1 2-3.7 3.7H12c-1.1 0-2 .9-2 2s.9 2 2 2h2.4c.6 1.7 2 3.1 3.7 3.7V52c0 1.1.9 2 2 2s2-.9 2-2v-2.4c1.7-.6 3.1-2 3.7-3.7H28c1.1 0 2-.9 2-2 0-1-.9-1.9-2-1.9z"
      fill={color}
    />
  </Svg>
);

export default PadlockAltOpen;
