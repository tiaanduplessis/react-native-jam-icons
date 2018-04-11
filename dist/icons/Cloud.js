"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Cloud = function Cloud(props) {
  return _react2.default.createElement(
    "svg",
    _extends({ viewBox: "0 0 64 38" }, props),
    _react2.default.createElement("path", {
      d: "M50 10c-1 0-2.1.1-3 .3C44.7 4.3 38.8 0 32 0c-7 0-13 4.5-15.1 10.8-.5 1.7-.8 2.9-.8 3.6-.6-.2-1.8-.4-4.1-.4-6.6 0-12 5.4-12 12s5.4 12 12 12h38c7.7 0 14-6.3 14-14s-6.3-14-14-14zm0 24H12c-4.4 0-8-3.6-8-8s3.6-8 8-8c.9 0 1.8.2 2.7.5l4.9 1.8.4-5.3c.5-6.2 5.7-11 12-11 5 0 9.5 3.1 11.2 7.7l1.2 3.2 3.4-.7c.7-.2 1.4-.2 2.2-.2 5.5 0 10 4.5 10 10s-4.5 10-10 10z",
      fill: "#343434"
    })
  );
};

exports.default = Cloud;