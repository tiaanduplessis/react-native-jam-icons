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

var LinkedinCircle = function LinkedinCircle(_ref) {
  var color = _ref.color,
      props = _objectWithoutProperties(_ref, ["color"]);

  return _react2.default.createElement(
    _reactNativeSvg2.default,
    _extends({ viewBox: "0 0 64 64" }, props),
    _react2.default.createElement(_reactNativeSvg.Path, {
      d: "M32 0C14.3 0 0 14.3 0 32s14.3 32 32 32 32-14.3 32-32S49.7 0 32 0zM17 17c.6-.7 1.5-1 2.5-1s1.9.3 2.5 1c.6.7 1 1.5 1 2.5s-.3 1.8-1 2.5c-.6.7-1.5 1-2.6 1-1 0-1.9-.3-2.5-1-.6-.7-.9-1.5-.9-2.5s.3-1.8 1-2.5zm6 30h-7V26h7v21zm26 0h-7.2V36c0-1.4-.3-2.6-.9-3.4-.6-.8-1.5-1.2-2.8-1.2-.9 0-1.7.2-2.3.7-.6.5-1.1 1.1-1.4 1.8-.2.4-.2 1-.2 1.7V47H27V26.5h7.2v2.9c.3-.4.6-.8.9-1.1.3-.3.7-.7 1.2-1.1.5-.4 1.2-.7 1.9-.9.8-.2 1.6-.3 2.5-.3 2.5 0 4.5.8 6 2.4 1.5 1.6 2.3 3.9 2.3 6.9V47z",
      fill: color
    })
  );
};

exports.default = LinkedinCircle;