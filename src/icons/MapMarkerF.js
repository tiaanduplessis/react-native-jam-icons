import React from "react";
import Svg, { Path } from "react-native-svg";

const MapMarkerF = ({ color, ...props }) => (
  <Svg viewBox="0 0 45 64" {...props}>
    <Path
      d="M22 0C8.7 0 .4 9.1.4 22.3l20.4 40.6c.6.9 1.7.9 2.4 0 0 0 20.9-27.4 20.9-40.6S35.3 0 22 0zm0 35c-7.7 0-14-6.3-14-14S14.3 7 22 7s14 6.3 14 14-6.3 14-14 14z"
      fill={color}
    />
  </Svg>
);

export default MapMarkerF;
