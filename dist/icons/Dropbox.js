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

var Dropbox = function Dropbox(_ref) {
  var color = _ref.color,
      props = _objectWithoutProperties(_ref, ["color"]);

  return _react2.default.createElement(
    _reactNativeSvg2.default,
    _extends({ viewBox: "0 0 64 61" }, props),
    _react2.default.createElement(_reactNativeSvg.Path, {
      d: "M32.5 39l-12.3 9.2-7.2-4.1v4.4L32.5 61 52 48.6v-4.4l-6.9 4zm30.9-27.1L44.7 0l-13 10.8 19.4 11.3zm-44.2 32l12.5-9.6-18.4-11.8L0 32.6zm0-43.9L0 12.5l13.3 10 18.4-11.7zM32 33.8L44.8 43 64 32.1 51.6 22z",
      fill: color
    })
  );
};

exports.default = Dropbox;