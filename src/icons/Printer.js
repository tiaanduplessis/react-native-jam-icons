import React from "react";
import Svg, { Path, Circle } from "react-native-svg";

const Printer = props => (
  <Svg viewBox="0 0 64 64" {...props}>
    <Path
      className="st0"
      d="M56 10h-4V3c0-1.7-1.3-3-3-3H15c-1.7 0-3 1.3-3 3v7H8c-4.4 0-8 3.6-8 8v16c0 4.4 3.6 8 8 8h4v19c0 1.7 1.3 3 3 3h34c1.7 0 3-1.3 3-3V42h4c4.4 0 8-3.6 8-8V18c0-4.4-3.6-8-8-8zM16 4h32v6H16V4zm32 56H16V35h32v25zm12-26c0 2.2-1.8 4-4 4h-4v-7H12v7H8c-2.2 0-4-1.8-4-4V18c0-2.2 1.8-4 4-4h48c2.2 0 4 1.8 4 4v16z"
    />
    <Circle className="st0" cx={12} cy={19} r={2} />
    <Path
      className="st0"
      d="M44.5 53h-25c-.8 0-1.5.7-1.5 1.5s.7 1.5 1.5 1.5h25c.8 0 1.5-.7 1.5-1.5s-.7-1.5-1.5-1.5zm0-7h-25c-.8 0-1.5.7-1.5 1.5s.7 1.5 1.5 1.5h25c.8 0 1.5-.7 1.5-1.5s-.7-1.5-1.5-1.5zm0-7h-25c-.8 0-1.5.7-1.5 1.5s.7 1.5 1.5 1.5h25c.8 0 1.5-.7 1.5-1.5s-.7-1.5-1.5-1.5z"
    />
  </Svg>
);

export default Printer;
