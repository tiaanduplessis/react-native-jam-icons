import React from "react";
import Svg, { Path } from "react-native-svg";

const UsersF = ({ color, ...props }) => (
  <Svg viewBox="0 0 64 64" {...props}>
    <Path
      d="M60.5 27.1s-3.1-2.1-8.3-3.3C55.7 21.5 58 17.5 58 13c0-7.2-5.8-13-13-13S32 5.8 32 13c0 4.5 2.3 8.5 5.8 10.8-2.5.6-4.4 1.3-5.8 2-.7-6.6-6.2-11.8-13-11.8-7.2 0-13 5.8-13 13 0 4.5 2.3 8.5 5.8 10.8-5.2 1.2-8.3 3.3-8.3 3.3C1.6 42.2 0 44.8 0 47v13c0 2.2 1.8 4 4 4h30c2.2 0 4-1.8 4-4V50h22c2.2 0 4-1.8 4-4V33c0-2.2-1.5-4.9-3.5-5.9z"
      fill={color}
    />
  </Svg>
);

export default UsersF;
