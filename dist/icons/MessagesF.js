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

var MessagesF = function MessagesF(_ref) {
  var color = _ref.color,
      props = _objectWithoutProperties(_ref, ["color"]);

  return _react2.default.createElement(
    _reactNativeSvg2.default,
    _extends({ viewBox: "0 0 64 64" }, props),
    _react2.default.createElement(_reactNativeSvg.Path, {
      d: "M64 19.2C64 8.6 53.3 0 40 0 29.2 0 20 5.7 17 13.6c2.1-.4 4.2-.6 6.4-.6 15.1 0 27.4 10 27.4 22.4 0 3-.7 5.9-2 8.5 3.1 2.3 6.1 4.3 7.1 4 1.8-.4-2.5-12.8-1.8-13.2 6-3.4 9.9-9.1 9.9-15.5zM24 16C10.7 16 0 24.6 0 35.2c0 6.4 3.9 12 9.9 15.5.7.4-3.6 12.8-1.8 13.2 2.2.5 13.5-9.6 15.9-9.6 13.3 0 24-8.6 24-19.2C48 24.6 37.3 16 24 16z",
      fill: color
    })
  );
};

exports.default = MessagesF;