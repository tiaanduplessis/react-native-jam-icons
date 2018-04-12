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

var Luggage = function Luggage(_ref) {
  var color = _ref.color,
      props = _objectWithoutProperties(_ref, ["color"]);

  return _react2.default.createElement(
    _reactNativeSvg2.default,
    _extends({ viewBox: "0 0 64 58" }, props),
    _react2.default.createElement(_reactNativeSvg.Path, {
      d: "M50 10h-8V7c0-3.9-3.1-7-7-7h-6c-3.9 0-7 3.1-7 7v3h-8C6.3 10 0 16.3 0 24v20c0 7.7 6.3 14 14 14h36c7.7 0 14-6.3 14-14V24c0-7.7-6.3-14-14-14zM26 7c0-1.7 1.3-3 3-3h6c1.7 0 3 1.3 3 3v3H26V7zm16 7h4v40H18V14h24zM4 44V24c0-5.5 4.5-10 10-10v40C8.5 54 4 49.5 4 44zm56 0c0 5.5-4.5 10-10 10V14c5.5 0 10 4.5 10 10v20z",
      fill: color
    })
  );
};

exports.default = Luggage;