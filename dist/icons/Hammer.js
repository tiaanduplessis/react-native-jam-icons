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

var Hammer = function Hammer(_ref) {
  var color = _ref.color,
      props = _objectWithoutProperties(_ref, ["color"]);

  return _react2.default.createElement(
    _reactNativeSvg2.default,
    _extends({ viewBox: "0 0 64 64" }, props),
    _react2.default.createElement(_reactNativeSvg.Path, {
      d: "M62.9 22.3l-6.5-6.5c.9-1.5.7-3.5-.6-4.8L53 8.1c-1.3-1.3-3.3-1.5-4.8-.6L41.7 1c-1.2-1.2-3.1-1.2-4.2 0L29 9.5c-1.2 1.2-1.2 3.1 0 4.2l6.4 6.4L2.1 53.4c-1.6 1.6-1.6 4.1 0 5.7L5 61.9c1.6 1.6 4.1 1.6 5.7 0l33.2-33.2 6.4 6.4c1.2 1.2 3.1 1.2 4.2 0l8.5-8.5c1.1-1.3 1.1-3.2-.1-4.3zM7.8 59L5 56.2l14.8-14.8 2.8 2.8L7.8 59zm17.7-17.6l-2.8-2.8L38.3 23l2.8 2.8-15.6 15.6z",
      fill: color
    })
  );
};

exports.default = Hammer;