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

var TumblrCircle = function TumblrCircle(_ref) {
  var color = _ref.color,
      props = _objectWithoutProperties(_ref, ["color"]);

  return _react2.default.createElement(
    _reactNativeSvg2.default,
    _extends({ viewBox: "0 0 64 64" }, props),
    _react2.default.createElement(_reactNativeSvg.Path, { d: "M43 46l.1.1s0-.1-.1-.1z", fill: color }),
    _react2.default.createElement(_reactNativeSvg.Path, {
      d: "M32 0C14.3 0 0 14.3 0 32s14.3 32 32 32 32-14.3 32-32S49.7 0 32 0zm5 56c-10.4 0-12.5-8-13-10V30h-6v-8c5.5-2.7 9.6-7.8 11-14h6v14h9v8h-9v14c.3 2.2 1.5 3.8 4 4 2.6-.2 4-1.4 4.1-1.9L43 46c.1 0 .1.1.1.1L46 52s-2.6 4-9 4z",
      fill: color
    })
  );
};

exports.default = TumblrCircle;