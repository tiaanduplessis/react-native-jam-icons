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

var ForwardF = function ForwardF(_ref) {
  var color = _ref.color,
      props = _objectWithoutProperties(_ref, ["color"]);

  return _react2.default.createElement(
    _reactNativeSvg2.default,
    _extends({ viewBox: "0 0 66 52" }, props),
    _react2.default.createElement(_reactNativeSvg.Path, {
      d: "M64.1 24.5L27.8.7c-1.4-.9-2.5-.3-2.5 1.4v13L3.4.7C2.1-.2.9.4.9 2.1v48.1c0 1.7 1.1 2.3 2.5 1.4l21.9-14.3v13c0 1.7 1.1 2.3 2.5 1.4l36.3-23.8c1.4-1 1.4-2.5 0-3.4z",
      fill: color
    })
  );
};

exports.default = ForwardF;