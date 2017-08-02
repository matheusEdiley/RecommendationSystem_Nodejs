import express from 'express';
import bodyParser from 'body-parser';
import expressValidator from 'express-validator';
import morgan from 'morgan';
import config from 'config'; //we load the db location from the JSON files

const server = express();

//para usar o complemento bodyParser é necessário informar
//à aplicação e configurar o urlEncode
server.use(bodyParser.json());
server.use(expressValidator()); // this line must be immediately after any of the bodyParser middlewares! 
server.use(bodyParser.urlencoded({
  extended: true
}));

//função para permitir domínios requisitar e enviar jsons a esse web service permitindo CORS Domain
//essa função irá adicionar headers a cada resposta de requisição
//esses headers que contem informações sobre permissões desse webservice
//alem dos parametros 'req' e 'res' existe o 'next' que informa a aplicação que apos adicionar os headers, a mesma pode dar prosseguimento
const allowCors = function (req, res, next) {
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
}

//don't show the log when it is test
if (config.util.getEnv('NODE_ENV') !== 'test') {
  //use morgan to log at command line
  server.use(morgan('combined')); //'combined' outputs the Apache style LOGs
}

//informa a aplicação para usar os headers para CORS
server.use(allowCors);

//defini a porta na qual a aplicação irá responder
server.listen(process.env.PORT || 5000);
console.log(process.env.PORT);
//export server para o entry-point
export { server }; 
