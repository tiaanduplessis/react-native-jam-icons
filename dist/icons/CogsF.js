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

var CogsF = function CogsF(props) {
  return _react2.default.createElement(
    _reactNativeSvg2.default,
    _extends({ viewBox: "0 0 64 64" }, props),
    _react2.default.createElement(_reactNativeSvg.Path, {
      d: "M63.3 14.7c-1.8.3-3.7-.8-4.4-2.5-.7-1.8-.1-3.8 1.4-4.9-.9-1.3-2.1-2.5-3.4-3.5-1.1 1.5-3.1 2.1-4.9 1.3S49.2 2.5 49.5.7c-1.6-.3-3.3-.3-4.9 0 .4 1.8-.6 3.6-2.4 4.4-1.8.7-3.8.1-4.9-1.4-1.3.9-2.5 2.1-3.5 3.4 1.5 1.1 2.1 3.1 1.3 4.9s-2.6 2.8-4.4 2.5c-.3 1.6-.3 3.3 0 4.9 1.8-.3 3.7.8 4.4 2.5.7 1.8.1 3.8-1.4 4.9.9 1.3 2.1 2.5 3.4 3.5 1.1-1.5 3.1-2.1 4.9-1.3s2.8 2.6 2.5 4.4c1.6.3 3.3.3 4.9 0-.3-1.8.8-3.7 2.5-4.4 1.8-.7 3.8-.1 4.9 1.4 1.3-.9 2.5-2.1 3.5-3.4-1.5-1.1-2.1-3.1-1.3-4.9s2.6-2.8 4.4-2.5c.1-1.7.2-3.3-.1-4.9zm-10.6 4.7c-1.3 3.1-5 4.6-8.1 3.3s-4.6-5-3.3-8.1 5-4.6 8.1-3.3 4.6 5 3.3 8.1zM40 39c-.5-2-1.3-3.9-2.3-5.6-2 1.2-4.6.9-6.3-.8-1.7-1.7-2-4.3-.8-6.3-1.7-1-3.6-1.8-5.6-2.3-.6 2.2-2.6 3.9-5 3.9s-4.4-1.7-5-3.9c-2 .5-3.9 1.3-5.6 2.3 1.2 2 .9 4.6-.8 6.3-1.7 1.7-4.3 2-6.3.8C1.3 35.1.5 37 0 39c2.2.6 3.9 2.6 3.9 5S2.2 48.4 0 49c.5 2 1.3 3.9 2.3 5.6 2-1.2 4.6-.9 6.3.8 1.7 1.7 2 4.3.8 6.3 1.7 1 3.6 1.8 5.6 2.3.6-2.2 2.6-3.9 5-3.9s4.4 1.7 5 3.9c2-.5 3.9-1.3 5.6-2.3-1.2-2-.9-4.6.8-6.3 1.7-1.7 4.3-2 6.3-.8 1-1.7 1.8-3.6 2.3-5.6-2.2-.6-3.9-2.6-3.9-5s1.7-4.4 3.9-5zM20 51.7c-4.3 0-7.7-3.5-7.7-7.7s3.5-7.7 7.7-7.7 7.7 3.5 7.7 7.7-3.4 7.7-7.7 7.7z",
      fill: "#333"
    })
  );
};

exports.default = CogsF;