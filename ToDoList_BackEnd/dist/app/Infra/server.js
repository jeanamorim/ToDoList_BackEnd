"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

require("dotenv/config");

var _main = _interopRequireDefault(require("./main"));

require("../database");

var port = process.env.PORT || 7071;
(0, _main["default"])().then(function (app) {
  app.listen(port, function () {
    console.log("servidor rodando na porta 7071");
  });
});