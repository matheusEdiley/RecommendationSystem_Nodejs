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

	var studentSchema = new schema({
		college: {
			type: String,
			required: false
		},
		season: {
			type: String,
			required: true
		},
		interestArea: {
			type: String,
			required: true
		}
	});

	var lawyerSchema = new schema({
		ocupationArea: {
			type: String,
			required: true
		},
		employment: {
			type: String,
			required: true
		},
		OABRegister: {
			type: String,
			required: true
		}
	});

	var citizenSchema = new schema({
		cpf: {
			type: String,
			required: true
		},
		birthDate: {
			type: Date,
			required: false
		}
	});

	var userSchema = new schema({

		name: {
			type: String,
			default: "",
			required: false
		},
		email: {
			type: String,
			default: "",
			required: false
		},
		userType: {
			type: String,
			required: false
		},
		password: {
			type: String,
			required: true
		},

		// student: {
		// 	type: studentSchema,
		// 	required: true
		// },
		// lawyer: {
		// 	type: lawyerSchema,
		// 	required: true
		// },
		// citizen: {
		// 	type: citizenSchema,
		// 	required: true
		// },
		registerDate: {
			type: Date,
			default: Date.now,
			required: true
		}
	}, {
		collection: 'Users'
	});

	module.exports.User = _mongoose2.default.model('User', userSchema);
});