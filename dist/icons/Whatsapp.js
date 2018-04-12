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

var Whatsapp = function Whatsapp(props) {
  return _react2.default.createElement(
    _reactNativeSvg2.default,
    _extends({ viewBox: "0 0 64 64" }, props),
    _react2.default.createElement(_reactNativeSvg.Path, {
      d: "M47 37.5c-.8-.4-4.6-2.2-5.3-2.5-.7-.3-1.2-.4-1.7.4s-2 2.5-2.4 3c-.4.5-.9.6-1.7.2-.8-.4-3.3-1.2-6.2-3.8-2.3-2-3.8-4.5-4.3-5.3-.4-.8 0-1.2.3-1.6.3-.3.8-.9 1.2-1.3.4-.4.5-.8.8-1.3.3-.5.1-1-.1-1.3-.2-.4-1.7-4.1-2.4-5.7-.6-1.5-1.3-1.3-1.7-1.3-.4 0-1-.1-1.5-.1s-1.3.2-2.1 1c-.7.8-2.7 2.6-2.7 6.4 0 3.8 2.8 7.4 3.1 7.9.4.5 5.3 8.5 13.2 11.5 7.8 3.1 7.8 2 9.2 1.9 1.4-.1 4.6-1.8 5.2-3.6.6-1.8.6-3.3.5-3.6-.1-.4-.7-.6-1.4-.9zM32.6 0C15.2 0 1.2 14 1.2 31.2c0 5.9 1.6 11.4 4.5 16.1L0 64l17.4-5.5c4.5 2.5 9.7 3.9 15.2 3.9C50 62.4 64 48.4 64 31.2S49.9 0 32.6 0zm0 57.4c-5.4 0-10.4-1.6-14.5-4.3L7.9 56.3l3.3-9.7c-3.2-4.3-5-9.6-5-15.4C6.2 16.7 18 5 32.6 5 47.1 5 59 16.7 59 31.2c0 14.4-11.9 26.2-26.4 26.2z",
      fill: "#343434"
    })
  );
};

exports.default = Whatsapp;