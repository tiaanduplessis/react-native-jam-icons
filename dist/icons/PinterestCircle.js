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

var PinterestCircle = function PinterestCircle(_ref) {
  var color = _ref.color,
      props = _objectWithoutProperties(_ref, ["color"]);

  return _react2.default.createElement(
    _reactNativeSvg2.default,
    _extends({ viewBox: "0 0 64 64" }, props),
    _react2.default.createElement(_reactNativeSvg.Path, {
      d: "M32 0C14.3 0 0 14.3 0 32s14.3 32 32 32 32-14.3 32-32S49.7 0 32 0zm3.6 42.8c-2.9-.2-4.1-1.7-6.4-3.1-1.2 6.6-2.8 13-7.3 16.3-1.4-10 2-17.5 3.6-25.5-2.7-4.6.3-13.9 6.1-11.6 7.1 2.8-6.1 17.2 2.7 19 9.2 1.9 13-16.2 7.3-22.1-8.3-8.5-24.1-.2-22.2 12 .5 3 3.5 3.9 1.2 8-5.3-1.2-6.9-5.4-6.7-11 .3-9.2 8.2-15.7 16.1-16.6 10-1.1 19.4 3.7 20.7 13.2 1.5 10.7-4.4 22.2-15.1 21.4z",
      fill: color
    })
  );
};

exports.default = PinterestCircle;