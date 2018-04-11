"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Car = function Car(props) {
  return _react2.default.createElement(
    "svg",
    _extends({ viewBox: "0 0 52 51" }, props),
    _react2.default.createElement("path", {
      d: "M48.7 19L43.3 3.8C42.6 1.7 40.2 0 38 0H14c-2.2 0-4.6 1.7-5.3 3.8L3.3 19c-2 1.7-3.3 4.2-3.3 7v8c0 3.5 2 6.6 5 8.1V48c0 1.7 1.3 3 3 3h5c1.7 0 3-1.3 3-3v-5h20v5c0 1.7 1.3 3 3 3h5c1.7 0 3-1.3 3-3v-5.9c3-1.5 5-4.5 5-8.1v-8c0-2.8-1.3-5.3-3.3-7zM7.2 17l4.3-12.2C11.8 3.9 13.1 3 14 3h24c.9 0 2.2.9 2.5 1.8L44.8 17H7.2zM13 48H8v-5h5v5zm31-5v5h-5v-5h5zm5-9c0 3.3-2.7 6-6 6H9c-3.3 0-6-2.7-6-6v-8c0-3.3 2.7-6 6-6h34c3.3 0 6 2.7 6 6v8zm-38-7c-2.2 0-4 1.8-4 4s1.8 4 4 4 4-1.8 4-4-1.8-4-4-4zm0 6c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2zm30-6c-2.2 0-4 1.8-4 4s1.8 4 4 4 4-1.8 4-4-1.8-4-4-4zm0 6c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2zm-7-6c-.6 0-1 .4-1 1v6c0 .5.4 1 1 1s1-.4 1-1v-6c0-.5-.4-1-1-1zm-8 0c-.6 0-1 .4-1 1v6c0 .5.4 1 1 1s1-.4 1-1v-6c0-.5-.4-1-1-1zm4 0c-.6 0-1 .4-1 1v6c0 .5.4 1 1 1s1-.4 1-1v-6c0-.5-.4-1-1-1zm-12 0c-.6 0-1 .4-1 1v6c0 .5.4 1 1 1s1-.4 1-1v-6c0-.5-.4-1-1-1zm4 0c-.6 0-1 .4-1 1v6c0 .5.4 1 1 1s1-.4 1-1v-6c0-.5-.4-1-1-1zM15 5.3c-.5-.2-1 .1-1.2.7l-2.5 7.6c-.2.5.1 1.1.6 1.3s1.1-.1 1.3-.6l2.5-7.6c.2-.7-.1-1.2-.7-1.4z",
      fill: "#333"
    })
  );
};

exports.default = Car;