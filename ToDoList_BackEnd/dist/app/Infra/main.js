"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _express = _interopRequireDefault(require("express"));

var _cors = _interopRequireDefault(require("cors"));

var _path = _interopRequireDefault(require("path"));

var _morgan = _interopRequireDefault(require("morgan"));

var _todolist = _interopRequireDefault(require("../Models/todolist"));

var ctrs = _interopRequireWildcard(require("./controller"));

var rtrs = _interopRequireWildcard(require("./routes"));

var main = /*#__PURE__*/function () {
  var _ref = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee() {
    var TodoController, EmailController, rootRouter, app;
    return _regenerator["default"].wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            TodoController = new ctrs.TodoController(_todolist["default"]);
            EmailController = new ctrs.EmailController();
            rootRouter = _express["default"].Router();
            rootRouter.use("/todolist", rtrs.RouterTodo.configure(TodoController));
            rootRouter.use("/email", rtrs.RouterEmail.configure(EmailController));
            app = (0, _express["default"])();
            app.use([(0, _cors["default"])(), _express["default"].json({
              limit: "10mb"
            }), _express["default"].urlencoded({
              extended: true
            })]);
            app.use((0, _morgan["default"])("dev"));
            app.use(rootRouter);
            return _context.abrupt("return", app);

          case 10:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));

  return function main() {
    return _ref.apply(this, arguments);
  };
}();

var _default = main;
exports["default"] = _default;