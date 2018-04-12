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

var Tube = function Tube(_ref) {
  var color = _ref.color,
      props = _objectWithoutProperties(_ref, ["color"]);

  return _react2.default.createElement(
    _reactNativeSvg2.default,
    _extends({ viewBox: "0 0 20 63" }, props),
    _react2.default.createElement(_reactNativeSvg.Path, {
      d: "M10 58c1.7 0 3-1.3 3-3V23H7v32c0 1.7 1.3 3 3 3zm8-58H2C.9 0 0 .9 0 2v4c0 1.1.9 2 2 2v47c0 4.4 3.6 8 8 8s8-3.6 8-8V8c1.1 0 2-.9 2-2V2c0-1.1-.9-2-2-2zM3 3h14v2H3V3zm12 52c0 2.8-2.2 5-5 5s-5-2.2-5-5V8h10v47z",
      fill: color
    })
  );
};

exports.default = Tube;