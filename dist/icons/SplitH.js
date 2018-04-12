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

var SplitH = function SplitH(_ref) {
  var color = _ref.color,
      props = _objectWithoutProperties(_ref, ["color"]);

  return _react2.default.createElement(
    _reactNativeSvg2.default,
    _extends({ viewBox: "0 0 64 58" }, props),
    _react2.default.createElement(_reactNativeSvg.Path, {
      d: "M61 26H3c-1.7 0-3 1.3-3 3s1.3 3 3 3h58c1.7 0 3-1.3 3-3s-1.3-3-3-3zM38.6 43.6L32.3 50l-6.4-6.4c-1.2-1.2-3.1-1.2-4.2 0-1.2 1.2-1.2 3.1 0 4.2l8.5 8.5c.6.6 1.3.9 2.1.9s1.5-.3 2.1-.9l8.5-8.5c1.2-1.2 1.2-3.1 0-4.2-1.2-1.2-3.1-1.2-4.3 0zM25.9 14.4L32.3 8l6.4 6.4c1.2 1.2 3.1 1.2 4.2 0 1.2-1.2 1.2-3.1 0-4.2l-8.5-8.5c-.6-.6-1.3-.9-2.1-.9s-1.5.3-2.1.9l-8.5 8.5c-1.2 1.2-1.2 3.1 0 4.2 1.1 1.2 3 1.2 4.2 0z",
      fill: color
    })
  );
};

exports.default = SplitH;