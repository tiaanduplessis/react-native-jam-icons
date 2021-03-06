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

var ArrowsH = function ArrowsH(_ref) {
  var color = _ref.color,
      props = _objectWithoutProperties(_ref, ["color"]);

  return _react2.default.createElement(
    _reactNativeSvg2.default,
    _extends({ viewBox: "0 0 63 24" }, props),
    _react2.default.createElement(_reactNativeSvg.Path, {
      d: "M61.3 9.6l-8.5-8.5c-1.2-1.2-3.1-1.2-4.2 0-1.2 1.2-1.2 3.1 0 4.2L52.2 9h-42l3.6-3.6c1.2-1.2 1.2-3.1 0-4.2-1.2-1.2-3.1-1.2-4.2 0L1.1 9.6c-.6.6-.9 1.3-.9 2.1s.3 1.5.9 2.1l8.5 8.5c1.2 1.2 3.1 1.2 4.2 0 1.2-1.2 1.2-3.1 0-4.2l-3-3.1h40.9l-3.1 3.1c-1.2 1.2-1.2 3.1 0 4.2 1.2 1.2 3.1 1.2 4.2 0l8.5-8.5c.6-.6.9-1.3.9-2.1 0-.7-.3-1.5-.9-2.1z",
      fill: color
    })
  );
};

exports.default = ArrowsH;