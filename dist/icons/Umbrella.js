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

var Umbrella = function Umbrella(_ref) {
  var color = _ref.color,
      props = _objectWithoutProperties(_ref, ["color"]);

  return _react2.default.createElement(
    _reactNativeSvg2.default,
    _extends({ viewBox: "0 0 64 64" }, props),
    _react2.default.createElement(_reactNativeSvg.Path, {
      d: "M44 54c-1.1 0-2 .9-2 2 0 2.2-1.8 4-4 4s-4-1.8-4-4V32h29.9C62.4 16.4 49.7 4 34 3.1V2c0-1.1-.9-2-2-2s-2 .9-2 2v1.1C15.6 4 3.8 14.3.8 28l-.1.6C.5 29.7.3 30.9.2 32H30v24c0 4.4 3.6 8 8 8s8-3.6 8-8c0-1.1-.9-2-2-2zM32 7c13 0 24 8.9 27.1 21H4.9C8 15.9 19 7 32 7z",
      fill: color
    })
  );
};

exports.default = Umbrella;