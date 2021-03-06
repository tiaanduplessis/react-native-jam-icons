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

var TagF = function TagF(_ref) {
  var color = _ref.color,
      props = _objectWithoutProperties(_ref, ["color"]);

  return _react2.default.createElement(
    _reactNativeSvg2.default,
    _extends({ viewBox: "0 0 64 64" }, props),
    _react2.default.createElement(_reactNativeSvg.Path, {
      d: "M54.2.9l-16 .1c-1.1 0-2.6.7-3.4 1.4L1.4 35.8c-.8.8-.8 2.1 0 2.8l24 24c.8.8 2.1.8 2.8 0l33.4-33.4c.8-.8 1.4-2.3 1.4-3.4l.1-16L54.2.9zm-.6 19.5c-2.8 2.8-7.2 2.8-10 .1-2.7-2.7-2.7-7.2.1-10 2.8-2.8 7.2-2.8 10-.1 2.7 2.8 2.7 7.3-.1 10z",
      fill: color
    })
  );
};

exports.default = TagF;