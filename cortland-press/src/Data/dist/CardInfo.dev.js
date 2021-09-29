"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _colorSwatch = _interopRequireDefault(require("../../src/assets/desktop/colorSwatch.svg"));

var _sign = _interopRequireDefault(require("../assets/desktop/sign.svg"));

var _graphic = _interopRequireDefault(require("../assets/desktop/graphic.svg"));

var _businessCard = _interopRequireDefault(require("../assets/desktop/businessCard.svg"));

var _bindery = _interopRequireDefault(require("../assets/desktop/bindery.svg"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var CardInfo = [{
  picture: "../assets/desktop/printer.svg",
  title: "Offset & Digital Printing"
}, {
  picture: {
    ColorSwatch: _colorSwatch["default"]
  },
  title: "Black and White & Full Color Printing"
}, {
  picture: {
    Signs: _sign["default"]
  },
  title: "Signs & Banners"
}, {
  picture: {
    Graphic: _graphic["default"]
  },
  title: "Complete Graphic Design Department"
}, {
  picture: {
    BusinessCard: _businessCard["default"]
  },
  title: "Promotional Products"
}, {
  picture: {
    Bindery: _bindery["default"]
  },
  title: "Complete Bindery Services"
}];
var _default = CardInfo;
exports["default"] = _default;