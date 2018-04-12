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

var Calendar = function Calendar(_ref) {
  var color = _ref.color,
      props = _objectWithoutProperties(_ref, ["color"]);

  return _react2.default.createElement(
    _reactNativeSvg2.default,
    _extends({ viewBox: "0 0 64 52" }, props),
    _react2.default.createElement(_reactNativeSvg.Path, {
      className: "st0",
      d: "M60 8h-7V2c0-1.1-.9-2-2-2s-2 .9-2 2v6h-9V2c0-1.1-.9-2-2-2s-2 .9-2 2v6h-9V2c0-1.1-.9-2-2-2s-2 .9-2 2v6h-9V2c0-1.1-.9-2-2-2s-2 .9-2 2v6H4c-2.2 0-4 1.8-4 4v36c0 2.2 1.8 4 4 4h56c2.2 0 4-1.8 4-4V12c0-2.2-1.8-4-4-4zm0 40H4V12h6c0 1.1.9 2 2 2s2-.9 2-2h9c0 1.1.9 2 2 2s2-.9 2-2h9c0 1.1.9 2 2 2s2-.9 2-2h9c0 1.1.9 2 2 2s2-.9 2-2h7v36z"
    }),
    _react2.default.createElement(Circle, { className: "st0", cx: 26, cy: 21, r: 2 }),
    _react2.default.createElement(Circle, { className: "st0", cx: 14, cy: 21, r: 2 }),
    _react2.default.createElement(Circle, { className: "st0", cx: 26, cy: 31, r: 2 }),
    _react2.default.createElement(Circle, { className: "st0", cx: 26, cy: 41, r: 2 }),
    _react2.default.createElement(Circle, { className: "st0", cx: 14, cy: 31, r: 2 }),
    _react2.default.createElement(Circle, { className: "st0", cx: 14, cy: 41, r: 2 }),
    _react2.default.createElement(Circle, { className: "st0", cx: 50, cy: 31, r: 2 }),
    _react2.default.createElement(Circle, { className: "st0", cx: 50, cy: 41, r: 2 }),
    _react2.default.createElement(Circle, { className: "st0", cx: 38, cy: 41, r: 2 }),
    _react2.default.createElement(Circle, { className: "st0", cx: 50, cy: 21, r: 2 }),
    _react2.default.createElement(Circle, { className: "st0", cx: 38, cy: 31, r: 2 }),
    _react2.default.createElement(Circle, { className: "st0", cx: 38, cy: 21, r: 2 })
  );
};

exports.default = Calendar;