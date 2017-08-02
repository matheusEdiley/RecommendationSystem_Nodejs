//process.env.NODE_ENV = 'test';
import { db } from '../dbConfig.js';
import mongoose from 'mongoose';
//caso erro ao abrir conexao no banco..
db.on('error', console.error.bind(console, 'Erro ao conectar no banco'));

//quando abrir a conexão
db.once('open', () => {

    const schema = mongoose.Schema;
    
    const stepOneSchema = new schema({

        icon: {
            type: String,
            required: false
        },
        name: {
            type: String,
            required: false
        },
        description: {
            type: String,
            required: true
        }
    }, {
            collection: 'stepOne'
        });

    const stepTwoSchema = new schema({

        icon: {
            type: String,
            required: false
        },
        name: {
            type: String,
            required: false
        },
        description: {
            type: String,
            required: true
        },
        stepOne: {
            type: stepOneSchema,
            required: true
        }
    }, {
            collection: 'stepTwo'
        });

    const stepThreeSchema = new schema({

        icon: {
            type: String,
            required: false
        },
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
        stepTwo: {
            type: stepTwoSchema,
            required: true
        }
    }, {
            collection: 'stepThree'
        });

    const recommendationSchema = new schema({
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
        stepThree: {
            type: stepThreeSchema,
            required: true
        }
    }, {
            collection: 'recommendation'
        });

    module.exports.StepOne = mongoose.model('StepOne', stepOneSchema);
    module.exports.StepTwo = mongoose.model('Steptwo', stepTwoSchema);
    module.exports.StepThree = mongoose.model('StepThree', stepThreeSchema);
    module.exports.Recommendation = mongoose.model('Recommendation', recommendationSchema);
    
});