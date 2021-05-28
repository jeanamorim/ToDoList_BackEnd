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

var _create2 = _interopRequireDefault(require("../../services/servicesToDoList/create"));

var _createNothing = _interopRequireDefault(require("../../services/servicesToDoList/createNothing"));

var _index3 = _interopRequireDefault(require("../../services/servicesToDoList/index"));

var _delete3 = _interopRequireDefault(require("../../services/servicesToDoList/delete"));

var _update2 = _interopRequireDefault(require("../../services/servicesToDoList/update"));

var database;

var TodoController = /*#__PURE__*/function () {
  function TodoController(db) {
    (0, _classCallCheck2["default"])(this, TodoController);
    database = db;
  }

  (0, _createClass2["default"])(TodoController, [{
    key: "create",
    value: function () {
      var _create = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(req, res) {
        var todo, createToDoList, response;
        return _regenerator["default"].wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                todo = req.body;
                _context.prev = 1;
                createToDoList = new _create2["default"](database);
                _context.next = 5;
                return createToDoList.execute(todo);

              case 5:
                response = _context.sent;
                return _context.abrupt("return", res.status(201).json(response));

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

      function create(_x, _x2) {
        return _create.apply(this, arguments);
      }

      return create;
    }()
  }, {
    key: "index",
    value: function () {
      var _index = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee2(req, res) {
        var _index2, response;

        return _regenerator["default"].wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _context2.prev = 0;
                _index2 = new _index3["default"](database);
                _context2.next = 4;
                return _index2.execute();

              case 4:
                response = _context2.sent;
                return _context2.abrupt("return", res.status(200).json(response));

              case 8:
                _context2.prev = 8;
                _context2.t0 = _context2["catch"](0);
                return _context2.abrupt("return", res.status(400).json({
                  error: _context2.t0.message
                }));

              case 11:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, null, [[0, 8]]);
      }));

      function index(_x3, _x4) {
        return _index.apply(this, arguments);
      }

      return index;
    }()
  }, {
    key: "delete",
    value: function () {
      var _delete2 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee3(req, res) {
        var deleteOne;
        return _regenerator["default"].wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                _context3.prev = 0;
                deleteOne = new _delete3["default"](database);
                _context3.next = 4;
                return deleteOne.execute({
                  id: req.params.id
                });

              case 4:
                return _context3.abrupt("return", res.status(200).json({
                  message: "to-do deleted",
                  statusCode: 200
                }));

              case 7:
                _context3.prev = 7;
                _context3.t0 = _context3["catch"](0);
                return _context3.abrupt("return", res.status(400).json({
                  error: _context3.t0.message,
                  statusCode: 400
                }));

              case 10:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3, null, [[0, 7]]);
      }));

      function _delete(_x5, _x6) {
        return _delete2.apply(this, arguments);
      }

      return _delete;
    }()
  }, {
    key: "update",
    value: function () {
      var _update = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee4(req, res) {
        var updateOne, response;
        return _regenerator["default"].wrap(function _callee4$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                _context4.prev = 0;
                updateOne = new _update2["default"](database);
                _context4.next = 4;
                return updateOne.execute({
                  id: req.params.id,
                  status: req.body.status,
                  back: req.body.back
                });

              case 4:
                response = _context4.sent;
                return _context4.abrupt("return", res.status(200).json(response));

              case 8:
                _context4.prev = 8;
                _context4.t0 = _context4["catch"](0);
                return _context4.abrupt("return", res.status(400).json({
                  error: _context4.t0.message
                }));

              case 11:
              case "end":
                return _context4.stop();
            }
          }
        }, _callee4, null, [[0, 8]]);
      }));

      function update(_x7, _x8) {
        return _update.apply(this, arguments);
      }

      return update;
    }()
  }, {
    key: "nothing",
    value: function () {
      var _nothing = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee5(req, res) {
        var createNothing, response;
        return _regenerator["default"].wrap(function _callee5$(_context5) {
          while (1) {
            switch (_context5.prev = _context5.next) {
              case 0:
                _context5.prev = 0;
                createNothing = new _createNothing["default"](database);
                _context5.next = 4;
                return createNothing.execute();

              case 4:
                response = _context5.sent;
                return _context5.abrupt("return", res.status(200).json({
                  statusCode: 200,
                  data: response
                }));

              case 8:
                _context5.prev = 8;
                _context5.t0 = _context5["catch"](0);
                return _context5.abrupt("return", res.status(400).json({
                  statusCode: 400,
                  error: _context5.t0.message
                }));

              case 11:
              case "end":
                return _context5.stop();
            }
          }
        }, _callee5, null, [[0, 8]]);
      }));

      function nothing(_x9, _x10) {
        return _nothing.apply(this, arguments);
      }

      return nothing;
    }()
  }]);
  return TodoController;
}();

var _default = TodoController;
exports["default"] = _default;