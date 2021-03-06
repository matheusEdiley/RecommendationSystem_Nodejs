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

    var stepOneSchema = new schema({

        name: {
            type: String,
            required: false
        },
        description: {
            type: String,
            required: true
        },
        examples: {
            type: String,
            required: true
        }
    }, {
        collection: 'stepOne'
    });

    var stepTwoSchema = new schema({

        name: {
            type: String,
            required: false
        },
        description: {
            type: String,
            required: true
        },
        examples: {
            type: String,
            required: true
        },
        stepOneId: {
            type: String,
            ref: 'StepOne',
            required: true
        }

    }, {
        collection: 'stepTwo'
    });

    var stepThreeSchema = new schema({

        name: {
            type: String,
            required: false
        },
        description: {
            type: String,
            required: true
        },
        tags: {
            type: [],
            required: true
        },
        stepTwoId: {
            type: String,
            ref: 'StepTwo',
            required: true
        }
    }, {
        collection: 'stepThree'
    });

    var recommendationSchema = new schema({
        description: {
            type: String,
            required: true
        },
        complement: {
            type: String,
            required: true
        },
        deadline: {
            type: String,
            required: true
        },
        caution: {
            type: String,
            required: true
        },
        stepThreeId: {
            type: String,
            ref: 'StepThree',
            required: true
        }
    }, {
        collection: 'recommendation'
    });

    module.exports.StepOne = _mongoose2.default.model('StepOne', stepOneSchema);
    module.exports.StepTwo = _mongoose2.default.model('Steptwo', stepTwoSchema);
    module.exports.StepThree = _mongoose2.default.model('StepThree', stepThreeSchema);
    module.exports.Recommendation = _mongoose2.default.model('Recommendation', recommendationSchema);
});