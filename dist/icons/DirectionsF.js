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

var DirectionsF = function DirectionsF(_ref) {
  var color = _ref.color,
      props = _objectWithoutProperties(_ref, ["color"]);

  return _react2.default.createElement(
    _reactNativeSvg2.default,
    _extends({ viewBox: "0 0 59 64" }, props),
    _react2.default.createElement(_reactNativeSvg.Path, {
      d: "M54 32H29v-5h22l8-9-8-10H29V2c0-1.1-.9-2-2-2s-2 .9-2 2v6H5c-1.1 0-2 .9-2 2v15c0 1.1.9 2 2 2h20v5H8L0 42l8 9h17v11c0 1.1.9 2 2 2s2-.9 2-2V51h25c1.1 0 2-.9 2-2V34c0-1.1-.9-2-2-2z",
      fill: color
    })
  );
};

exports.default = DirectionsF;