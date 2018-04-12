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

var Eye = function Eye(props) {
  return _react2.default.createElement(
    _reactNativeSvg2.default,
    _extends({ viewBox: "0 0 64 34" }, props),
    _react2.default.createElement(_reactNativeSvg.Path, {
      d: "M32 .3C16 .3 0 9.8 0 17.6s16 15.8 32 15.8 32-8 32-15.8S48 .3 32 .3zm1 9.4c0-1.1.9-1.9 2-1.9s2 .9 2 1.9c0 1.1-.9 1.9-2 1.9s-2-.8-2-1.9zm-1 0c0 .8.3 1.5.8 2-.3 0-.6-.1-.8-.1-2.8 0-5 2.2-5 4.9s2.2 4.9 5 4.9 5-2.2 5-4.9c0-1.6-.8-3-2-3.9 1.7 0 3-1.3 3-2.9 0-.2 0-.4-.1-.6 2.5 1.8 4.1 4.6 4.1 7.7 0 5.3-4.5 9.6-10 9.6s-10-4.3-10-9.6 4.5-9.6 10-9.6c.4 0 .9 0 1.3.1-.8.5-1.3 1.4-1.3 2.4zM4 17.6c0-2 2.9-5.3 7.9-8.1 5.2-2.9 11.6-4.8 17.9-5.1-6.1 1-10.8 6.2-10.8 12.4 0 6.3 4.7 11.5 10.9 12.5-6.4-.3-13-1.9-18.2-4.5-5-2.5-7.7-5.4-7.7-7.2zm48.2 7.2C47 27.3 40.5 29 34 29.3c6.2-1 10.9-6.2 10.9-12.5S40.2 5.4 34.1 4.4c6.3.4 12.7 2.2 17.9 5.1 5.1 2.8 7.9 6.1 7.9 8.1.1 1.8-2.6 4.7-7.7 7.2z",
      fill: "#343434"
    })
  );
};

exports.default = Eye;