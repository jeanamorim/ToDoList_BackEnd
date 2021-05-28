"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.createTodoValidation = void 0;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _joi = _interopRequireDefault(require("joi"));

var createTodoValidation = /*#__PURE__*/function () {
  var _ref = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(todo) {
    var schema, verifySchema;
    return _regenerator["default"].wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            schema = _joi["default"].object({
              name: _joi["default"].string().required("titulo e obrigatorio"),
              email: _joi["default"].string().required("email e obrigatorio"),
              description: _joi["default"].string().required("descricao e obrigatoria"),
              status: _joi["default"].string().required("status e obrigatorio"),
              back: _joi["default"].number(),
              created_at: _joi["default"].date(),
              updated_at: _joi["default"].date()
            });
            _context.next = 3;
            return _joi["default"].validate(todo, schema);

          case 3:
            verifySchema = _context.sent;
            return _context.abrupt("return", verifySchema);

          case 5:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));

  return function createTodoValidation(_x) {
    return _ref.apply(this, arguments);
  };
}();

exports.createTodoValidation = createTodoValidation;