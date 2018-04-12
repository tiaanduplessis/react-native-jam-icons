import React from "react";
import Svg, { Path } from "react-native-svg";

const Eggs = props => (
  <Svg viewBox="0 0 64 64" {...props}>
    <Path
      d="M21 8C9.4 8 0 31.3 0 42.9 0 54.6 9.4 64 21 64s21-9.4 21-21.1C42 31.3 32.6 8 21 8zm0 50c-8.3 0-15-6.7-15-15.1C6 31.5 15.1 14 21 14s15 17.5 15 28.9C36 51.3 29.3 58 21 58zM43 0c-4.9 0-9.4 4.2-13 9.9l3.9 4.3C36.4 9.5 39.6 6 43 6c8.3 0 15 20.7 15 29s-6.7 15-15 15h-.8l-2.7 5.7c1.1.2 2.3.3 3.5.3 11.6 0 21-9.4 21-21.1C64 23.3 54.6 0 43 0z"
      fill="#343434"
    />
  </Svg>
);

export default Eggs;
