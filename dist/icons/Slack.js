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

var Slack = function Slack(_ref) {
  var color = _ref.color,
      props = _objectWithoutProperties(_ref, ["color"]);

  return _react2.default.createElement(
    _reactNativeSvg2.default,
    _extends({ viewBox: "0 0 64 64" }, props),
    _react2.default.createElement(_reactNativeSvg.Path, {
      d: "M63.5 33.3c-1.3-2.8-4.6-4.1-7.4-2.8l-2.7 1.2-6.9-15.5 2.7-1.2c2.8-1.3 4.1-4.6 2.8-7.4-1.3-2.8-4.6-4.1-7.4-2.8L41.9 6l-1.2-2.7C39.4.5 36.1-.8 33.3.5c-2.8 1.3-4.1 4.6-2.8 7.4l1.2 2.7-15.5 6.9-1.2-2.7c-1.3-2.8-4.6-4.1-7.4-2.8-2.8 1.3-4.1 4.6-2.8 7.4L6 22.1l-2.7 1.2C.5 24.6-.8 27.9.5 30.7c1.3 2.8 4.6 4.1 7.4 2.8l2.7-1.2 6.9 15.5-2.7 1.2c-2.8 1.3-4.1 4.6-2.8 7.4 1.3 2.8 4.6 4.1 7.4 2.8l2.7-1.2 1.2 2.7c1.3 2.8 4.6 4.1 7.4 2.8 2.8-1.3 4.1-4.6 2.8-7.4l-1.2-2.7 15.5-6.9 1.2 2.7c1.3 2.8 4.6 4.1 7.4 2.8 2.8-1.3 4.1-4.6 2.8-7.4L58 41.9l2.7-1.2c2.8-1.2 4.1-4.6 2.8-7.4zm-35.8 9.9l-6.9-15.5 15.4-6.9 6.9 15.4-15.4 7z",
      fill: color
    })
  );
};

exports.default = Slack;