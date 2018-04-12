import React from "react";
import Svg, { Path } from "react-native-svg";

const RssFeed = ({ color, ...props }) => (
  <Svg viewBox="0 0 64 64" {...props}>
    <Path className="st0" d="M0 0v6c32 0 58 26 58 58h6C64 28.7 35.3 0 0 0z" />
    <Circle className="st0" cx={8} cy={56} r={8} />
    <Path
      className="st0"
      d="M0 22v6c19.9 0 36 16.1 36 36h6c0-23.2-18.8-42-42-42z"
    />
  </Svg>
);

export default RssFeed;
