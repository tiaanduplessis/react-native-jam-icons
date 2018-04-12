import React from "react";
import Svg, { Path, Ellipse } from "react-native-svg";

const Ruler = props => (
  <Svg viewBox="0 0 63 63" {...props}>
    <Path
      className="st0"
      d="M62.2 14.1L49.5 1.4c-.8-.8-2-.8-2.8 0L1.4 46.7c-.8.8-.8 2 0 2.8l12.7 12.7c.8.8 2 .8 2.8 0L62.2 17c.8-.8.8-2.1 0-2.9zm-6.3 3.6l-3.5-3.5c-.4-.4-1-.4-1.4 0-.4.4-.4 1 0 1.4l3.5 3.5-2.1 2.1-5-5c-.4-.4-1-.4-1.4 0-.4.4-.4 1 0 1.4l5 5-2.1 2.1-3.5-3.5c-.4-.4-1-.4-1.4 0-.4.4-.4 1 0 1.4l3.5 3.5-2.1 2.1-5-5c-.4-.4-1-.4-1.4 0-.4.4-.4 1 0 1.4l5 5-2.1 2.1-3.5-3.5c-.4-.4-1-.4-1.4 0-.4.4-.4 1 0 1.4l3.5 3.5-2.1 2.1-5-5c-.4-.4-1-.4-1.4 0-.4.4-.4 1 0 1.4l5 5-2.1 2.1-3.5-3.5c-.4-.4-1-.4-1.4 0-.4.4-.4 1 0 1.4l3.5 3.5-2.1 2.1-5-5c-.4-.4-1-.4-1.4 0-.4.4-.4 1 0 1.4l5 5-2.4 2.4-3.6-3.6c-.4-.4-1-.4-1.4 0-.4.4-.4 1 0 1.4l3.5 3.5L15.6 58l-9.9-9.9L48.1 5.7l9.9 9.9-2.1 2.1z"
    />
    <Ellipse
      transform="rotate(-45 14.84 48.797)"
      className="st0"
      cx={14.8}
      cy={48.8}
      rx={3}
      ry={3}
    />
  </Svg>
);

export default Ruler;
