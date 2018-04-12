import React from "react";
import Svg, { Path } from "react-native-svg";

const Folder = props => (
  <Svg viewBox="0 0 64 50" {...props}>
    <Path
      d="M62 7H24V2c0-1.1-.9-2-2-2H2C.9 0 0 .9 0 2v46c0 1.1.9 2 2 2h60c1.1 0 2-.9 2-2V9c0-1.1-.9-2-2-2zM20 4v7h40v5H4V4h16zM4 46V20h56v26H4z"
      fill="#333"
    />
  </Svg>
);

export default Folder;
