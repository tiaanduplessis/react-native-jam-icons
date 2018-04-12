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

var WaterDrop = function WaterDrop(_ref) {
  var color = _ref.color,
      props = _objectWithoutProperties(_ref, ["color"]);

  return _react2.default.createElement(
    _reactNativeSvg2.default,
    _extends({ viewBox: "0 0 42 64" }, props),
    _react2.default.createElement(_reactNativeSvg.Path, {
      d: "M21 0S0 31.4 0 43c0 11.6 9.4 21 21 21s21-9.4 21-21S21 0 21 0zm0 60c-9.4 0-17-7.6-17-17 0-3.2 2.4-9.5 6.5-17.5 1.1-2 2.2-4.2 3.4-6.3 2.2-3.9 4.6-7.9 7-11.7 2.4 3.8 4.8 7.8 7 11.7 1.2 2.2 2.4 4.3 3.4 6.3 4.2 8 6.5 14.3 6.5 17.5.2 9.4-7.4 17-16.8 17z",
      fill: color
    })
  );
};

exports.default = WaterDrop;