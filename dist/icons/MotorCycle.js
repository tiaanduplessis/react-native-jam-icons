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

var MotorCycle = function MotorCycle(props) {
  return _react2.default.createElement(
    _reactNativeSvg2.default,
    _extends({ viewBox: "0 0 56 64" }, props),
    _react2.default.createElement(_reactNativeSvg.Path, {
      d: "M33.4 13.9C35 12.4 36 10.3 36 8c0-4.4-3.6-8-8-8s-8 3.6-8 8c0 2.3 1 4.4 2.6 5.9C18.7 15.6 16 19.5 16 24v18c0 3.9 2 7.3 5 9.2V45c0-3.9 3.1-7 7-7s7 3.1 7 7v6.2c3-2 5-5.4 5-9.2V24c0-4.5-2.7-8.4-6.6-10.1zM28 3c2.8 0 5 2.2 5 5s-2.2 5-5 5-5-2.2-5-5 2.2-5 5-5zm9 37.6c-1.6-3.3-5-5.6-9-5.6s-7.4 2.3-9 5.6V24c0-4.4 3.6-8 8-8h2c4.4 0 8 3.6 8 8v16.6zm-9-.6c-2.8 0-5 2.2-5 5v14c0 2.8 2.2 5 5 5s5-2.2 5-5V45c0-2.8-2.2-5-5-5zm2 19c0 1.1-.9 2-2 2s-2-.9-2-2V45c0-1.1.9-2 2-2s2 .9 2 2v14zM18.2 10c-.1-.6-.2-1.3-.2-2V7h-6.5c-.5-.6-1.2-1-2-1h-7C1.1 6 0 7.1 0 8.5S1.1 11 2.5 11h7c.8 0 1.5-.4 2-1h6.7zM9.5 9h-7c-.3 0-.5-.2-.5-.5s.2-.5.5-.5h7c.3 0 .5.2.5.5s-.2.5-.5.5zm44-3h-7c-.8 0-1.5.4-2 1H38v1c0 .7-.1 1.4-.2 2h6.7c.5.6 1.2 1 2 1h7c1.4 0 2.5-1.1 2.5-2.5S54.9 6 53.5 6zm0 3h-7c-.3 0-.5-.2-.5-.5s.2-.5.5-.5h7c.3 0 .5.2.5.5s-.2.5-.5.5z",
      fill: "#343434"
    })
  );
};

exports.default = MotorCycle;