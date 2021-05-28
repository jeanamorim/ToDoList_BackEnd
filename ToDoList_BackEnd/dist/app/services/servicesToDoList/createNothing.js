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

var _catApi = _interopRequireDefault(require("../../Infra/services/catApi"));

var createNothingTodoSevice = /*#__PURE__*/function () {
  function createNothingTodoSevice(db) {
    (0, _classCallCheck2["default"])(this, createNothingTodoSevice);
    this.db = db;
  }

  (0, _createClass2["default"])(createNothingTodoSevice, [{
    key: "execute",
    value: function () {
      var _execute = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee2() {
        var _this = this;

        var _yield$catApi$get, data;

        return _regenerator["default"].wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _context2.next = 2;
                return _catApi["default"].get("/random?animal_type=dog&amount=3");

              case 2:
                _yield$catApi$get = _context2.sent;
                data = _yield$catApi$get.data;
                data.forEach( /*#__PURE__*/function () {
                  var _ref = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(element) {
                    var todoItem;
                    return _regenerator["default"].wrap(function _callee$(_context) {
                      while (1) {
                        switch (_context.prev = _context.next) {
                          case 0:
                            todoItem = {
                              name: "eu",
                              email: "eu@email.com",
                              description: element.text,
                              status: "created",
                              back: 0,
                              created_at: new Date(),
                              updated_at: new Date()
                            };
                            _context.next = 3;
                            return _this.db.create(todoItem);

                          case 3:
                          case "end":
                            return _context.stop();
                        }
                      }
                    }, _callee);
                  }));

                  return function (_x) {
                    return _ref.apply(this, arguments);
                  };
                }());
                return _context2.abrupt("return", data);

              case 6:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2);
      }));

      function execute() {
        return _execute.apply(this, arguments);
      }

      return execute;
    }()
  }]);
  return createNothingTodoSevice;
}();

var _default = createNothingTodoSevice;
exports["default"] = _default;