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

var SplitV = function SplitV(props) {
  return _react2.default.createElement(
    _reactNativeSvg2.default,
    _extends({ viewBox: "0 0 58 64" }, props),
    _react2.default.createElement(_reactNativeSvg.Path, {
      d: "M29 0c-1.7 0-3 1.3-3 3v58c0 1.7 1.3 3 3 3s3-1.3 3-3V3c0-1.7-1.3-3-3-3zm27.3 29.6l-8.5-8.5c-1.2-1.2-3.1-1.2-4.2 0-1.2 1.2-1.2 3.1 0 4.2l6.4 6.4-6.4 6.4c-1.2 1.2-1.2 3.1 0 4.2 1.2 1.2 3.1 1.2 4.2 0l8.5-8.5c.6-.6.9-1.3.9-2.1 0-.7-.3-1.5-.9-2.1zm-41.9-8.5c-1.2-1.2-3.1-1.2-4.2 0l-8.5 8.5c-.6.6-.9 1.3-.9 2.1s.3 1.5.9 2.1l8.5 8.5c1.2 1.2 3.1 1.2 4.2 0 1.2-1.2 1.2-3.1 0-4.2L8 31.7l6.4-6.4c1.2-1.1 1.2-3 0-4.2z",
      fill: "#333"
    })
  );
};

exports.default = SplitV;