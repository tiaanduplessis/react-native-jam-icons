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

var Transgender = function Transgender(_ref) {
  var color = _ref.color,
      props = _objectWithoutProperties(_ref, ["color"]);

  return _react2.default.createElement(
    _reactNativeSvg2.default,
    _extends({ viewBox: "0 0 46 64" }, props),
    _react2.default.createElement(_reactNativeSvg.Path, {
      d: "M45.4.6C45.1.2 44.6 0 44 0H30c-1.1 0-2 .9-2 2s.9 2 2 2h8.7l-7.5 7.5C28 9.3 24.2 8 20 8 9 8 0 17 0 28c0 10.4 7.9 18.9 18 19.9V53h-4c-1.1 0-2 .9-2 2s.9 2 2 2h4v5c0 1.1.9 2 2 2s2-.9 2-2v-5h4c1.1 0 2-.9 2-2s-.9-2-2-2h-4v-5.1c10.1-1 18-9.5 18-19.9 0-5.4-2.2-10.3-5.7-13.9L42 6.4V16c0 1.1.9 2 2 2s2-.9 2-2V2c0-.6-.2-1.1-.6-1.4zM20 44c-8.8 0-16-7.2-16-16s7.2-16 16-16 16 7.2 16 16-7.2 16-16 16z",
      fill: color
    })
  );
};

exports.default = Transgender;