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

var Soccer = function Soccer(_ref) {
  var color = _ref.color,
      props = _objectWithoutProperties(_ref, ["color"]);

  return _react2.default.createElement(
    _reactNativeSvg2.default,
    _extends({ viewBox: "0 0 64 64" }, props),
    _react2.default.createElement(_reactNativeSvg.Path, {
      d: "M32 0C14.3 0 0 14.3 0 32c0 14 9 25.9 21.5 30.2v.2l.4-.1c3.2 1 6.5 1.6 10 1.6 17.7 0 32-14.3 32-32C64 14.3 49.7 0 32 0zm11.4 46.1l-2.7-3.3 3.5-10.9 6.4-1.7 8.2 5.1c-.5 4.5-2.2 8.6-4.6 12.1l-10.8-1.3zm-23.2.4l-10 1.4c-2.6-3.6-4.4-7.9-5-12.6l8.2-5.1 6.4 1.7 3.4 10.7-3 3.9zM5 30.7c.1-3.2.8-6.2 2-9l3.5 5.6L5 30.7zM26.8 41l-3.3-10.2L32 24l8.5 6.8L37.2 41H26.8zm26.7-13.7l3.5-5.5c1.1 2.8 1.8 5.8 2 9l-5.5-3.5zm1.3-9.7l-5.5 8.7-6.1 1.7-9.2-7.4v-6.7l7.2-7.2c5.7 2 10.5 5.9 13.6 10.9zm-18-12.2L32 10.2l-4.8-4.8c1.5-.2 3.1-.4 4.8-.4 1.6 0 3.2.2 4.8.4zM22.7 6.6l7.3 7.3v6.7l-9.3 7.5-6-1.6-5.5-8.9c3.1-5 7.9-8.9 13.5-11zm-9.4 44.9l6.5-.9.8 5.9c-2.6-1.2-5.1-3-7.3-5zM25 58.1l-1.3-9.5 2.9-3.6h10.8l3 3.7-1.2 9.3c-2.3.6-4.7 1-7.2 1-2.4 0-4.8-.3-7-.9zm18.5-1.6l.8-6.3 6.9.8c-2.3 2.3-4.9 4.1-7.7 5.5z",
      fill: color
    })
  );
};

exports.default = Soccer;