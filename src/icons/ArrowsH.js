import React from "react";
import Svg, { Path } from "react-native-svg";

const ArrowsH = props => (
  <Svg viewBox="0 0 63 24" {...props}>
    <Path
      d="M61.3 9.6l-8.5-8.5c-1.2-1.2-3.1-1.2-4.2 0-1.2 1.2-1.2 3.1 0 4.2L52.2 9h-42l3.6-3.6c1.2-1.2 1.2-3.1 0-4.2-1.2-1.2-3.1-1.2-4.2 0L1.1 9.6c-.6.6-.9 1.3-.9 2.1s.3 1.5.9 2.1l8.5 8.5c1.2 1.2 3.1 1.2 4.2 0 1.2-1.2 1.2-3.1 0-4.2l-3-3.1h40.9l-3.1 3.1c-1.2 1.2-1.2 3.1 0 4.2 1.2 1.2 3.1 1.2 4.2 0l8.5-8.5c.6-.6.9-1.3.9-2.1 0-.7-.3-1.5-.9-2.1z"
      fill="#333"
    />
  </Svg>
);

export default ArrowsH;
