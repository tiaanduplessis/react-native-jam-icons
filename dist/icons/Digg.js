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

var Digg = function Digg(_ref) {
  var color = _ref.color,
      props = _objectWithoutProperties(_ref, ["color"]);

  return _react2.default.createElement(
    _reactNativeSvg2.default,
    _extends({ viewBox: "0 0 64 36" }, props),
    _react2.default.createElement(_reactNativeSvg.Path, {
      d: "M19.2 8.4h6.5v19.3h-6.5zm0-8.3h6.5v5.4h-6.5zM9.8 8.3H0v19.2h16.3V0H9.8v8.3zm-.2 13.3H6.3v-7.9h3.3v7.9zm19.2 6.2h9.5v2.4h-9.5V36h16V8.4h-16v19.4zm6.1-13.3h3.2v7.9h-3.2v-7.9zM48 8.4v19.4h9.5v2.4H48V36h16V8.4H48zm9.3 14H54v-7.9h3.3v7.9z",
      fill: color
    })
  );
};

exports.default = Digg;