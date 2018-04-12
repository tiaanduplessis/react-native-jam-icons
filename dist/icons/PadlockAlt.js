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

var PadlockAlt = function PadlockAlt(_ref) {
  var color = _ref.color,
      props = _objectWithoutProperties(_ref, ["color"]);

  return _react2.default.createElement(
    _reactNativeSvg2.default,
    _extends({ viewBox: "0 0 40 64" }, props),
    _react2.default.createElement(_reactNativeSvg.Path, {
      d: "M34 29.7V14c0-7.7-6.3-14-14-14S6 6.3 6 14v15.7C2.3 33.4 0 38.4 0 44c0 11 9 20 20 20s20-9 20-20c0-5.6-2.3-10.6-6-14.3zM10 14c0-5.5 4.5-10 10-10s10 4.5 10 10v12.7C27.1 25 23.6 24 20 24s-7.1 1-10 2.7V14zm10 46c-8.8 0-16-7.2-16-16s7.2-16 16-16 16 7.2 16 16-7.2 16-16 16zm8-18h-2.4c-.6-1.7-2-3.1-3.7-3.7V36c0-1.1-.9-2-2-2s-2 .9-2 2v2.4c-1.7.6-3.1 2-3.7 3.7H12c-1.1 0-2 .9-2 2s.9 2 2 2h2.4c.6 1.7 2 3.1 3.7 3.7V52c0 1.1.9 2 2 2s2-.9 2-2v-2.4c1.7-.6 3.1-2 3.7-3.7H28c1.1 0 2-.9 2-2 0-1-.9-1.9-2-1.9z",
      fill: color
    })
  );
};

exports.default = PadlockAlt;