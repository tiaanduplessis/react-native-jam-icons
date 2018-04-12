import React from "react";
import Svg, { Path } from "react-native-svg";

const Task = ({ color, ...props }) => (
  <Svg viewBox="0 0 63 32" {...props}>
    <Path
      d="M62 28H32c-.6 0-1 .4-1 1v2c0 .6.4 1 1 1h30c.6 0 1-.4 1-1v-2c0-.6-.4-1-1-1zm0-14H32c-.6 0-1 .4-1 1v2c0 .6.4 1 1 1h30c.6 0 1-.4 1-1v-2c0-.6-.4-1-1-1zm0-14H32c-.6 0-1 .4-1 1v2c0 .6.4 1 1 1h30c.6 0 1-.4 1-1V1c0-.6-.4-1-1-1zM26.2 3.2c-.4-.4-1-.4-1.4 0L21.9 6H2v3L.7 10.3c-.4.4-.4 1 0 1.4L2 13v13h20V11.6L27.6 6c.4-.4.4-1 0-1.4l-1.4-1.4zM18.9 9l-7.6 7.6L5 10.3V9h13.9zm.1 14H5v-7l5.6 5.6c.2.2.5.3.7.3.3 0 .5-.1.7-.3l7-7V23z"
      fill={color}
    />
  </Svg>
);

export default Task;
