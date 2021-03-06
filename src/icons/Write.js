import React from "react";
import Svg, { Path } from "react-native-svg";

const Write = ({ color, ...props }) => (
  <Svg viewBox="0 0 65 64" {...props}>
    <Path
      d="M29.6 35.8l-1.1-1.1 23-23L46.8 7 21.2 32.6l-3 13.5 13.5-3 25.5-25.6-4.7-4.7zM62.1 2.2c-2.9-2.9-7.6-2.9-10.4 0l-.3.3 10.4 10.4.3-.3c2.8-2.8 2.8-7.5 0-10.4zM46 57c0 .6-.4 1-1 1H7c-.6 0-1-.4-1-1V19c0-.6.4-1 1-1h25v-6H2c-1.1 0-2 .9-2 2v48c0 1.1.9 2 2 2h48c1.1 0 2-.9 2-2V32h-6v25z"
      fill={color}
    />
  </Svg>
);

export default Write;
