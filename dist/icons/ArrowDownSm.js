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

var ArrowDownSm = function ArrowDownSm(_ref) {
  var color = _ref.color,
      props = _objectWithoutProperties(_ref, ["color"]);

  return _react2.default.createElement(
    _reactNativeSvg2.default,
    _extends({ viewBox: "0 0 32 63" }, props),
    _react2.default.createElement(_reactNativeSvg.Path, {
      d: "M30.8 44.8c-1.2-1.2-3.1-1.2-4.2 0l-7.4 7.4v-49c0-1.7-1.3-3-3-3s-3 1.3-3 3v49.3l-7.8-7.8c-1.2-1.2-3.1-1.2-4.2 0C0 46 0 47.9 1.1 49.1l12.7 12.7c.6.6 1.3.9 2.1.9s1.5-.3 2.1-.9l12.7-12.7c1.3-1.2 1.3-3.1.1-4.3z",
      fill: color
    })
  );
};

exports.default = ArrowDownSm;