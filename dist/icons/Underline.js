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

var Underline = function Underline(_ref) {
  var color = _ref.color,
      props = _objectWithoutProperties(_ref, ["color"]);

  return _react2.default.createElement(
    _reactNativeSvg2.default,
    _extends({ viewBox: "0 0 47 64" }, props),
    _react2.default.createElement(_reactNativeSvg.Path, {
      d: "M31.7.3v2.1c.8.4 1.6.8 2.6 1.2.9.4 2 .8 3.1 1.2v28.3c0 4.7-1 8.1-3.1 10.2-2.1 2.1-5 3.1-8.7 3.1-1.9 0-3.7-.2-5.2-.7-1.5-.4-2.8-1.2-3.9-2.2-1-1-1.8-2.4-2.4-4-.5-1.7-.8-3.8-.8-6.3v-29c.9-.2 1.8-.5 2.7-.8.9-.3 1.8-.6 2.7-1V.3H.7v2.1c1.9.9 3.9 1.5 5.8 1.8v30.2c0 5.5 1.6 9.6 4.7 12.3 3.1 2.7 7.6 4 13.6 4 2.5 0 4.8-.3 6.9-1 2.1-.7 3.8-1.7 5.3-3.2 1.4-1.4 2.6-3.2 3.4-5.4.8-2.2 1.2-4.8 1.2-7.8V4.8c.9-.2 1.9-.6 2.8-1 .9-.4 1.8-.9 2.7-1.4V.3H31.7zM38.3 58H9.4c-1.7 0-3 1.3-3 3s1.3 3 3 3h28.9c1.7 0 3-1.3 3-3s-1.3-3-3-3z",
      fill: color
    })
  );
};

exports.default = Underline;