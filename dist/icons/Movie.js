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

var Movie = function Movie(_ref) {
  var color = _ref.color,
      props = _objectWithoutProperties(_ref, ["color"]);

  return _react2.default.createElement(
    _reactNativeSvg2.default,
    _extends({ viewBox: "0 0 54 64" }, props),
    _react2.default.createElement(_reactNativeSvg.Path, {
      d: "M50 0H4C1.8 0 0 1.8 0 4v56c0 2.2 1.8 4 4 4h46c2.2 0 4-1.8 4-4V4c0-2.2-1.8-4-4-4zM8 59c0 .6-.4 1-1 1H4c-.6 0-1-.4-1-1v-3c0-.6.4-1 1-1h3c.6 0 1 .4 1 1v3zm0-7c0 .6-.4 1-1 1H4c-.6 0-1-.4-1-1v-3c0-.6.4-1 1-1h3c.6 0 1 .4 1 1v3zm0-7c0 .6-.4 1-1 1H4c-.6 0-1-.4-1-1v-3c0-.6.4-1 1-1h3c.6 0 1 .4 1 1v3zm0-7c0 .6-.4 1-1 1H4c-.6 0-1-.4-1-1v-3c0-.6.4-1 1-1h3c.6 0 1 .4 1 1v3zm0-9c0 .6-.4 1-1 1H4c-.6 0-1-.4-1-1v-3c0-.6.4-1 1-1h3c.6 0 1 .4 1 1v3zm0-7c0 .6-.4 1-1 1H4c-.6 0-1-.4-1-1v-3c0-.6.4-1 1-1h3c.6 0 1 .4 1 1v3zm0-7c0 .6-.4 1-1 1H4c-.6 0-1-.4-1-1v-3c0-.6.4-1 1-1h3c.6 0 1 .4 1 1v3zm0-7c0 .6-.4 1-1 1H4c-.6 0-1-.4-1-1V5c0-.6.4-1 1-1h3c.6 0 1 .4 1 1v3zm34 50H12V35h30v23zm0-29H12V6h30v23zm9 30c0 .6-.4 1-1 1h-3c-.6 0-1-.4-1-1v-3c0-.6.4-1 1-1h3c.6 0 1 .4 1 1v3zm0-7c0 .6-.4 1-1 1h-3c-.6 0-1-.4-1-1v-3c0-.6.4-1 1-1h3c.6 0 1 .4 1 1v3zm0-7c0 .6-.4 1-1 1h-3c-.6 0-1-.4-1-1v-3c0-.6.4-1 1-1h3c.6 0 1 .4 1 1v3zm0-7c0 .6-.4 1-1 1h-3c-.6 0-1-.4-1-1v-3c0-.6.4-1 1-1h3c.6 0 1 .4 1 1v3zm0-9c0 .6-.4 1-1 1h-3c-.6 0-1-.4-1-1v-3c0-.6.4-1 1-1h3c.6 0 1 .4 1 1v3zm0-7c0 .6-.4 1-1 1h-3c-.6 0-1-.4-1-1v-3c0-.6.4-1 1-1h3c.6 0 1 .4 1 1v3zm0-7c0 .6-.4 1-1 1h-3c-.6 0-1-.4-1-1v-3c0-.6.4-1 1-1h3c.6 0 1 .4 1 1v3zm0-7c0 .6-.4 1-1 1h-3c-.6 0-1-.4-1-1V5c0-.6.4-1 1-1h3c.6 0 1 .4 1 1v3z",
      fill: color
    })
  );
};

exports.default = Movie;