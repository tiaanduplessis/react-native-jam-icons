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

var PaperPlane = function PaperPlane(_ref) {
  var color = _ref.color,
      props = _objectWithoutProperties(_ref, ["color"]);

  return _react2.default.createElement(
    _reactNativeSvg2.default,
    _extends({ viewBox: "0 0 58 58" }, props),
    _react2.default.createElement(_reactNativeSvg.Path, {
      d: "M53.9.8L2.2 18c-2.6.9-2.7 2.5-.1 3.5l24.1 10.1 10.1 24.1c1.1 2.5 2.6 2.5 3.5-.1L57 4c.9-2.7-.5-4.1-3.1-3.2zM8.8 20L49 6.6 27.7 28 8.8 20zm29 29.1l-8-19L51.3 8.6 37.8 49.1z",
      fill: color
    })
  );
};

exports.default = PaperPlane;