"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, "TodoController", {
  enumerable: true,
  get: function get() {
    return _controleToDoList["default"];
  }
});
Object.defineProperty(exports, "EmailController", {
  enumerable: true,
  get: function get() {
    return _controllerEmail["default"];
  }
});

var _controleToDoList = _interopRequireDefault(require("../../controllers/controleToDoList"));

var _controllerEmail = _interopRequireDefault(require("../../controllers/controllerEmail"));