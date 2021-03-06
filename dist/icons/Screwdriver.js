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

var Screwdriver = function Screwdriver(_ref) {
  var color = _ref.color,
      props = _objectWithoutProperties(_ref, ["color"]);

  return _react2.default.createElement(
    _reactNativeSvg2.default,
    _extends({ viewBox: "0 0 60 60" }, props),
    _react2.default.createElement(_reactNativeSvg.Path, {
      d: "M57.5 3.7L56 2.3c-2.3-2.3-6.1-2.3-8.5 0L26.3 23.5l2.8 2.8L1.6 53.9C.4 55.1.4 57 1.6 58.1c1.2 1.2 3.1 1.2 4.2 0l27.6-27.6 2.8 2.8 21.2-21.2c2.4-2.2 2.4-6 .1-8.4zM4.4 56.8c-.4.4-1 .4-1.4 0-.4-.4-.4-1 0-1.4l27.6-27.6 1.4 1.4L4.4 56.8zm50.9-46.7L36.2 29.2l-5.7-5.7L49.7 4.4c1.2-1.2 3.1-1.2 4.2 0l1.4 1.4c1.2 1.2 1.2 3.1 0 4.3zm-4.2-2.8L35.5 22.8c-.4.4-.4 1 0 1.4.4.4 1 .4 1.4 0L52.5 8.7c.4-.4.4-1 0-1.4-.4-.4-1-.4-1.4 0z",
      fill: color
    })
  );
};

exports.default = Screwdriver;