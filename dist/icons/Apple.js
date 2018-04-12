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

var Apple = function Apple(_ref) {
  var color = _ref.color,
      props = _objectWithoutProperties(_ref, ["color"]);

  return _react2.default.createElement(
    _reactNativeSvg2.default,
    _extends({ viewBox: "0 0 53 64" }, props),
    _react2.default.createElement(_reactNativeSvg.Path, {
      d: "M52.7 46.2c-.9-.4-8.2-3.6-8.3-12.3 0-7.1 5.5-10.9 6.6-11.6h.1c.1-.1.2-.2.2-.3 0-.1 0-.3-.1-.4-3.8-5.6-9.7-6.4-12.1-6.5-.3 0-.7-.1-1.1-.1-2.8 0-5.4 1-7.6 1.9-1.5.6-2.7 1.1-3.6 1.1-1 0-2.3-.5-3.8-1.1-2-.8-4.2-1.7-6.6-1.7h-.2c-5.5.1-10.8 3.2-13.6 8.2-5.5 9.4-2 23.7 4.1 32.4 3 4.3 6.1 8.2 10.3 8.2h.2c2-.1 3.4-.7 4.8-1.3 1.5-.7 3.1-1.3 5.7-1.3 2.4 0 3.9.7 5.4 1.3 1.5.6 2.9 1.3 5.2 1.2 4.7-.1 7.6-4.3 10.2-8 2.7-3.9 4-7.6 4.5-9.1v-.1c.1-.1-.1-.4-.3-.5zM26.6 16h.7c3.3 0 6.8-1.8 9.2-4.8C39 8.1 40.3 4.1 39.9.5c0-.3-.3-.5-.6-.5-3.3.1-7.3 2.2-9.7 5.1-2 2.4-4 6.4-3.5 10.4 0 .3.2.5.5.5z",
      fill: color
    })
  );
};

exports.default = Apple;