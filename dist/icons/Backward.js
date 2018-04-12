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

var Backward = function Backward(_ref) {
  var color = _ref.color,
      props = _objectWithoutProperties(_ref, ["color"]);

  return _react2.default.createElement(
    _reactNativeSvg2.default,
    _extends({ viewBox: "0 0 64 53" }, props),
    _react2.default.createElement(_reactNativeSvg.Path, {
      d: "M61.4 1.2L45.9 11.3l-3.3 2.2-2.7 1.8V2.5c0-1.7-1.1-2.3-2.5-1.4L1.1 24.9c-1.4.9-1.4 2.4 0 3.3L37.4 52c1.4.9 2.5.3 2.5-1.4V38l2.7 1.8 3.3 2.2 15.5 10c1.4.9 2.5.3 2.5-1.4V2.5c0-1.6-1.1-2.3-2.5-1.3zm-3.5 41.3l-24-15.7v15.7l-24.4-16 24.4-16v15.7l24-15.7v32z",
      fill: color
    })
  );
};

exports.default = Backward;