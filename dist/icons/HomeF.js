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

var HomeF = function HomeF(_ref) {
  var color = _ref.color,
      props = _objectWithoutProperties(_ref, ["color"]);

  return _react2.default.createElement(
    _reactNativeSvg2.default,
    _extends({ viewBox: "0 0 54 64" }, props),
    _react2.default.createElement(_reactNativeSvg.Path, {
      d: "M52.5 20.8L27.6 0l-26 20.8C.7 21.5 0 22.9 0 24v38c0 1.1.9 2 2 2h16V45c0-5 4-9 9-9s9 4 9 9v19h16c1.1 0 2-.9 2-2V24c0-1.1-.7-2.5-1.5-3.2z",
      fill: color
    })
  );
};

exports.default = HomeF;