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

var Plug = function Plug(props) {
  return _react2.default.createElement(
    _reactNativeSvg2.default,
    _extends({ viewBox: "0 0 48 64" }, props),
    _react2.default.createElement(_reactNativeSvg.Path, {
      d: "M44 24h-4V2c0-1.1-.9-2-2-2h-4c-1.1 0-2 .9-2 2v22H16V2c0-1.1-.9-2-2-2h-4C8.9 0 8 .9 8 2v22H4c-2.2 0-4 1.8-4 4v12c0 8.8 7.2 16 16 16v4c0 2.2 1.8 4 4 4h8c2.2 0 4-1.8 4-4v-4c8.8 0 16-7.2 16-16V28c0-2.2-1.8-4-4-4zM32.1 41.1l-7.4 14.7s0 .1-.1.1c-.1.2-.3.3-.4.3V44.3h-7.3c-.6 0-.8-.4-.6-.9l7.4-14.7c.1-.3.3-.4.5-.4v12h7.3c.6-.1.8.3.6.8z",
      fill: "#333"
    })
  );
};

exports.default = Plug;