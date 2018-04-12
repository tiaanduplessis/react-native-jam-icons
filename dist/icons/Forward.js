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

var Forward = function Forward(_ref) {
  var color = _ref.color,
      props = _objectWithoutProperties(_ref, ["color"]);

  return _react2.default.createElement(
    _reactNativeSvg2.default,
    _extends({ viewBox: "0 0 64 52" }, props),
    _react2.default.createElement(_reactNativeSvg.Path, {
      d: "M62.8 24.4L26.5.6C25.1-.3 24 .3 24 2v12.6l-2.7-1.8-3.3-2L2.5.6C1.1-.3 0 .3 0 2v48.1c0 1.7 1.1 2.3 2.5 1.4L18 41.3l3.3-2.2 2.7-1.8v12.6c0 1.7 1.1 2.3 2.5 1.4l36.3-23.8c1.4-.7 1.4-2.2 0-3.1zM30 42V26.3L6 42V10.1l24 15.7V10.1l24.4 16L30 42z",
      fill: color
    })
  );
};

exports.default = Forward;