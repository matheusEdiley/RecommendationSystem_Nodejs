'use strict';

var _dbConfig = require('../dbConfig.js');

var _mongoose = require('mongoose');

var _mongoose2 = _interopRequireDefault(_mongoose);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

//caso erro ao abrir conexao no banco..
//process.env.NODE_ENV = 'test';
_dbConfig.db.on('error', console.error.bind(console, 'Erro ao conectar no banco'));

//quando abrir a conexão
_dbConfig.db.once('open', function () {

    var schema = _mongoose2.default.Schema;

    var feedSchema = new schema({

        name: {
            type: String,
            required: false
        },
        type: {
            type: String,
            required: true
        },
        description: {
            type: String,
            required: true
        },
        link: {
            type: String,
            required: true
        },
        content: {
            type: String,
            required: false
        },
        currentDateTime: {
            type: Date,
            default: Date.now(),
            required: true
        }

    }, {
        collection: 'feed'
    });

    module.exports.Feed = _mongoose2.default.model('Feed', feedSchema);
});