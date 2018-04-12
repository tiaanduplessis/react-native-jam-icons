import React from "react";
import Svg, { Path } from "react-native-svg";

const PieChartAlt = ({ color, ...props }) => (
  <Svg viewBox="0 0 64 64" {...props}>
    <Path
      d="M.1 30h9C10 18.9 18.9 10 30 9.1v-9C13.9 1.1 1.1 13.9.1 30zM34 .1v9C45.8 10.1 55 20 55 32c0 5.9-2.2 11.3-5.8 15.3l6.4 6.4C60.8 48 64 40.4 64 32 64 15 50.7 1.1 34 .1zM9.1 34h-9C1.1 50.1 14 62.9 30 63.9v-9C18.9 54 10 45.1 9.1 34zM34 54.9v9c7.1-.4 13.5-3.2 18.6-7.5L46.2 50c-3.4 2.8-7.6 4.5-12.2 4.9z"
      fill={color}
    />
  </Svg>
);

export default PieChartAlt;
