import React from "react";
import Svg, { Path } from "react-native-svg";

const BirthdayCake = ({ color, ...props }) => (
  <Svg viewBox="0 0 48 64" {...props}>
    <Path
      d="M24 45.8l-10 4-10-3.5v4.2l10 3.6 9.9-4 10 4 10-3.6v-4.2l-10 3.5-9.9-4zM44 36H31V21c0-1.1-.9-2-2-2H19c-1.1 0-2 .9-2 2v15H4c-2.2 0-4 1.8-4 4v20c0 2.2 1.8 4 4 4h40c2.2 0 4-1.8 4-4V40c0-2.2-1.8-4-4-4zM21 23h6v13h-6V23zm23 23.3v13.6H4V40h40v6.3zM24 17c3.3 0 6-2.7 6-6 0-3.2-2.7-11-6-11s-6 7.8-6 11c0 3.3 2.7 6 6 6zm-.6-11l.6-1.2c.2.3.4.7.6 1.2.8 1.8 1.4 4 1.4 5 0 1.1-.9 2-2 2s-2-.9-2-2c0-1 .6-3.3 1.4-5z"
      fill={color}
    />
  </Svg>
);

export default BirthdayCake;
