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

var Highlighter = function Highlighter(_ref) {
  var color = _ref.color,
      props = _objectWithoutProperties(_ref, ["color"]);

  return _react2.default.createElement(
    _reactNativeSvg2.default,
    _extends({ viewBox: "0 0 63 60" }, props),
    _react2.default.createElement(_reactNativeSvg.Path, {
      d: "M60 10.9l-8.5-8.5c-3.1-3.1-8.2-3.1-11.3 0L15.5 27.2l2.5 2.5 17-17 14.8 14.8-17 17 2.5 2.5L60 22.3c3.2-3.2 3.2-8.2 0-11.4zm-2.4 8.9l-4.9 4.9L37.8 9.9 42.7 5c1.6-1.6 4.1-1.6 5.7 0l9.2 9.2c1.5 1.5 1.5 4 0 5.6zm-49.3 27l.1.2-7.8 7.8 9.2 4.9 5.7-5.7.2.2L35.3 47 15.5 27.2 8.3 46.8zm1 9.2l-3.7-2 4.9-4.9 2.8 2.8-4 4.1zm18.8-10.6l-11.4 4.2-1.9-1.9-1.9-1.9 4.2-11.4 11 11z",
      fill: color
    })
  );
};

exports.default = Highlighter;