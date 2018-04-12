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

var Next = function Next(_ref) {
  var color = _ref.color,
      props = _objectWithoutProperties(_ref, ["color"]);

  return _react2.default.createElement(
    _reactNativeSvg2.default,
    _extends({ viewBox: "0 0 40 52" }, props),
    _react2.default.createElement(_reactNativeSvg.Path, {
      d: "M36.8 8.2c-1.7 0-3 1.3-3 3v10.2L2.7.8C1.3-.1.2.5.2 2.2v47.6c0 1.6 1.1 2.3 2.5 1.3l31.1-20.5v10.6c0 1.7 1.3 3 3 3s3-1.3 3-3v-30c0-1.7-1.4-3-3-3zM6.2 41.7V10.3L29.9 26 6.2 41.7z",
      fill: color
    })
  );
};

exports.default = Next;