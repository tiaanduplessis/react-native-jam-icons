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

var MessageWritingAlt = function MessageWritingAlt(props) {
  return _react2.default.createElement(
    _reactNativeSvg2.default,
    _extends({ viewBox: "0 0 64 63" }, props),
    _react2.default.createElement(_reactNativeSvg.Path, {
      className: "st0",
      d: "M53 0H11C4.9 0 0 4.9 0 11v26c0 6.1 4.9 11 11 11h21.3l19.3 14.3c1.3 1 2.2.4 2-1.2L52 48l4-.4c4.6-1.3 8-5.5 8-10.6V11c0-6.1-4.9-11-11-11zm7 37c0 3.9-3.1 7-7 7h-5.5l1.4 11.3L33.6 44H11c-3.9 0-7-3.1-7-7V11c0-3.9 3.1-7 7-7h42c3.9 0 7 3.1 7 7v26z"
    }),
    _react2.default.createElement(_reactNativeSvg.Circle, { className: "st0", cx: 20, cy: 25, r: 4 }),
    _react2.default.createElement(_reactNativeSvg.Circle, { className: "st0", cx: 32, cy: 25, r: 4 }),
    _react2.default.createElement(_reactNativeSvg.Circle, { className: "st0", cx: 44, cy: 25, r: 4 })
  );
};

exports.default = MessageWritingAlt;