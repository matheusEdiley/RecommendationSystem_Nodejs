'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.db = undefined;

var _mongoose = require('mongoose');

var _mongoose2 = _interopRequireDefault(_mongoose);

var _deploy = require('../config/deploy.json');

var _deploy2 = _interopRequireDefault(_deploy);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

//***** Coonfiguração Banco *********

var devStringConnection = "mongodb://127.0.0.1:27017/direitoja";
var testStringConnection = "mongodb://127.0.0.1:27017/ws_az_test";
var deployString = "mongodb://direitoja:abc12345@ds127963.mlab.com:27963/direitoja";
//busca a string de conexão com banco dos arquivos na pasta /config
//a variavel DBHost corresponde a string de conexão de acordo com o modo de execução(dev, test)
var db_string_conexao = devStringConnection;

//é necessário informar ao mongoose qual library promise ele deve usar
//para acesso assíncrono ao mongoDB
// Use native promises
_mongoose2.default.Promise = global.Promise;
//seta conexão com o banco usando a string de conexao
_mongoose2.default.connect(db_string_conexao, { useMongoClient: true });
// //variavel db pega a conexão com banco
var db = _mongoose2.default.connection;

exports.db = db;