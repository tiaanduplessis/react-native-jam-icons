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

var AngleLeft = function AngleLeft(_ref) {
  var color = _ref.color,
      props = _objectWithoutProperties(_ref, ["color"]);

  return _react2.default.createElement(
    _reactNativeSvg2.default,
    _extends({ viewBox: "0 0 34 62" }, props),
    _react2.default.createElement(_reactNativeSvg.Path, {
      d: "M7.5 31L32.9 5.5c1.2-1.2 1.2-3.1 0-4.2s-3.1-1.2-4.2 0L1.1 28.9c-1.2 1.2-1.2 3.1 0 4.2l27.6 27.6c1.2 1.2 3.1 1.2 4.2 0s1.2-3.1 0-4.2L7.5 31z",
      fill: color
    })
  );
};

exports.default = AngleLeft;