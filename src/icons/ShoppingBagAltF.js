import React from "react";
import Svg, { Path } from "react-native-svg";

const ShoppingBagAltF = ({ color, ...props }) => (
  <Svg viewBox="0 0 48 64" {...props}>
    <Path
      d="M38 16v-6c0-5.5-4.5-10-10-10h-8c-5.5 0-10 4.5-10 10v6H0v48h48V16H38zm-24-6c0-3.3 2.7-6 6-6h8c3.3 0 6 2.7 6 6v6H14v-6z"
      fill={color}
    />
  </Svg>
);

export default ShoppingBagAltF;
