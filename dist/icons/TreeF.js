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

var TreeF = function TreeF(_ref) {
  var color = _ref.color,
      props = _objectWithoutProperties(_ref, ["color"]);

  return _react2.default.createElement(
    _reactNativeSvg2.default,
    _extends({ viewBox: "0 0 48 64" }, props),
    _react2.default.createElement(_reactNativeSvg.Path, {
      d: "M47.4 52.1L36 35.3h6.6c.5 0 .7-.4.4-.8L32 17.7h4.1c.5 0 .7-.4.4-.8L24.6.9c-.3-.5-.9-.4-1.2 0l-11.9 16c-.3.5-.2.8.4.8H16L4.9 34.5c-.3.5-.1.8.4.8H12L.6 52.1c-.3.5-.2.9.4.9h19.7v10c0 .5.4 1 1 1h4.6c.5 0 1-.4 1-1V53H47c.6 0 .8-.4.4-.9z",
      fill: color
    })
  );
};

exports.default = TreeF;