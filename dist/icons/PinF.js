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

var PinF = function PinF(_ref) {
  var color = _ref.color,
      props = _objectWithoutProperties(_ref, ["color"]);

  return _react2.default.createElement(
    _reactNativeSvg2.default,
    _extends({ viewBox: "0 0 61 61" }, props),
    _react2.default.createElement(_reactNativeSvg.Path, {
      d: "M39 .2l-.3.3c-2.6 2.6-4 6.1-4.1 9.7L24 20.8c-6.3-1.5-13-.2-18.2 4.2l13.4 13.4L.8 56.8c-.8.8-.8 2 0 2.8.8.8 2 .8 2.8 0L22 41.2l13.3 13.3c4.4-5.3 5.8-12.2 4.3-18.3L50 25.8c3.6-.1 7.1-1.5 9.8-4.1l.3-.3L39 .2z",
      fill: color
    })
  );
};

exports.default = PinF;