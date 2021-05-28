"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _axios = _interopRequireDefault(require("axios"));

var catApi = _axios["default"].create({
  baseURL: process.env.CATS_BASEURL
});

var _default = catApi;
exports["default"] = _default;