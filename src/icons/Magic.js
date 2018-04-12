import React from "react";
import Svg, { Path } from "react-native-svg";

const Magic = ({ color, ...props }) => (
  <Svg viewBox="0 0 63 63" {...props}>
    <Path
      d="M43.2 16c-.8-.8-2-.8-2.8 0L.7 55.6c-.8.8-.8 2 0 2.8L4.3 62c.8.8 2 .8 2.8 0l39.6-39.6c.8-.8.8-2 0-2.8L43.2 16zM5.7 59.2l-2.1-2.1 29-29 2.1 2.1-29 29zm31.1-31.1L34.7 26l7.1-7.1 2.1 2.1-7.1 7.1zm9.872-14.142l8.485-8.485 1.414 1.414-8.485 8.485zM26.873 6.889l1.414-1.414 8.485 8.485-1.414 1.414zM41.1 29.1h2v12h-2zm0-29h2v12h-2zm9.5 19.5h12v2h-12zm-29 0h12v2h-12zm25.77 7.795l1.414-1.414 8.485 8.485-1.414 1.414z"
      fill={color}
    />
  </Svg>
);

export default Magic;
