'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.server = undefined;

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _bodyParser = require('body-parser');

var _bodyParser2 = _interopRequireDefault(_bodyParser);

var _expressValidator = require('express-validator');

var _expressValidator2 = _interopRequireDefault(_expressValidator);

var _morgan = require('morgan');

var _morgan2 = _interopRequireDefault(_morgan);

var _config = require('config');

var _config2 = _interopRequireDefault(_config);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

//we load the db location from the JSON files

var server = (0, _express2.default)();

//para usar o complemento bodyParser é necessário informar
//à aplicação e configurar o urlEncode
server.use(_bodyParser2.default.json());
server.use((0, _expressValidator2.default)()); // this line must be immediately after any of the bodyParser middlewares! 
server.use(_bodyParser2.default.urlencoded({
  extended: true
}));

//função para permitir domínios requisitar e enviar jsons a esse web service permitindo CORS Domain
//essa função irá adicionar headers a cada resposta de requisição
//esses headers que contem informações sobre permissões desse webservice
//alem dos parametros 'req' e 'res' existe o 'next' que informa a aplicação que apos adicionar os headers, a mesma pode dar prosseguimento
var allowCors = function allowCors(req, res, next) {
  //header que determina lista de dominios altorizados a trocar informação com esse webservice
  res.header('Access-Control-Allow-Origin', '*');
  //res.header('Cache-Control','no-cache');
  //header que  lista metodos disponibilizados por esse webservice
  res.header('Access-Control-Allow-Methods', 'GET,POST,PUT,DELETE');
  //res.header('Access-Control-Allow-Headers', 'X-Requested-With, content-type, application/json');
  res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
  res.header('Access-Control-Allow-Credentials', true);
  //apos setar hedears à resposta, continua o processamento
  next();
};

//don't show the log when it is test
if (_config2.default.util.getEnv('NODE_ENV') !== 'test') {
  //use morgan to log at command line
  server.use((0, _morgan2.default)('combined')); //'combined' outputs the Apache style LOGs
}

//informa a aplicação para usar os headers para CORS
server.use(allowCors);

//defini a porta na qual a aplicação irá responder
server.listen(process.env.PORT || 5000);
console.log(process.env.PORT);
//export server para o entry-point
exports.server = server;