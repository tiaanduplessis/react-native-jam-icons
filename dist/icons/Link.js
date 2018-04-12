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

var Link = function Link(_ref) {
  var color = _ref.color,
      props = _objectWithoutProperties(_ref, ["color"]);

  return _react2.default.createElement(
    _reactNativeSvg2.default,
    _extends({ viewBox: "0 0 65 65" }, props),
    _react2.default.createElement(_reactNativeSvg.Path, {
      d: "M60.8 4.2c-5.1-5.1-13.3-5.1-18.4 0L28.9 17.6l4.2 4.2L46.6 8.4c2.7-2.7 7.2-2.7 9.9 0s2.7 7.2 0 9.9L41 33.9c-2.7 2.7-7.2 2.7-9.9 0-.5-.5-.9-1-1.2-1.6l-4.3 4.3c.4.5.8 1 1.3 1.5 5.1 5.1 13.3 5.1 18.4 0l15.5-15.5c5-5.1 5-13.3 0-18.4zM33.1 44.6l-.1-.4-1.2-1.2-13.5 13.5c-2.7 2.7-7.2 2.7-9.9 0s-2.7-7.2 0-9.9L24 31.1c2.7-2.7 7.2-2.7 9.9 0 .8.8 1.3 1.6 1.6 2.6l4.5-4.5c-.5-.8-1.1-1.6-1.9-2.4-5.1-5.1-13.3-5.1-18.4 0L4.2 42.4c-5.1 5.1-5.1 13.3 0 18.4s13.3 5.1 18.4 0L36 47.3l-2.8-2.8-.1.1z",
      fill: color
    })
  );
};

exports.default = Link;