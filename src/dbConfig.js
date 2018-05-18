//***** Coonfiguração Banco *********

import mongoose from 'mongoose';
import deploy from '../config/deploy.json'

let devStringConnection = "mongodb://127.0.0.1:27017/db";
let testStringConnection = "mongodb://127.0.0.1:27017/db_test";

//busca a string de conexão com banco dos arquivos na pasta /config
//a variavel DBHost corresponde a string de conexão de acordo com o modo de execução(dev, test)
const db_string_conexao = deployString;

//é necessário informar ao mongoose qual library promise ele deve usar
//para acesso assíncrono ao mongoDB
// Use native promises
mongoose.Promise = global.Promise;
//seta conexão com o banco usando a string de conexao
mongoose.connect(db_string_conexao, { useMongoClient: true });
// //variavel db pega a conexão com banco
const db =   mongoose.connection;

export {db}; 
    