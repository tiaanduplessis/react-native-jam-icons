import React from "react";
import Svg, { Path } from "react-native-svg";

const VimeoSquare = props => (
  <Svg viewBox="0 0 64 64" {...props}>
    <Path
      d="M60 0H4C1.8 0 0 1.8 0 4v56c0 2.2 1.8 4 4 4h56c2.2 0 4-1.8 4-4V4c0-2.2-1.8-4-4-4zm-7 23.3c-.2 3.9-3 9.2-8.3 16-5.8 7.4-10.3 10.6-14.1 10.6-3.6 0-7.1-9.9-9.5-18.3-1.2-4.3-2.2-6.1-3.4-6-1.1.1-2.5 1.1-4 2.1-.5.3-1.2.2-1.5-.2l-.9-1.1c-.4-.5-.3-1.1.2-1.5.2-.2.4-.4.7-.6 4.7-4 10.4-8.6 13-8.6 3.4 0 3.9 1.8 4.9 5.4.1.3 3.7 16 4.7 16 .3 0 1.3-1.3 3.2-4.2 1.6-2.4 2.8-4.7 3-5.5.3-1 .2-1.8-.2-2.3-.5-.7-1.5-.8-2.3-.8-.6 0-1.2.1-1.8.2-.3.1-.6 0-.9-.2-.2-.2-.3-.6-.2-.9 2.1-5.7 5.9-8.4 11.2-8.3 1.9.1 3.4.6 4.4 1.7 1.3 1.4 1.9 3.5 1.8 6.5z"
      fill="#343434"
    />
  </Svg>
);

export default VimeoSquare;
