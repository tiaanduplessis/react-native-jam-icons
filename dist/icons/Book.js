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

var Book = function Book(_ref) {
  var color = _ref.color,
      props = _objectWithoutProperties(_ref, ["color"]);

  return _react2.default.createElement(
    _reactNativeSvg2.default,
    _extends({ viewBox: "0 0 42 64" }, props),
    _react2.default.createElement(_reactNativeSvg.Path, {
      d: "M35 0H0v56h4v8l5-2 5 2v-8h21c3.9 0 7-3.1 7-7V7c0-3.9-3.1-7-7-7zM4 4h4v48H4V4zm5 54l-2 1v-3h4v3l-2-1zm29-9c0 1.7-1.3 3-3 3H12V4h23c1.7 0 3 1.3 3 3v42zm-7-35H19c-1.1 0-2 .9-2 2v4c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2v-4c0-1.1-.9-2-2-2zm-1 5H20v-2h10v2z",
      fill: color
    })
  );
};

exports.default = Book;