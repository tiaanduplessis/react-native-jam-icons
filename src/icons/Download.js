import React from "react";
import Svg, { Path } from "react-native-svg";

const Download = props => (
  <Svg viewBox="0 0 64 64" {...props}>
    <Path
      d="M64 53c0-1.1-.9-2-2-2s-2 .9-2 2v3.1c0 2.2-1.8 4-4 4H8c-2.2 0-4-1.8-4-4V53c0-1.1-.9-2-2-2s-2 .9-2 2v3c0 4.4 3.6 8 8 8h48c4.4 0 8-3.6 8-8v-3zm-33.4-3.4c.4.4.9.6 1.4.6.5 0 1-.2 1.4-.6l14.1-14.1c.8-.8.8-2.1 0-2.8-.8-.8-2-.8-2.8 0L34 43.3V2c0-1.1-.9-2-2-2s-2 .9-2 2v41.3L19.3 32.6c-.8-.8-2.1-.8-2.8 0-.8.8-.8 2 0 2.8l14.1 14.2z"
      fill="#333"
    />
  </Svg>
);

export default Download;
