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

var BellOff = function BellOff(_ref) {
  var color = _ref.color,
      props = _objectWithoutProperties(_ref, ["color"]);

  return _react2.default.createElement(
    _reactNativeSvg2.default,
    _extends({ viewBox: "0 0 60 65" }, props),
    _react2.default.createElement(_reactNativeSvg.Path, {
      d: "M29 63c4.3 0 8.2-1.9 10.7-5H18.3c2.5 3.1 6.4 5 10.7 5zM58 6.4c-.8-.8-2-.8-2.8 0L45.6 16c-2.5-5.9-8-10.2-14.6-10.9V2c0-1.1-.9-2-2-2s-2 .9-2 2v3.1c-9 1-16 8.6-16 17.9v18c0 4.3-3 7.9-7 8.8V56h1.6l-4.2 4.2c-.8.8-.8 2 0 2.8.8.8 2 .8 2.8 0l7-7H54v-6.2c-4-.9-7-4.5-7-8.8V23c0-.9-.1-1.7-.2-2.6L58 9.2c.8-.7.8-2 0-2.8zM8.9 52c3.7-2.3 6.1-6.4 6.1-11V23c0-7.2 5.4-13.1 12.4-13.9l1.6-.2 1.6.2c5.7.6 10.4 4.7 11.9 10L9.5 52h-.6zm40.2 0c.2.1-22.6.2-33.9.1L43 24.2V41c0 4.6 2.4 8.7 6.1 11z",
      fill: color
    })
  );
};

exports.default = BellOff;