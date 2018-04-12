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

var Star = function Star(_ref) {
  var color = _ref.color,
      props = _objectWithoutProperties(_ref, ["color"]);

  return _react2.default.createElement(
    _reactNativeSvg2.default,
    _extends({ viewBox: "0 0 64 61" }, props),
    _react2.default.createElement(_reactNativeSvg.Path, {
      d: "M64.1 23l-21.9-3.2L32.4 0l-9.8 19.8L.7 23l15.8 15.4-3.7 21.8 19.6-10.3L52 60.2l-3.7-21.8L64.1 23zM32.4 45.4l-14.3 7.5L20.9 37 9.3 25.8l15.9-2.3L32.4 9l7.1 14.4 15.9 2.3L43.9 37l2.7 15.9-14.2-7.5z",
      fill: color
    })
  );
};

exports.default = Star;