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

var StackOverflow = function StackOverflow(props) {
  return _react2.default.createElement(
    _reactNativeSvg2.default,
    _extends({ viewBox: "0 0 51 65" }, props),
    _react2.default.createElement(_reactNativeSvg.Path, {
      d: "M9.6 55.7h22.2c1 0 1.8-.8 1.8-1.8v-2.5c0-1-.8-1.8-1.8-1.8H9.6c-1 0-1.8.8-1.8 1.8v2.5c0 1 .8 1.8 1.8 1.8zm30.8-18.3H39c-1 0-1.8.8-1.8 1.8v19c0 .6-.5 1.1-1.1 1.1h-30c-.6 0-1.1-.5-1.1-1.1v-19c0-1-.8-1.8-1.8-1.8H1.8c-1 0-1.8.8-1.8 1.8v21.5c0 3.4 0 3.4.4 3.4H40c2.1 0 2.1 0 2.1-.4V39.2c.1-1-.7-1.8-1.7-1.8zM9.8 46.6l22.2 2h.2c.9 0 1.7-.7 1.8-1.6l.2-2.5c.1-1-.6-1.8-1.6-1.9l-22.1-2c-1-.1-1.9.6-1.9 1.6l-.2 2.5c0 .5.1.9.4 1.3.1.4.5.6 1 .6zm40.5-23L46.5 1.8C46.3.8 45.4.2 44.4.4L42 .8c-1 .2-1.6 1.1-1.5 2.1l3.8 21.8c.1.9.9 1.5 1.8 1.5h.3l2.5-.4c.9-.3 1.6-1.2 1.4-2.2zm-34.4-.1L35 34.8c.3.2.6.2.9.2.6 0 1.2-.3 1.5-.9l1.3-2.1c.2-.4.3-.9.2-1.4-.1-.5-.4-.9-.8-1.1L19 18.2c-.8-.5-2-.2-2.5.6L15.2 21c-.2.4-.3.9-.2 1.4.2.4.5.8.9 1.1zM31.3 6.8c-.5-.8-1.7-1-2.5-.5l-2.1 1.4c-.8.6-1 1.6-.5 2.5l12.4 18.1c.3.5.9.8 1.5.8.4 0 .7-.1 1-.3l2-1.4c.8-.6 1-1.6.5-2.5L31.3 6.8zm-20 29.3L33 42l.5.1c.8 0 1.5-.6 1.7-1.4l.7-2.5c.3-1-.3-2-1.3-2.2l-21.7-5.9c-.9-.3-2 .3-2.2 1.3l-.7 2.5c-.2.9.4 1.9 1.3 2.2z",
      fill: "#343434"
    })
  );
};

exports.default = StackOverflow;