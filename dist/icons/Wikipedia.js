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

var Wikipedia = function Wikipedia(props) {
  return _react2.default.createElement(
    _reactNativeSvg2.default,
    _extends({ viewBox: "0 0 64 45" }, props),
    _react2.default.createElement(_reactNativeSvg.Path, {
      d: "M63.9 0H50.7l-1 .2v1.3c0 .1.5.3.6.4.1.1.4.2.6.2l1.2-.1c1.4.1 1.8.4 2.3.9.5.5.6 1.4.2 2.6L42.9 35.8l-.4-.1L35.1 19l.2-.4 6.1-12.4c.7-1.3 1.4-2.5 1.7-3 .6-1 .9-1.2 2.7-1.3.4 0 .5-.2.5-.5V.2l-.2-.2H35.5v1.4c0 .1-.1.3 0 .4.1.1.1.2.3.2h.6c1.4.1 2 .5 2.2.7.3.4.5.9-.3 2.7l-4.7 10.2-4.2-9.5c-1.4-3-1.7-3.9.4-4.1l.6-.1c.4 0 .3-.2.3-.5V.2l-.2-.2H19.3l-.1.1v1.3c0 .3.3.4.9.5 1.9.3 1.9.6 3.8 4.8.3.6 1.1 2.5 1.1 2.5l4.4 9.5s.5 1.2 1.3 3.1l-6.4 14-.3-.2S14 12.7 11.2 5c-.3-.8-.4-1.4-.4-1.7 0-.8.7-1.2 1.9-1.3l2-.1c.4 0 1.1-.2 1.1-.5V.2l-.6-.1H.5L0 .2v1.3c0 .2.3.4.9.5 1.5.1 2.5.3 3 .8s1 1.6 1.7 3.3c3.6 9.5 11.3 26.4 15.1 36.1 1.1 2.6 2.4 3 4.1-.1 1.7-3.4 5.1-11 7.6-16.7 2.3 5.6 5.5 13.2 7 16.6 1.2 2.7 2.6 3 4 .1C47 33.2 57.8 6.2 57.8 6.2c.5-1.3 1.1-2.3 1.9-3.1.9-.7 2.1-1.2 3.8-1.2.4 0 .5-.2.5-.5V.2l-.1-.2z",
      fill: "#343434"
    })
  );
};

exports.default = Wikipedia;