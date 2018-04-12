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

var Pencil = function Pencil(_ref) {
  var color = _ref.color,
      props = _objectWithoutProperties(_ref, ["color"]);

  return _react2.default.createElement(
    _reactNativeSvg2.default,
    _extends({ viewBox: "0 0 63 63" }, props),
    _react2.default.createElement(_reactNativeSvg.Path, {
      d: "M59.5 3.1c-3.9-3.9-10.2-3.9-14.1 0l-.4.3-6.2 6.2L4.1 44.3l-4 18.2 18.2-4.1 34.6-34.6 6.2-6.2.4-.4c3.9-3.9 3.9-10.2 0-14.1zM45.7 8.4l8.5 8.5-1.9 1.9-8.5-8.5 1.9-1.9zM15.5 55.6L5 57.5l2-10.4 34.6-34.6 4.2 4.2-.7-.7L14 47.1l1.4 1.4 31.1-31.1 3.5 3.5-34.5 34.7zM47.8 6.3l.7-.7c2.3-2.3 6.2-2.3 8.5 0s2.3 6.1 0 8.5l-.7.7-8.5-8.5z",
      fill: color
    })
  );
};

exports.default = Pencil;