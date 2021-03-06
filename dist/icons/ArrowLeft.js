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

var ArrowLeft = function ArrowLeft(_ref) {
  var color = _ref.color,
      props = _objectWithoutProperties(_ref, ["color"]);

  return _react2.default.createElement(
    _reactNativeSvg2.default,
    _extends({ viewBox: "0 0 63 62" }, props),
    _react2.default.createElement(_reactNativeSvg.Path, {
      d: "M60 28H10.7L33.3 5.4c1.2-1.2 1.2-3.1 0-4.2-1.2-1.2-3.1-1.2-4.2 0L1.5 28.7c-.6.6-.9 1.4-.9 2.1 0 .8.3 1.5.9 2.1l27.6 27.6c1.2 1.2 3.1 1.2 4.2 0 1.2-1.2 1.2-3.1 0-4.2L11 34h49c1.7 0 3-1.3 3-3s-1.3-3-3-3z",
      fill: color
    })
  );
};

exports.default = ArrowLeft;