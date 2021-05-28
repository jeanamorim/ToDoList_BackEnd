"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

module.exports = {
  up: function () {
    var _up = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(queryInterface, Sequelize) {
      return _regenerator["default"].wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              return _context.abrupt("return", queryInterface.createTable("todos", {
                id: {
                  type: Sequelize.INTEGER,
                  allowNull: false,
                  autoIncrement: true,
                  primaryKey: true
                },
                name: {
                  type: Sequelize.STRING,
                  allowNull: false
                },
                email: {
                  type: Sequelize.STRING,
                  allowNull: false
                },
                description: {
                  type: Sequelize.STRING,
                  allowNull: false
                },
                status: {
                  type: Sequelize.STRING,
                  allowNull: true
                },
                back: {
                  type: Sequelize.INTEGER,
                  allowNull: false
                },
                created_at: {
                  type: Sequelize.DATE,
                  allowNull: false
                },
                updated_at: {
                  type: Sequelize.DATE,
                  allowNull: false
                }
              }));

            case 1:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }));

    function up(_x, _x2) {
      return _up.apply(this, arguments);
    }

    return up;
  }(),
  down: function () {
    var _down = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee2(queryInterface, Sequelize) {
      return _regenerator["default"].wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              return _context2.abrupt("return", queryInterface.dropTable("todos"));

            case 1:
            case "end":
              return _context2.stop();
          }
        }
      }, _callee2);
    }));

    function down(_x3, _x4) {
      return _down.apply(this, arguments);
    }

    return down;
  }()
};