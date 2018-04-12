import React from "react";
import Svg, { Path } from "react-native-svg";

const Pause = props => (
  <Svg viewBox="0 0 48 64" {...props}>
    <Path
      d="M12 0H4C1.8 0 0 1.8 0 4v56c0 2.2 1.8 4 4 4h8c2.2 0 4-1.8 4-4V4c0-2.2-1.8-4-4-4zm-2 58H6V6h4v52zM44 0h-8c-2.2 0-4 1.8-4 4v56c0 2.2 1.8 4 4 4h8c2.2 0 4-1.8 4-4V4c0-2.2-1.8-4-4-4zm-2 58h-4V6h4v52z"
      fill="#343434"
    />
  </Svg>
);

export default Pause;
