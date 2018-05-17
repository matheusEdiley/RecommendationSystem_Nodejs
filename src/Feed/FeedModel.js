//process.env.NODE_ENV = 'test';
import { db } from '../dbConfig.js';
import mongoose from 'mongoose';
//caso erro ao abrir conexao no banco..
db.on('error', console.error.bind(console, 'Erro ao conectar no banco'));

//quando abrir a conexão
db.once('open', () => {

    const schema = mongoose.Schema;

    const feedSchema = new schema({

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

   

    module.exports.Feed= mongoose.model('Feed', feedSchema);

});