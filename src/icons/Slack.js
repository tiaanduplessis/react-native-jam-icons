import React from "react";
import Svg, { Path } from "react-native-svg";

const Slack = props => (
  <Svg viewBox="0 0 64 64" {...props}>
    <Path
      d="M63.5 33.3c-1.3-2.8-4.6-4.1-7.4-2.8l-2.7 1.2-6.9-15.5 2.7-1.2c2.8-1.3 4.1-4.6 2.8-7.4-1.3-2.8-4.6-4.1-7.4-2.8L41.9 6l-1.2-2.7C39.4.5 36.1-.8 33.3.5c-2.8 1.3-4.1 4.6-2.8 7.4l1.2 2.7-15.5 6.9-1.2-2.7c-1.3-2.8-4.6-4.1-7.4-2.8-2.8 1.3-4.1 4.6-2.8 7.4L6 22.1l-2.7 1.2C.5 24.6-.8 27.9.5 30.7c1.3 2.8 4.6 4.1 7.4 2.8l2.7-1.2 6.9 15.5-2.7 1.2c-2.8 1.3-4.1 4.6-2.8 7.4 1.3 2.8 4.6 4.1 7.4 2.8l2.7-1.2 1.2 2.7c1.3 2.8 4.6 4.1 7.4 2.8 2.8-1.3 4.1-4.6 2.8-7.4l-1.2-2.7 15.5-6.9 1.2 2.7c1.3 2.8 4.6 4.1 7.4 2.8 2.8-1.3 4.1-4.6 2.8-7.4L58 41.9l2.7-1.2c2.8-1.2 4.1-4.6 2.8-7.4zm-35.8 9.9l-6.9-15.5 15.4-6.9 6.9 15.4-15.4 7z"
      fill="#343434"
    />
  </Svg>
);

export default Slack;
