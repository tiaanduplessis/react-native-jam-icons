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

var BellOffF = function BellOffF(props) {
  return _react2.default.createElement(
    _reactNativeSvg2.default,
    _extends({ viewBox: "0 0 60 65" }, props),
    _react2.default.createElement(_reactNativeSvg.Path, {
      d: "M31.3 4.7V2.3C31.3 1 30.3 0 29 0c-1.3 0-2.3 1-2.3 2.3v2.4c-9 1.1-15.9 8.8-15.9 18v18.2c0 4.2-2.9 7.8-6.8 8.8v3.6L44.4 13c-2.9-4.5-7.6-7.6-13.1-8.3zm-2.5 58.4c4.4 0 8.3-2 10.9-5.1H17.9c2.6 3.1 6.6 5.1 10.9 5.1zm18.4-22.2V24.3L15.8 55.7H54v-6c-3.9-1-6.8-4.6-6.8-8.8zM58 6.4c-.8-.8-2-.8-2.8 0L1.4 60.2c-.8.8-.8 2 0 2.8.8.8 2 .8 2.8 0L58 9.2c.8-.7.8-2 0-2.8z",
      fill: "#333"
    })
  );
};

exports.default = BellOffF;