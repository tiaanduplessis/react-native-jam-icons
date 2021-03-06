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

var Strikethrough = function Strikethrough(_ref) {
  var color = _ref.color,
      props = _objectWithoutProperties(_ref, ["color"]);

  return _react2.default.createElement(
    _reactNativeSvg2.default,
    _extends({ viewBox: "0 0 64 64" }, props),
    _react2.default.createElement(_reactNativeSvg.Path, {
      d: "M46.6 37H32.8c.3.2.6.3.8.5 2.1 1.2 3.9 2.6 5.3 4.2s2.1 3.5 2.1 5.8c0 1.7-.3 3.3-1 4.7-.7 1.4-1.6 2.5-2.8 3.5s-2.6 1.7-4.2 2.2-3.4.7-5.2.7c-2.2 0-3.9-.2-5-.7-1.1-.5-2-1.1-2.7-1.8l-3.6-12.8h-2.3c-.2 1-.5 2.2-.7 3.6-.2 1.4-.4 2.8-.7 4.3s-.4 2.9-.5 4.3c-.1 1.4-.1 2.5-.2 3.5 1.2 1 3.3 1.9 6.2 2.8 2.9.9 6.2 1.3 9.8 1.3 3.3 0 6.3-.4 8.9-1.2 2.6-.8 4.8-2 6.6-3.5 1.8-1.5 3.2-3.3 4.1-5.5 1-2.1 1.4-4.5 1.4-7.1 0-3.2-.7-5.9-2.1-8-.1-.3-.3-.6-.4-.8zM16.8 27h15.9c-1.7-.9-3.3-1.8-4.8-2.7-2.1-1.3-3.9-2.7-5.4-4.3-1.5-1.6-2.1-3.6-2.1-6 0-3 .9-5.3 2.7-6.9 1.8-1.7 4.2-2.5 7.1-2.5 1.8 0 3.5.1 5.1.3 1.6.2 2.9.6 4 1l3.5 11.9H45c.2-1 .5-2.1.7-3.4.2-1.3.4-2.7.7-4 .3-1.3.4-2.7.5-4 .1-1.3.2-2.5.2-3.4-1.7-.8-4-1.5-6.9-2C37.3.4 34 .2 30.5.2c-2.7 0-5.2.4-7.4 1.1-2.2.7-4.1 1.8-5.7 3.1-1.6 1.3-2.8 3-3.7 4.9-.9 1.9-1.3 4.1-1.3 6.5 0 3.4.7 6.2 2.1 8.4.7.9 1.5 1.9 2.3 2.8zM61 29H3c-1.7 0-3 1.3-3 3s1.3 3 3 3h58c1.7 0 3-1.3 3-3s-1.3-3-3-3z",
      fill: color
    })
  );
};

exports.default = Strikethrough;