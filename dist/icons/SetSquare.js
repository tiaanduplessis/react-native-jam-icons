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

var SetSquare = function SetSquare(_ref) {
  var color = _ref.color,
      props = _objectWithoutProperties(_ref, ["color"]);

  return _react2.default.createElement(
    _reactNativeSvg2.default,
    _extends({ viewBox: "0 0 64 64" }, props),
    _react2.default.createElement(_reactNativeSvg.Path, {
      d: "M0 0v64h64L0 0zm44 54c-.6 0-1 .4-1 1v5h-3v-2c0-.6-.4-1-1-1s-1 .4-1 1v2h-3v-5c0-.6-.4-1-1-1s-1 .4-1 1v5h-3v-2c0-.6-.4-1-1-1s-1 .4-1 1v2h-3v-5c0-.6-.4-1-1-1s-1 .4-1 1v5h-3v-2c0-.6-.4-1-1-1s-1 .4-1 1v2h-3v-5c0-.6-.4-1-1-1s-1 .4-1 1v5h-3v-2c0-.6-.4-1-1-1s-1 .4-1 1v2H4V9.7L54.3 60H45v-5c0-.6-.4-1-1-1zm-31-3h20L13 31v20zm3-12.8l9.8 9.8H16v-9.8z",
      fill: color
    })
  );
};

exports.default = SetSquare;