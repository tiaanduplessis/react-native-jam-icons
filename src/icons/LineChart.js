import React from "react";
import Svg, { Path } from "react-native-svg";

const LineChart = ({ color, ...props }) => (
  <Svg viewBox="0 0 64 64" {...props}>
    <Path
      d="M6 58V0H0v64h64v-6zm19.4-16.4l11.1 9.5 26.7-33.7-3.1-2.5-24.2 30.5-10.7-9.3-14.1 14.3 2.8 2.8z"
      fill={color}
    />
  </Svg>
);

export default LineChart;
