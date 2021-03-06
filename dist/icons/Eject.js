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

var Eject = function Eject(_ref) {
  var color = _ref.color,
      props = _objectWithoutProperties(_ref, ["color"]);

  return _react2.default.createElement(
    _reactNativeSvg2.default,
    _extends({ viewBox: "0 0 64 55" }, props),
    _react2.default.createElement(_reactNativeSvg.Path, {
      d: "M60 47H4c-2.2 0-4 1.8-4 4s1.8 4 4 4h56c2.2 0 4-1.8 4-4s-1.8-4-4-4zM1 39h62c.6 0 .7-.3.4-.8L33.9 1.3c-1-1.3-2.7-1.3-3.7 0L.6 38.2c-.3.5-.1.8.4.8zM32 8.6L51.5 33h-39L32 8.6z",
      fill: color
    })
  );
};

exports.default = Eject;