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

var Previous = function Previous(_ref) {
  var color = _ref.color,
      props = _objectWithoutProperties(_ref, ["color"]);

  return _react2.default.createElement(
    _reactNativeSvg2.default,
    _extends({ viewBox: "0 0 40 52" }, props),
    _react2.default.createElement(_reactNativeSvg.Path, {
      d: "M37.1.7L6 21.2V11c0-1.7-1.3-3-3-3s-3 1.3-3 3v30c0 1.7 1.3 3 3 3s3-1.3 3-3V30.4L37.1 51c1.4.9 2.5.3 2.5-1.3V2c0-1.7-1.2-2.3-2.5-1.3zm-3.5 40.8L9.9 25.8l23.7-15.7v31.4z",
      fill: color
    })
  );
};

exports.default = Previous;