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

var Snowboard = function Snowboard(_ref) {
  var color = _ref.color,
      props = _objectWithoutProperties(_ref, ["color"]);

  return _react2.default.createElement(
    _reactNativeSvg2.default,
    _extends({ viewBox: "0 0 66 66" }, props),
    _react2.default.createElement(_reactNativeSvg.Path, {
      d: "M61.2 4.7c-5.1-5.1-13.3-5.1-18.4 0-.5.5-.9 1-1.3 1.5L25.1 25.3 6.2 41.6c-.5.4-1 .8-1.5 1.3-5.1 5.1-5.1 13.3 0 18.4 5.1 5.1 13.3 5.1 18.4 0 .5-.5.9-.9 1.3-1.5l16.4-18.9 19.1-16.6c.5-.4 1-.8 1.4-1.2 5-5.1 5-13.3-.1-18.4zm-2.1 16.2L38.6 38.7 20.9 59.1C17 63 10.7 63 6.8 59.1c-3.9-3.9-3.9-10.2 0-14.1l20.5-17.6L45 6.8c3.9-3.9 10.2-3.9 14.1 0 3.9 3.9 3.9 10.2 0 14.1zM30.4 32.5h-2c-1.1 0-2 .9-2 2v5c0 1.1.9 2 2 2h2c1.1 0 2-.9 2-2v-5c0-1.1-.9-2-2-2zm-2 7v-1.8h2v1.8h-2zm2-3.9h-2v-1.2h2v1.2zm7.8-10.9h-2c-1.1 0-2 .9-2 2v5c0 1.1.9 2 2 2h2c1.1 0 2-.9 2-2v-5c0-1.1-.9-2-2-2zm0 2v1.2h-2v-1.2h2zm-2 5v-1.8h2v1.8h-2z",
      fill: color
    })
  );
};

exports.default = Snowboard;