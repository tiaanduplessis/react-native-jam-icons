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

var ArrowsFullscreen = function ArrowsFullscreen(_ref) {
  var color = _ref.color,
      props = _objectWithoutProperties(_ref, ["color"]);

  return _react2.default.createElement(
    _reactNativeSvg2.default,
    _extends({ viewBox: "0 0 64 64" }, props),
    _react2.default.createElement(_reactNativeSvg.Path, {
      d: "M61 24c1.7 0 3-1.3 3-3V3c0-1.7-1.3-3-3-3H43c-1.7 0-3 1.3-3 3s1.3 3 3 3h10.8L32 27.8 10.2 6H21c1.7 0 3-1.3 3-3s-1.3-3-3-3H3C1.3 0 0 1.3 0 3v18c0 1.7 1.3 3 3 3s3-1.3 3-3V10.2L27.8 32 6 53.8V43c0-1.7-1.3-3-3-3s-3 1.3-3 3v18c0 1.7 1.3 3 3 3h18c1.7 0 3-1.3 3-3s-1.3-3-3-3H10.2L32 36.2 53.8 58H43c-1.7 0-3 1.3-3 3s1.3 3 3 3h18c1.7 0 3-1.3 3-3V43c0-1.7-1.3-3-3-3s-3 1.3-3 3v10.8L36.2 32 58 10.2V21c0 1.7 1.3 3 3 3z",
      fill: color
    })
  );
};

exports.default = ArrowsFullscreen;