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

var Universe = function Universe(_ref) {
  var color = _ref.color,
      props = _objectWithoutProperties(_ref, ["color"]);

  return _react2.default.createElement(
    _reactNativeSvg2.default,
    _extends({ viewBox: "0 0 64 55" }, props),
    _react2.default.createElement(_reactNativeSvg.Path, {
      className: "st0",
      d: "M63.5 27.5c0-3.8-5.4-7.7-13.1-10.2C52.4 9.5 52 2.8 48.7.8c-3.5-2.2-10.1.8-16.7 6.7C25.4 1.7 18.8-1.4 15.3.8c-1.3.8-2.1 2.4-2.6 4.4-1.5.5-2.7 2-2.7 3.8 0 1.8 1.2 3.2 2.7 3.8.2 1.5.5 3 .9 4.6C6 19.9.5 23.7.5 27.5S6 35.1 13.7 37.6c-2 7.9-1.6 14.6 1.6 16.6 3.4 2.1 10.1-.9 16.7-6.8 6.6 5.9 13.3 8.9 16.7 6.8 1.5-.9 2.4-2.9 2.7-5.5 1.5-.6 2.6-2 2.6-3.7 0-1.9-1.3-3.4-3-3.9-.2-1.1-.4-2.3-.7-3.5 7.7-2.4 13.2-6.3 13.2-10.1zm-10.9-6.2c5.1 2.1 7.9 4.6 7.9 6.2 0 1.5-2.8 4.1-7.9 6.2-1 .4-2 .8-3.1 1.1-.7-2.4-1.7-4.8-2.8-7.2 1.1-2.5 2.1-4.9 2.8-7.3 1.1.3 2.1.6 3.1 1zM32 43.3c-.9-.9-1.8-1.9-2.7-2.9l2.9.1c.9 0 1.7 0 2.6-.1-1 1-1.9 2-2.8 2.9zm.2-5.8c-1.8 0-3.7-.1-5.5-.3-1.1-1.5-2.2-3-3.2-4.6-1-1.6-2-3.4-2.8-5.1.9-1.9 1.9-3.7 3-5.5.9-1.5 1.9-2.9 3-4.3 1.9-.2 3.7-.3 5.6-.3 1.7 0 3.5.1 5.2.2 1.1 1.4 2.1 2.8 3 4.3 1.1 1.7 2.1 3.6 3 5.5-.9 1.8-1.8 3.5-2.8 5.1-1 1.6-2.1 3.1-3.2 4.6-1.9.3-3.6.4-5.3.4zm-9.7-.8c-1.7-.3-3.4-.7-5.1-1.1.5-1.5 1-3 1.6-4.5.6 1.1 1.2 2.2 1.9 3.2.5.8 1 1.6 1.6 2.4zM19 24c-.6-1.5-1.2-3.1-1.7-4.6 1.6-.4 3.4-.8 5.1-1.1-.5.7-1 1.4-1.4 2.1L19 24zm15.8-9.4l-2.6-.1c-1 0-2 0-2.9.1.9-1 1.8-2 2.8-3 .8.9 1.8 1.9 2.7 3zm6.7 3.7c1.8.3 3.5.7 5.2 1.1-.5 1.5-1 3.1-1.7 4.6-.6-1.2-1.3-2.4-2-3.5-.5-.8-1-1.5-1.5-2.2zm1.6 16c.7-1 1.3-2.1 1.9-3.2.6 1.5 1.2 3.1 1.6 4.6-1.6.4-3.4.8-5.1 1.1.5-.9 1.1-1.7 1.6-2.5zm4-31c1.3.8 1.9 4.5 1 10-.2 1-.4 2.1-.7 3.1-2.7-.7-5.5-1.2-8.5-1.6-1.5-1.9-3.1-3.7-4.8-5.3 1.2-1 2.3-2 3.5-2.8 4.6-3.1 8.2-4.2 9.5-3.4zm-31.2 10l-.1-.7c1.3-.7 2.3-2 2.3-3.6s-.9-2.9-2.2-3.6c.3-1.1.7-1.8 1.1-2.1 1.3-.8 4.9.3 9.4 3.5 1.2.8 2.3 1.8 3.5 2.8-1.7 1.6-3.3 3.4-4.8 5.4-2.9.3-5.8.9-8.4 1.6-.4-1.2-.7-2.3-.8-3.3zm-4.3 20.4c-5.2-2.1-8.1-4.7-8.1-6.2s2.9-4 8-6.2c.9-.4 1.9-.7 2.9-1.1.7 2.4 1.7 4.8 2.8 7.3-1.1 2.4-2 4.8-2.8 7.2l-2.8-1zm5.3 18c-1.3-.8-1.9-4.6-1-10.1.2-1 .4-2.1.7-3.1 2.7.7 5.5 1.2 8.4 1.6 1.5 1.9 3.1 3.7 4.8 5.3-1.1 1-2.3 1.9-3.4 2.7-4.5 3.3-8.2 4.4-9.5 3.6zM48 41.5c-1.2.7-2 2-2 3.5 0 1.6 1 3 2.4 3.6-.2 1.6-.7 2.6-1.3 3-1.3.8-5-.3-9.5-3.6-1.1-.8-2.3-1.7-3.4-2.7 1.6-1.6 3.2-3.4 4.7-5.3 2.9-.3 5.8-.9 8.5-1.6.3 1.2.5 2.2.6 3.1z"
    }),
    _react2.default.createElement(Circle, { className: "st0", cx: 32, cy: 28, r: 5 })
  );
};

exports.default = Universe;