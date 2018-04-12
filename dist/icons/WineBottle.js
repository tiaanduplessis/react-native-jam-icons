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

var WineBottle = function WineBottle(_ref) {
  var color = _ref.color,
      props = _objectWithoutProperties(_ref, ["color"]);

  return _react2.default.createElement(
    _reactNativeSvg2.default,
    _extends({ viewBox: "0 0 24 64" }, props),
    _react2.default.createElement(_reactNativeSvg.Path, {
      d: "M18 17.6V2c0-1.1-.9-2-2-2H8C6.9 0 6 .9 6 2v15.6c-3.6 2.1-6 6-6 10.4v34c0 1.1.9 2 2 2h20c1.1 0 2-.9 2-2V28c0-4.4-2.4-8.3-6-10.4zM14 4v6h-4V4h4zm-3 46H4V33h7v17zm9 10H4v-7h11V29H4v-1c0-2.9 1.5-5.5 4-6.9l2-1.2V14h4v5.9l2 1.2c2.5 1.4 4 4 4 6.9v32z",
      fill: color
    })
  );
};

exports.default = WineBottle;