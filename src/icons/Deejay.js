import React from "react";
import Svg, { Path } from "react-native-svg";

const Deejay = ({ color, ...props }) => (
  <Svg viewBox="0 0 61 64" {...props}>
    <Path
      className="st0"
      d="M52 0H9C4 0 0 4 0 9v46c0 5 4 9 9 9h43c5 0 9-4 9-9V9c0-5-4-9-9-9zm5 55c0 2.8-2.2 5-5 5H9c-2.8 0-5-2.2-5-5V9c0-2.8 2.2-5 5-5h43c2.8 0 5 2.2 5 5v46zM11 31.9V44h2V31.9c1.7-.4 3-2 3-3.9s-1.3-3.4-3-3.9V12h-2v12.1c-1.7.4-3 2-3 3.9s1.3 3.4 3 3.9zM19 48H9c-.5 0-1 .4-1 1v7c0 .6.4 1 1 1h10c.5 0 1-.4 1-1v-7c0-.6-.4-1-1-1zm-1 7h-8v-5h8v5zm0-39h34V8H18v8zm2-6h30v4H20v-4zm15 9c-9.4 0-17 7.6-17 17s7.6 17 17 17 17-7.6 17-17-7.6-17-17-17zm0 31c-7.7 0-14-6.3-14-14s6.3-14 14-14 14 6.3 14 14-6.3 14-14 14zm-9-14c0-5 4-9 9-9v-1c-5.5 0-10 4.5-10 10s4.5 10 10 10v-1c-5 0-9-4-9-9z"
    />
    <Circle className="st0" cx={35} cy={36} r={2} />
  </Svg>
);

export default Deejay;
