"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, "RouterTodo", {
  enumerable: true,
  get: function get() {
    return _routesToDoList["default"];
  }
});
Object.defineProperty(exports, "RouterEmail", {
  enumerable: true,
  get: function get() {
    return _routesEmail["default"];
  }
});

var _routesToDoList = _interopRequireDefault(require("../../routes/routesToDoList"));

var _routesEmail = _interopRequireDefault(require("../../routes/routesEmail"));