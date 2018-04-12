"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _reactNativeSvg = require("react-native-svg");

var _reactNativeSvg2 = _interopRequireDefault(_reactNativeSvg);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Helmet = function Helmet(props) {
  return _react2.default.createElement(
    _reactNativeSvg2.default,
    _extends({ viewBox: "0 0 64 61" }, props),
    _react2.default.createElement(_reactNativeSvg.Path, {
      d: "M64 30c0-1.3-.2-2.6-.5-3.8C60.8 11.3 47.7 0 32 0 14.3 0 0 14.3 0 32v8.3l55.6 20.2C60.8 54.9 64 47.3 64 39v-9zM50 40c-2.3 0-4.4-.7-6.1-2.1l-.2-.2L27.2 28H26c-2.2 0-4-1.8-4-4s1.8-4 4-4h24.1c3.1 0 5.8 1.4 7.7 3.6.9 2.7 1.3 5.5 1.3 8.4v2.3C57.4 37.7 54 40 50 40zm4 14.7L5 36.8V32C5 17.1 17.1 5 32 5c9.2 0 17.3 4.6 22.2 11.6-1.3-.4-2.7-.6-4.2-.6H26c-4.4 0-8 3.6-8 8s3.6 8 8.1 8l15.3 9.1c2.4 1.8 5.3 2.9 8.6 2.9 3.4 0 6.5-1.2 8.9-3.2-.3 5-2 9.8-4.9 13.9z",
      fill: "#343434"
    })
  );
};

exports.default = Helmet;