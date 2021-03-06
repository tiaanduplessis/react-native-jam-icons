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

var MessageAlt = function MessageAlt(_ref) {
  var color = _ref.color,
      props = _objectWithoutProperties(_ref, ["color"]);

  return _react2.default.createElement(
    _reactNativeSvg2.default,
    _extends({ viewBox: "0 0 64 63" }, props),
    _react2.default.createElement(_reactNativeSvg.Path, {
      d: "M53 0H11C4.9 0 0 4.9 0 11v26c0 6.1 4.9 11 11 11h21.3l19.3 14.3c1.3 1 2.2.4 2-1.2L52 48l4-.4c4.6-1.3 8-5.5 8-10.6V11c0-6.1-4.9-11-11-11zm7 37c0 3.9-3.1 7-7 7h-5.5l1.4 11.3L33.6 44H11c-3.9 0-7-3.1-7-7V11c0-3.9 3.1-7 7-7h42c3.9 0 7 3.1 7 7v26z",
      fill: color
    })
  );
};

exports.default = MessageAlt;