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

var HeartF = function HeartF(_ref) {
  var color = _ref.color,
      props = _objectWithoutProperties(_ref, ["color"]);

  return _react2.default.createElement(
    _reactNativeSvg2.default,
    _extends({ viewBox: "0 0 63 58" }, props),
    _react2.default.createElement(_reactNativeSvg.Path, {
      d: "M56.6 6.3c-7-7-17.9-7.5-24.3-1.1l-1.1 1.1-.2-.2C24.1-.8 12.8-.8 5.7 6.3c-7 7-7.1 18.3-.2 25.3l25.7 25.7 26.6-26.6c6.4-6.5 5.9-17.4-1.2-24.4z",
      fill: color
    })
  );
};

exports.default = HeartF;