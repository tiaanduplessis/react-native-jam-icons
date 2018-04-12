import React from "react";
import Svg, { Path } from "react-native-svg";

const SetSquare = ({ color, ...props }) => (
  <Svg viewBox="0 0 64 64" {...props}>
    <Path
      d="M0 0v64h64L0 0zm44 54c-.6 0-1 .4-1 1v5h-3v-2c0-.6-.4-1-1-1s-1 .4-1 1v2h-3v-5c0-.6-.4-1-1-1s-1 .4-1 1v5h-3v-2c0-.6-.4-1-1-1s-1 .4-1 1v2h-3v-5c0-.6-.4-1-1-1s-1 .4-1 1v5h-3v-2c0-.6-.4-1-1-1s-1 .4-1 1v2h-3v-5c0-.6-.4-1-1-1s-1 .4-1 1v5h-3v-2c0-.6-.4-1-1-1s-1 .4-1 1v2H4V9.7L54.3 60H45v-5c0-.6-.4-1-1-1zm-31-3h20L13 31v20zm3-12.8l9.8 9.8H16v-9.8z"
      fill={color}
    />
  </Svg>
);

export default SetSquare;
