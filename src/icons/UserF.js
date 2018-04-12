import React from "react";
import Svg, { Path } from "react-native-svg";

const UserF = ({ color, ...props }) => (
  <Svg viewBox="0 0 50 64" {...props}>
    <Path
      d="M46.5 35s-5.2-3.4-12.8-5.1c4.5-2.8 7.4-7.8 7.4-13.5 0-8.8-7.1-16-15.9-16S9.4 7.5 9.4 16.4c0 5.7 3 10.7 7.4 13.5C8.7 31.6 3.5 35 3.5 35 1.6 36.1 0 38.8 0 41v19c0 2.2 1.8 4 4 4h42c2.2 0 4-1.8 4-4V41c0-2.2-1.5-4.9-3.5-6z"
      fill={color}
    />
  </Svg>
);

export default UserF;
