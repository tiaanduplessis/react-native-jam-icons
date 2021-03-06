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

var Vine = function Vine(_ref) {
  var color = _ref.color,
      props = _objectWithoutProperties(_ref, ["color"]);

  return _react2.default.createElement(
    _reactNativeSvg2.default,
    _extends({ viewBox: "0 0 57 64" }, props),
    _react2.default.createElement(_reactNativeSvg.Path, {
      d: "M53.5 32.3c-5.8.5-10.7-1.2-14-6.3-1.9-3.1-2.5-6.6-2.3-10.2.1-1.4.4-2.9 1.1-4.1.7-1.2 1.7-1.9 3.1-2 2-.1 3.5 1.2 4 3.7.7 3.2.2 6.3-.6 9.3-.1.3-.3 1-.3 1s.4.5.7.8c2.1 2.1 4.7 2.6 7.5 2.4.4 0 1.1-.1 1.1-.1s.3-.7.4-1c1.5-4.2 2.1-8.5 1.7-12.9C55.4 6.4 52 .9 44 .1c-7.2-.7-13.2 2.6-15.7 9.5-1.4 4-1.5 8-.8 12.1 1.2 6.8 4.4 12.4 10.6 16 .6.4.6.6.3 1.2-2.5 4.8-5.5 9.2-9.1 13.2-1.6 1.7-1.5 1.7-3-.2-7.3-9.3-11.4-20.1-13.7-31.6-.6-3.2-1.1-6.3-1.5-9.5L11 9.6H0l.1.6c1.4 9.9 3.5 19.7 7.2 29 2.7 6.9 6.2 13.3 11.1 18.9 1.6 1.8 3.4 3.4 5.4 4.7 2.4 1.5 4.7 1.4 7-.2.7-.5 1.3-1 1.9-1.5C39 55.4 44.1 48.7 48 41c.3-.6.6-.9 1.3-.9 1.6 0 3.2-.2 4.8-.5l2.8-.6v-7.6c-1 .5-2.2.7-3.4.9z",
      fill: color
    })
  );
};

exports.default = Vine;