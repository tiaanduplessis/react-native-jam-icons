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

var VolumeDownF = function VolumeDownF(_ref) {
  var color = _ref.color,
      props = _objectWithoutProperties(_ref, ["color"]);

  return _react2.default.createElement(
    _reactNativeSvg2.default,
    _extends({ viewBox: "0 0 46 64" }, props),
    _react2.default.createElement(_reactNativeSvg.Path, {
      d: "M27.7 1.6L10.4 20.3H2c-1.1 0-2 .9-2 2v20.4c0 1.1.9 2 2 2h8.6l17.2 18.6c1.1 1.2 2 .9 2-.8V2.4c0-1.7-.9-2-2.1-.8zM35 21v6c2.8 0 5 2.2 5 5s-2.2 5-5 5v6c6.1 0 11-4.9 11-11s-4.9-11-11-11z",
      fill: color
    })
  );
};

exports.default = VolumeDownF;