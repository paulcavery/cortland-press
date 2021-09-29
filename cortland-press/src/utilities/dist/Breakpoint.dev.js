"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.below = exports.above = exports.size = void 0;

var _styledComponents = require("styled-components");

function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n\t\t@media (max-width: ", "px) {\n\t\t\t", "\n\t\t}\n\t"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n\t\t@media (min-width: ", "px) {\n\t\t\t", "\n\t\t}\n\t"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var size = {
  small: 640,
  med: 768,
  large: 1024
}; // Setting above media queries

exports.size = size;
var above = Object.keys(size).reduce(function (acc, label) {
  acc[label] = function () {
    return (0, _styledComponents.css)(_templateObject(), size[label], _styledComponents.css.apply(void 0, arguments));
  };

  return acc;
}, {}); // Setting below media queries

exports.above = above;
var below = Object.keys(size).reduce(function (acc, label) {
  acc[label] = function () {
    return (0, _styledComponents.css)(_templateObject2(), size[label], _styledComponents.css.apply(void 0, arguments));
  };

  return acc;
}, {});
exports.below = below;