"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _sequelize = require("sequelize");

var _database = _interopRequireDefault(require("../config/database"));

var _todolist = _interopRequireDefault(require("../Models/todolist"));

var models = [_todolist["default"]];

var Database = /*#__PURE__*/function () {
  function Database() {
    (0, _classCallCheck2["default"])(this, Database);
    this.init();
  }

  (0, _createClass2["default"])(Database, [{
    key: "init",
    value: function init() {
      var sequelize = new _sequelize.Sequelize({
        host: process.env.DATABASE_HOST,
        username: process.env.DATABASE_USERNAME,
        password: process.env.DATABASE_PASSWORD,
        database: process.env.DATABASE_NAME,
        port: process.env.DATABASE_PORT,
        dialect: "postgres",
        protocol: "postgres",
        dialectOptions: {
          ssl: {
            require: true,
            rejectUnauthorized: false
          }
        },
        define: {
          timestamps: false
        }
      });
      sequelize.sync;
      sequelize.authenticate().then(function (res) {
        return console.log("database conected");
      })["catch"](function (err) {
        return console.log(err);
      });
      models.map(function (model) {
        return model.init(sequelize);
      }).map(function (model) {
        return model.associate && model.associate(sequelize.models);
      });
    }
  }]);
  return Database;
}();

var _default = new Database();

exports["default"] = _default;