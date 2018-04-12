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

var Signal = function Signal(_ref) {
  var color = _ref.color,
      props = _objectWithoutProperties(_ref, ["color"]);

  return _react2.default.createElement(
    _reactNativeSvg2.default,
    _extends({ viewBox: "0 0 60 54" }, props),
    _react2.default.createElement(_reactNativeSvg.Path, {
      className: "st0",
      d: "M17 38c-2.2 0-4 1.8-4 4v8c0 2.2 1.8 4 4 4s4-1.8 4-4v-8c0-2.2-1.8-4-4-4z"
    }),
    _react2.default.createElement(Circle, { className: "st0", cx: 4, cy: 50, r: 4 }),
    _react2.default.createElement(_reactNativeSvg.Path, {
      className: "st0",
      d: "M30 30c-2.2 0-4 1.8-4 4v16c0 2.2 1.8 4 4 4s4-1.8 4-4V34c0-2.2-1.8-4-4-4zm13-12c-2.2 0-4 1.8-4 4v28c0 2.2 1.8 4 4 4s4-1.8 4-4V22c0-2.2-1.8-4-4-4zM56 0c-2.2 0-4 1.8-4 4v46c0 2.2 1.8 4 4 4s4-1.8 4-4V4c0-2.2-1.8-4-4-4z"
    })
  );
};

exports.default = Signal;