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

var Search = function Search(_ref) {
  var color = _ref.color,
      props = _objectWithoutProperties(_ref, ["color"]);

  return _react2.default.createElement(
    _reactNativeSvg2.default,
    _extends({ viewBox: "0 0 63 63" }, props),
    _react2.default.createElement(_reactNativeSvg.Path, {
      d: "M61.9 57.6l-15-15c8.1-10.2 7.4-25.1-2-34.5C34.7-2 18.3-2 8.1 8.1S-2 34.7 8.1 44.9c9.4 9.4 24.3 10.1 34.5 2l15 15c1.2 1.2 3.1 1.2 4.2 0 1.2-1.2 1.2-3.1.1-4.3zM41.4 41.4c-8.2 8.2-21.5 8.2-29.7 0s-8.2-21.5 0-29.7 21.5-8.2 29.7 0 8.2 21.5 0 29.7z",
      fill: color
    })
  );
};

exports.default = Search;