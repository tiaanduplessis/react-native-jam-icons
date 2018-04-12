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

var Headphone = function Headphone(_ref) {
  var color = _ref.color,
      props = _objectWithoutProperties(_ref, ["color"]);

  return _react2.default.createElement(
    _reactNativeSvg2.default,
    _extends({ viewBox: "0 0 64 50" }, props),
    _react2.default.createElement(_reactNativeSvg.Path, {
      d: "M61 29c0-1.1-.9-2-2-2C59 12.1 46.9 0 32 0S5 12.1 5 27c-1.1 0-2 .9-2 2-1.7.2-3 1.7-3 3.5v11c0 1.8 1.3 3.2 3 3.5v1c0 1.1.9 2 2 2h7c1.1 0 2-.9 2-2V29c0-1.1-.9-2-2-2h-1c0-11.6 9.4-21 21-21s21 9.4 21 21h-1c-1.1 0-2 .9-2 2v19c0 1.1.9 2 2 2h7c1.1 0 2-.9 2-2v-1c1.7-.2 3-1.7 3-3.5v-11c0-1.8-1.3-3.2-3-3.5z",
      fill: color
    })
  );
};

exports.default = Headphone;