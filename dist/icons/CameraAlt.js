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

var CameraAlt = function CameraAlt(_ref) {
  var color = _ref.color,
      props = _objectWithoutProperties(_ref, ["color"]);

  return _react2.default.createElement(
    _reactNativeSvg2.default,
    _extends({ viewBox: "0 0 64 64" }, props),
    _react2.default.createElement(_reactNativeSvg.Path, {
      d: "M51 0H13C5.8 0 0 5.8 0 13v38c0 7.2 5.8 13 13 13h38c7.2 0 13-5.8 13-13V13c0-7.2-5.8-13-13-13zM4 13c0-5 4-9 9-9h38c5 0 9 4 9 9v31H4V13zm47 47H13c-5 0-9-4-9-9v-3h56v3c0 5-4 9-9 9zm3-52h-4c-1.1 0-2 .9-2 2v4c0 1.1.9 2 2 2h4c1.1 0 2-.9 2-2v-4c0-1.1-.9-2-2-2zM14 32h-4c-1.1 0-2 .9-2 2v4c0 1.1.9 2 2 2h4c1.1 0 2-.9 2-2v-4c0-1.1-.9-2-2-2zm37 20H13c-1.1 0-2 .9-2 2s.9 2 2 2h38c1.1 0 2-.9 2-2s-.9-2-2-2zM32 11c-7.2 0-13 5.8-13 13s5.8 13 13 13 13-5.8 13-13-5.8-13-13-13zm0 22c-5 0-9-4-9-9s4-9 9-9 9 4 9 9-4 9-9 9z",
      fill: color
    })
  );
};

exports.default = CameraAlt;