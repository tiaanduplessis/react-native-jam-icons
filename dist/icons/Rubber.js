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

var Rubber = function Rubber(_ref) {
  var color = _ref.color,
      props = _objectWithoutProperties(_ref, ["color"]);

  return _react2.default.createElement(
    _reactNativeSvg2.default,
    _extends({ viewBox: "0 0 65 59" }, props),
    _react2.default.createElement(_reactNativeSvg.Path, {
      d: "M63.5 19.8L45.1 1.4c-.8-.8-2-.8-2.8 0L2.7 41c-2.3 2.3-2.3 6.1 0 8.5L8.2 55H6c-.6 0-1 .4-1 1v2c0 .6.4 1 1 1h46c.6 0 1-.4 1-1v-2c0-.6-.4-1-1-1H31.1l32.4-32.4c.8-.7.8-2 0-2.8zm-58 24l18.4-18.4L39.5 41 25.7 54.8h-12l-8.1-8.1c-.8-.8-.8-2.1-.1-2.9z",
      fill: color
    })
  );
};

exports.default = Rubber;