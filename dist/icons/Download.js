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

var Download = function Download(_ref) {
  var color = _ref.color,
      props = _objectWithoutProperties(_ref, ["color"]);

  return _react2.default.createElement(
    _reactNativeSvg2.default,
    _extends({ viewBox: "0 0 64 64" }, props),
    _react2.default.createElement(_reactNativeSvg.Path, {
      d: "M64 53c0-1.1-.9-2-2-2s-2 .9-2 2v3.1c0 2.2-1.8 4-4 4H8c-2.2 0-4-1.8-4-4V53c0-1.1-.9-2-2-2s-2 .9-2 2v3c0 4.4 3.6 8 8 8h48c4.4 0 8-3.6 8-8v-3zm-33.4-3.4c.4.4.9.6 1.4.6.5 0 1-.2 1.4-.6l14.1-14.1c.8-.8.8-2.1 0-2.8-.8-.8-2-.8-2.8 0L34 43.3V2c0-1.1-.9-2-2-2s-2 .9-2 2v41.3L19.3 32.6c-.8-.8-2.1-.8-2.8 0-.8.8-.8 2 0 2.8l14.1 14.2z",
      fill: color
    })
  );
};

exports.default = Download;