import React from "react";
import Svg, { Path } from "react-native-svg";

const Signal = ({ color, ...props }) => (
  <Svg viewBox="0 0 60 54" {...props}>
    <Path
      className="st0"
      d="M17 38c-2.2 0-4 1.8-4 4v8c0 2.2 1.8 4 4 4s4-1.8 4-4v-8c0-2.2-1.8-4-4-4z"
    />
    <Circle className="st0" cx={4} cy={50} r={4} />
    <Path
      className="st0"
      d="M30 30c-2.2 0-4 1.8-4 4v16c0 2.2 1.8 4 4 4s4-1.8 4-4V34c0-2.2-1.8-4-4-4zm13-12c-2.2 0-4 1.8-4 4v28c0 2.2 1.8 4 4 4s4-1.8 4-4V22c0-2.2-1.8-4-4-4zM56 0c-2.2 0-4 1.8-4 4v46c0 2.2 1.8 4 4 4s4-1.8 4-4V4c0-2.2-1.8-4-4-4z"
    />
  </Svg>
);

export default Signal;
