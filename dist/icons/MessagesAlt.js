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

var MessagesAlt = function MessagesAlt(_ref) {
  var color = _ref.color,
      props = _objectWithoutProperties(_ref, ["color"]);

  return _react2.default.createElement(
    _reactNativeSvg2.default,
    _extends({ viewBox: "0 0 64 63" }, props),
    _react2.default.createElement(_reactNativeSvg.Path, {
      d: "M53 0H27c-6.1 0-11 4.9-11 11v5h-5C4.9 16 0 20.9 0 27v14c0 6 4.9 11 9 11l-1.1 9c-.2 1.6.7 2.2 2.1 1.2L23.8 52H37c5.8 0 10.6-4.5 11-10.3l6.1 4.5c1.3 1 2.3.5 2.1-1.2L55 36c4.1 0 9-4.9 9-11V11c0-6.1-4.9-11-11-11zm-9 41c0 3.9-3.1 7-7 7H22.5l-9.9 7.3.9-7.3H9c-2.1 0-5-3.4-5-7V27c0-3.9 3.1-7 7-7h26c.9 0 1.7.2 2.5.5 2.6 1 4.5 3.5 4.5 6.4V41zm16-16c0 3.6-3 7-5 7h-4.5l.9 7.3-3.4-2.5v-9.9c0-4.7-3-8.7-7.2-10.2-1.2-.5-2.5-.7-3.8-.7H20v-5c0-3.9 3.1-7 7-7h26c3.9 0 7 3.1 7 7v14z",
      fill: color
    })
  );
};

exports.default = MessagesAlt;