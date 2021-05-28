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

var CreateUserService = /*#__PURE__*/function () {
  function CreateUserService(db) {
    (0, _classCallCheck2["default"])(this, CreateUserService);
    this.db = db;
  }

  (0, _createClass2["default"])(CreateUserService, [{
    key: "execute",
    value: function () {
      var _execute = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(_ref) {
        var id, status, toDo, toDoupdated;
        return _regenerator["default"].wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                id = _ref.id, status = _ref.status;
                _context.next = 3;
                return this.db.findOne({
                  where: {
                    id: id
                  }
                });

              case 3:
                toDo = _context.sent;

                if (toDo) {
                  _context.next = 6;
                  break;
                }

                throw new Error("ToDo is not exists");

              case 6:
                console.log(status);
                _context.next = 9;
                return this.db.update({
                  status: status
                }, {
                  where: {
                    id: id
                  }
                });

              case 9:
                _context.next = 11;
                return this.db.findOne({
                  where: {
                    id: id
                  }
                });

              case 11:
                toDoupdated = _context.sent;
                return _context.abrupt("return", toDoupdated);

              case 13:
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
  return CreateUserService;
}();

var _default = CreateUserService;
exports["default"] = _default;