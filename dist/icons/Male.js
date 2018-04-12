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

var Male = function Male(_ref) {
  var color = _ref.color,
      props = _objectWithoutProperties(_ref, ["color"]);

  return _react2.default.createElement(
    _reactNativeSvg2.default,
    _extends({ viewBox: "0 0 62 62" }, props),
    _react2.default.createElement(_reactNativeSvg.Path, {
      d: "M61.1 1C60.6.5 59.8.1 59 .1H37c-1.6 0-3 1.3-3 3s1.3 3 3 3h14.8l-13 13C34.7 15.9 29.6 14 24 14 10.7 14 0 24.7 0 38s10.7 24 24 24 24-10.7 24-24c0-5.5-1.9-10.6-5-14.7l13-13v14.8c0 1.6 1.3 3 3 3s3-1.3 3-3v-22c0-.8-.4-1.6-.9-2.1zM24 56c-9.9 0-18-8.1-18-18s8.1-18 18-18 18 8.1 18 18-8.1 18-18 18z",
      fill: color
    })
  );
};

exports.default = Male;