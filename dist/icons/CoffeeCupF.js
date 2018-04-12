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

var CoffeeCupF = function CoffeeCupF(props) {
  return _react2.default.createElement(
    _reactNativeSvg2.default,
    _extends({ viewBox: "0 0 64 61" }, props),
    _react2.default.createElement(_reactNativeSvg.Path, {
      d: "M53.5 29H52c0 .8 0 1.6-.1 2.4L52 29H0c0 14.3 6.3 26.5 15.4 32h21.2c4.3-2.6 8-6.8 10.7-12l-.5 1h6.7C59.3 50 64 45.3 64 39.5S59.3 29 53.5 29zm0 17h-4.8v.1c1.7-4.2 2.9-8.9 3.2-14 0 .3 0 .6-.1.9h1.7c3.6 0 6.5 2.9 6.5 6.5S57.1 46 53.5 46zm-5.7 2.2c.2-.4.4-.8.6-1.3-.3.4-.4.9-.6 1.3zm-27-22.8s4.1-1.5 3.4-6.2c-.3-1.9-1.4-4.5-1.5-7.1-.1-1.5-.2-3.4 0-5 .4-3.8 1.5-7.1 1.5-7.1S17.8 3.1 18 9.8c.1 3.3 1.4 6.6 2.8 9.4 2 3.9 0 6.2 0 6.2zm7-2.2s2.6-.9 2.1-3.9c-.2-1.2-.9-2.8-1-4.5-.1-3.3 1-7.7 1-7.7s-4.1 2-3.9 6.3c.1 2.1.9 4.2 1.8 6 1.3 2.3 0 3.8 0 3.8z",
      fill: "#333"
    })
  );
};

exports.default = CoffeeCupF;