import React from "react";
import Svg, { Path } from "react-native-svg";

const Redo = props => (
  <Svg viewBox="0 0 63 64" {...props}>
    <Path
      d="M61.9 1.2c0-1.1-.7-1.4-1.5-.6l-7.3 7.3C47.4 3 40.1 0 32 0 14.3 0 0 14.3 0 32s14.3 32 32 32c10.1 0 19-4.6 24.9-11.9L52.5 48C47.8 54.1 40.3 58 32 58 17.6 58 6 46.4 6 32S17.6 6 32 6c6.4 0 12.3 2.3 16.8 6.2L42 19c-.8.8-.5 1.4.6 1.5l18.9.6c.6 0 1-.4 1-1l-.6-18.9z"
      fill="#333"
    />
  </Svg>
);

export default Redo;
