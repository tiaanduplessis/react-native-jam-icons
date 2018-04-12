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

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

var Youtube = function Youtube(_ref) {
  var color = _ref.color,
      props = _objectWithoutProperties(_ref, ["color"]);

  return _react2.default.createElement(
    _reactNativeSvg2.default,
    _extends({ viewBox: "0 0 54 64" }, props),
    _react2.default.createElement(_reactNativeSvg.Path, {
      d: "M32.6 42c-.5 0-1.1.2-1.6.8v10.5c.5.5 1.1.8 1.6.8.9 0 1.4-.8 1.4-2.3v-7.3c0-1.7-.5-2.5-1.4-2.5zm11.9-.7c-1.1 0-1.6.8-1.6 2.5v1.7h3.3v-1.7c0-1.6-.6-2.5-1.7-2.5zm9-7.1s-.5-3.7-2.1-5.4c-2.1-2.2-4.4-2.2-5.4-2.3-7.7-.5-19-.5-19-.5s-11.3 0-18.9.5c-1.1.1-3.3.1-5.4 2.3C1.1 30.4.6 34.2.6 34.2S0 38.6 0 43v4.1c0 4.4.5 8.7.5 8.7s.5 3.7 2.1 5.4c2.1 2.2 4.8 2.1 6 2.3 4.4.4 18.4.5 18.4.5s11.3 0 18.9-.6c1.1-.1 3.4-.1 5.4-2.3 1.6-1.6 2.1-5.4 2.1-5.4s.5-4.4.5-8.7v-4c.1-4.4-.4-8.8-.4-8.8zM11.9 56.7H8.3V35.8H4.4v-3.4h11.4v3.4h-3.9v20.9zm12.9 0h-3.3v-2C20.2 56.2 19 57 17.8 57c-1.1 0-1.8-.4-2.1-1.4-.2-.6-.3-1.4-.3-2.7V38.6h3.3v14.7c.1.5.3.8.8.8.7 0 1.3-.5 2.1-1.5v-14h3.3v18.1zm12.5-5.4c0 1.7-.1 2.9-.3 3.7-.4 1.4-1.3 2-2.6 2-1.2 0-2.3-.6-3.4-2v1.8h-3.3V32.4H31v8c1.1-1.3 2.2-2 3.4-2 1.3 0 2.2.7 2.6 2 .2.7.3 1.9.3 3.7v7.2zm12.1-3h-6.5v3.2c0 1.7.5 2.5 1.7 2.5.8 0 1.3-.4 1.5-1.3 0-.2.1-.9.1-2.2h3.3v.5c0 1.1 0 1.8-.1 2.1-.1.7-.4 1.4-.8 2-.9 1.3-2.3 2-4 2-1.7 0-3-.6-4-1.9-.7-.9-1-2.3-1-4.3v-6.4c0-1.9.3-3.4 1-4.3.9-1.2 2.3-1.9 3.9-1.9s2.9.6 3.9 1.9c.7.9 1 2.3 1 4.3v3.8zm-35-34V24h3.5v-9.7L22 0h-3.5l-2.4 9.4L13.7 0H10l2.2 6.7c1.1 3.3 1.8 5.9 2.2 7.6zm7.6 3.8c0 1.9.3 3.3 1.1 4.1.9 1.2 2.2 1.8 3.9 1.8s3-.6 3.9-1.8c.7-.9 1.1-2.3 1.1-4.1V12c0-1.9-.3-3.2-1.1-4.1C30 6.6 28.7 6 27 6s-3 .6-3.9 1.8c-.7.9-1.1 2.3-1.1 4.1v6.2zm3.4-6.8c0-1.6.5-2.4 1.6-2.4s1.6.8 1.6 2.4v7.4c0 1.6-.5 2.4-1.6 2.4s-1.6-.8-1.6-2.4v-7.4zM37.3 24c1.1 0 2.3-.7 3.6-2.2v1.9H44V6h-3.1v13.6c-.7 1-1.3 1.5-2 1.5-.4 0-.7-.3-.7-.8V6H35v14c0 1.3.1 2.1.3 2.6.3 1 1 1.4 2 1.4z",
      fill: color
    })
  );
};

exports.default = Youtube;