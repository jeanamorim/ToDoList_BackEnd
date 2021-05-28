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

var _api = _interopRequireDefault(require("../../Infra/services/api"));

var TodoController = /*#__PURE__*/function () {
  function TodoController() {
    (0, _classCallCheck2["default"])(this, TodoController);
  }

  (0, _createClass2["default"])(TodoController, [{
    key: "emailToDo",
    value: function () {
      var _emailToDo = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(req, res) {
        var email, _yield$MailApi$post, data;

        return _regenerator["default"].wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                email = req.query.email;
                _context.prev = 1;
                _context.next = 4;
                return _api["default"].post("/check?access_key=".concat(process.env.MAIL_ACCESS_KEY, "&email=").concat(email, "&smtp=1&format=1"));

              case 4:
                _yield$MailApi$post = _context.sent;
                data = _yield$MailApi$post.data;
                return _context.abrupt("return", res.status(201).json(data));

              case 9:
                _context.prev = 9;
                _context.t0 = _context["catch"](1);
                return _context.abrupt("return", res.status(400).json({
                  error: _context.t0.message
                }));

              case 12:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, null, [[1, 9]]);
      }));

      function emailToDo(_x, _x2) {
        return _emailToDo.apply(this, arguments);
      }

      return emailToDo;
    }()
  }]);
  return TodoController;
}();

var _default = TodoController;
exports["default"] = _default;