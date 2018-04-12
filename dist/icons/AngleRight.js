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

var AngleRight = function AngleRight(_ref) {
  var color = _ref.color,
      props = _objectWithoutProperties(_ref, ["color"]);

  return _react2.default.createElement(
    _reactNativeSvg2.default,
    _extends({ viewBox: "0 0 35 62" }, props),
    _react2.default.createElement(_reactNativeSvg.Path, {
      d: "M33.4 28.9L5.8 1.3C4.6.1 2.7.1 1.6 1.3s-1.2 3.1 0 4.2L27 31 1.6 56.5c-1.2 1.2-1.2 3.1 0 4.2s3.1 1.2 4.2 0l27.6-27.6c1.2-1.2 1.2-3 0-4.2z",
      fill: color
    })
  );
};

exports.default = AngleRight;