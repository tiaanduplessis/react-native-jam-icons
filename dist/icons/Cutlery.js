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

var Cutlery = function Cutlery(_ref) {
  var color = _ref.color,
      props = _objectWithoutProperties(_ref, ["color"]);

  return _react2.default.createElement(
    _reactNativeSvg2.default,
    _extends({ viewBox: "0 0 36 64" }, props),
    _react2.default.createElement(_reactNativeSvg.Path, {
      d: "M14 0c-1.1 0-2 .9-2 2v14c0 .5-.4 1-1 1s-1-.5-1-1V2c0-1.1-.9-2-2-2S6 .9 6 2v14c0 .6-.4 1-1 1s-1-.4-1-1V2c0-1.1-.9-2-2-2S0 .9 0 2v15c0 3.2 2.1 5.8 5 6.7V61c0 1.7 1.3 3 3 3s3-1.3 3-3V23.7c2.9-.9 5-3.5 5-6.7V2c0-1.1-.9-2-2-2zm19 0c-.7 0-1.4.3-1.9.7C28.3 2.3 26.3 12 26.3 15c0 3.3.5 16.7 3.7 17.1V61c0 1.7 1.3 3 3 3s3-1.3 3-3V3c0-1.7-1.3-3-3-3z",
      fill: color
    })
  );
};

exports.default = Cutlery;