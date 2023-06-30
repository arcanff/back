"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
var _colors = _interopRequireDefault(require("colors"));
var _console = require("console");
var message = function message(mensaje, tipo) {
  switch (tipo) {
    case 'danger':
      console.log(mensaje.bgRed);
      break;
    case 'warning':
      console.log(mensaje.bgYellow);
      break;
    case 'sucess':
      console.log(mensaje.bgGreen);
      break;
    default:
      console.log(mensaje.bgWhite);
      break;
  }
};
module.exports = message;