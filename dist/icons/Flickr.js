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

var Flickr = function Flickr(_ref) {
  var color = _ref.color,
      props = _objectWithoutProperties(_ref, ["color"]);

  return _react2.default.createElement(
    _reactNativeSvg2.default,
    _extends({ viewBox: "0 0 64 29" }, props),
    _react2.default.createElement(_reactNativeSvg.Path, {
      d: "M64 14.5c0 8-6.5 14.5-14.5 14.5S35 22.5 35 14.5 41.5 0 49.5 0 64 6.5 64 14.5zM14.5 0C6.5 0 0 6.5 0 14.5S6.5 29 14.5 29 29 22.5 29 14.5 22.5 0 14.5 0z",
      fill: color
    })
  );
};

exports.default = Flickr;