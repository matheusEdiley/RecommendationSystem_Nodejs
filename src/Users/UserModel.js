//process.env.NODE_ENV = 'test';
import { db } from '../dbConfig.js';
import mongoose from 'mongoose';
//caso erro ao abrir conexao no banco..
db.on('error', console.error.bind(console, 'Erro ao conectar no banco'));

//quando abrir a conexão
db.once('open', () => {

	const schema = mongoose.Schema;

	const studentSchema = new schema({
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

	const lawyerSchema = new schema({
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

	const citizenSchema = new schema({
		cpf: {
			type: String,
			required: true
		}, 
		birthDate: {
			type: Date,
			required: false,
		}
	});

	const userSchema = new schema({

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
			required: true,
		}
	}, {
			collection: 'Users'
		});

	module.exports.User = mongoose.model('User', userSchema);
});