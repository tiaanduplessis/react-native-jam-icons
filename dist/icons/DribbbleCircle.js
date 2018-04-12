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

var DribbbleCircle = function DribbbleCircle(props) {
  return _react2.default.createElement(
    _reactNativeSvg2.default,
    _extends({ viewBox: "0 0 64 64" }, props),
    _react2.default.createElement(_reactNativeSvg.Path, {
      d: "M32 0C14.3 0 0 14.3 0 32s14.3 32 32 32 32-14.3 32-32S49.7 0 32 0zm0 51c-10.5 0-19-8.5-19-19s8.5-19 19-19 19 8.5 19 19-8.5 19-19 19zm3.7-22.9c.5.9.9 2 1.4 3 1.4-.2 2.8-.3 4.2-.3 2.4 0 4.7.3 6.8 1-.1-3.7-1.4-7.2-3.5-9.9-.1 0-2.4 3.5-8.9 6.2zm6.9-8.1c-2.8-2.6-6.6-4.1-10.6-4.1-1.3 0-2.6.2-3.7.5 0 0 2.9 3.4 6 9.1 3.1-1.2 6.2-3 8.3-5.5zm-11.7 6.6c-3-5.5-5.8-9.1-5.8-9.1-4.4 2.2-7.7 6.2-8.8 11.1 0 0 7.2.1 14.6-2zm2.7 5.4c-.4-.9-.9-1.8-1.2-2.6-4.1 1.3-9.5 2.2-16.4 2.2v.4c0 4.1 1.6 7.9 4.1 10.7 3-5 7.8-8.9 13.5-10.7zM22.3 44.7c2.7 2 6 3.3 9.7 3.3 2.2 0 4.3-.4 6.2-1.2-.6-4.3-1.9-8.4-3.4-12.1-5.4 1.6-9.8 5.2-12.5 10zm15.8-10.8c1.2 3.5 2.3 7.3 2.8 11.4 3.5-2.4 6.1-6.2 6.9-10.5-2.1-.7-4.3-1-6.6-1-1.1-.1-2.1 0-3.1.1z",
      fill: "#343434"
    })
  );
};

exports.default = DribbbleCircle;