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

var Envelope = function Envelope(_ref) {
  var color = _ref.color,
      props = _objectWithoutProperties(_ref, ["color"]);

  return _react2.default.createElement(
    _reactNativeSvg2.default,
    _extends({ viewBox: "0 0 64 42" }, props),
    _react2.default.createElement(_reactNativeSvg.Path, {
      d: "M60 0H4C1.8 0 0 1.8 0 4v34c0 2.2 1.8 4 4 4h56c2.2 0 4-1.8 4-4V4c0-2.2-1.8-4-4-4zm-3.5 4L32 24 7.5 4h49zM4 35.5V6.7l18.1 15L4 35.5zM6.6 38l18.3-13.9 6.3 5.3c.4.4 1.1.4 1.5 0l6.3-5.3L57.4 38H6.6zM60 35.5L41.9 21.7 60 6.7v28.8z",
      fill: color
    })
  );
};

exports.default = Envelope;