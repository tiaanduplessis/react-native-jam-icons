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

var Paragraph = function Paragraph(_ref) {
  var color = _ref.color,
      props = _objectWithoutProperties(_ref, ["color"]);

  return _react2.default.createElement(
    _reactNativeSvg2.default,
    _extends({ viewBox: "0 0 47 64" }, props),
    _react2.default.createElement(_reactNativeSvg.Path, {
      d: "M46 0H18C8.1 0 0 8.1 0 18s8.1 18 18 18h5v27c0 .6.4 1 1 1h4c.5 0 1-.5 1-1V6h7v57c0 .6.4 1 1 1h4c.5 0 1-.5 1-1V6h4c.6 0 1-.4 1-1V1c0-.5-.4-1-1-1z",
      fill: color
    })
  );
};

exports.default = Paragraph;