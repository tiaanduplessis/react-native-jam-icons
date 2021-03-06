import React from "react";
import Svg, { Path } from "react-native-svg";

const FlaskAlt = ({ color, ...props }) => (
  <Svg viewBox="0 0 42 63" {...props}>
    <Path
      d="M29 22.6V8c1.1 0 2-.9 2-2V2c0-1.1-.9-2-2-2H13c-1.1 0-2 .9-2 2v4c0 1.1.9 2 2 2v14.6C5.4 25.7 0 33.2 0 42c0 11.6 9.4 21 21 21s21-9.4 21-21c0-8.8-5.4-16.3-13-19.4zM14 3h14v2H14V3zm7 56c-9.4 0-17-7.6-17-17 0-8 5.5-14.7 13-16.5V8h8v17.5C32.5 27.3 38 34 38 42c0 9.4-7.6 17-17 17zm12.2-23H8.8C7.7 38 7 40.4 7 43c0 7 6.3 13 14 13s14-6 14-13c0-2.6-.7-5-1.8-7z"
      fill={color}
    />
  </Svg>
);

export default FlaskAlt;
