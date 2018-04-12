import React from "react";
import Svg, { Path } from "react-native-svg";

const Moon = ({ color, ...props }) => (
  <Svg viewBox="0 0 65 61" {...props}>
    <Path
      d="M48 40C29.6 40 15 25.4 15 8c0-2.5.3-4.9.8-7.3C6.3 6.5 0 16.9 0 29c0 17.4 14.6 32 33 32 15.3 0 28.3-11.1 31.3-25.6C59.5 38.3 53.9 40 48 40zM33 57C16.9 57 4 44.4 4 29c0-7.3 2.6-14 7-19.1C12 28.8 28.2 44 48 44c3.2 0 6.3-.4 9.3-1.2C52.4 51.3 43.2 57 33 57z"
      fill={color}
    />
  </Svg>
);

export default Moon;
