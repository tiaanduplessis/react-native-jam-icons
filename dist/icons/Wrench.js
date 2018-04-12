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

var Wrench = function Wrench(_ref) {
  var color = _ref.color,
      props = _objectWithoutProperties(_ref, ["color"]);

  return _react2.default.createElement(
    _reactNativeSvg2.default,
    _extends({ viewBox: "0 0 62 62" }, props),
    _react2.default.createElement(_reactNativeSvg.Path, {
      d: "M60.2 11.8L47.7 24.2l-7.4-2.5-2.5-7.4L50.3 1.9c-5.5-2-11.7-1-15.9 3.2C29.9 9.6 29 16.3 31.6 22L2.1 51.5c-2.3 2.3-2.3 6.1 0 8.5 2.3 2.3 6.1 2.3 8.5 0L40 30.6c5.7 2.6 12.5 1.7 16.9-2.8 4.3-4.3 5.3-10.5 3.3-16zm-51.7 46c-1.2 1.2-3.1 1.2-4.2 0s-1.2-3.1 0-4.2c1.2-1.2 3.1-1.2 4.2 0 1.2 1.2 1.2 3.1 0 4.2z",
      fill: color
    })
  );
};

exports.default = Wrench;