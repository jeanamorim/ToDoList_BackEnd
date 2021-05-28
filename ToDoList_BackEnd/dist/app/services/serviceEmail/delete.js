"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var DeleteTodoService = /*#__PURE__*/function () {
  function DeleteTodoService(db) {
    (0, _classCallCheck2["default"])(this, DeleteTodoService);
    this.db = db;
  }

  (0, _createClass2["default"])(DeleteTodoService, [{
    key: "execute",
    value: function () {
      var _execute = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(_ref) {
        var id;
        return _regenerator["default"].wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                id = _ref.id;

                if (id) {
                  _context.next = 3;
                  break;
                }

                throw new Error("cannot delete it without 'id'");

              case 3:
                _context.next = 5;
                return this.db.destroy({
                  where: {
                    id: id
                  }
                });

              case 5:
                return _context.abrupt("return", "success");

              case 6:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function execute(_x) {
        return _execute.apply(this, arguments);
      }

      return execute;
    }()
  }]);
  return DeleteTodoService;
}();

var _default = DeleteTodoService;
exports["default"] = _default;