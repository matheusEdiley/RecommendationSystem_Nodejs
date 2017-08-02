//process.env.NODE_ENV = 'test';
import { db } from '../dbConfig.js';
import mongoose from 'mongoose';
//caso erro ao abrir conexao no banco..
db.on('error', console.error.bind(console, 'Erro ao conectar no banco'));

//quando abrir a conexão
db.once('open', () => {

	const schema = mongoose.Schema;

	const userSchema = new schema({

		nomeCompleto: {
			type: String,
			default: "",
			required: false
		},
		email: {
			type: String,
			default: "",
			required: false
		},
		senha: {
			type: String,
			required: true
		},
		dataCadastro: {
			type: Date,
			default: Date.now,
			required: true,
		}
	}, {
			collection: 'Users'
		});

	module.exports.User = mongoose.model('User', userSchema);
});