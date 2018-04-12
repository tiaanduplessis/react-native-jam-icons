module.exports = () => {
    return (code, state) => `

    import React from "react";
    import Svg, { Path } from "react-native-svg";
    
    const ${state.componentName} = ({color, ...props}) => (
        ${code.replace(/fill=".*"/g, 'fill={color}')}
    );
    
    export default ${state.componentName};
`
  }