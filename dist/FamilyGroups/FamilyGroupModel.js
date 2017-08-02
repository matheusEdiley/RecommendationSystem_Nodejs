'use strict';

var _dbConfig = require('../dbConfig.js');

var _mongoose = require('mongoose');

var _mongoose2 = _interopRequireDefault(_mongoose);

var _PatientModel = require('./PatientModel');

var _PatientModel2 = _interopRequireDefault(_PatientModel);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

//handle connection error
_dbConfig.db.on('error', console.error.bind(console, 'Erro ao conectar no banco'));

//when open up db connection
_dbConfig.db.once('open', function () {

	var schema = _mongoose2.default.Schema;

	var agendaMedicaSchema = new schema({
		tipoCompromisso: {
			type: String,
			required: false
		},
		observacaoCompromisso: {
			type: String,
			required: false
		},
		dataCompromisso: {
			type: Date,
			required: false
		},
		usuarioId: {
			type: String,
			required: false
		}
	});

	var medicamentosSchema = new schema({
		nomeMedicamento: {
			type: String,
			required: false
		},
		dosagemMedicamento: {
			type: String,
			required: false
		},
		tempoMedicamento: {
			type: String,
			required: false
		},
		usuarioId: {
			type: String,
			required: false
		}
	});

	var familyGroupSchema = new schema({

		membrosFamiliares: {
			type: [{
				userId: String,
				isAdmin: Boolean,
				vinculo: String
			}],
			ref: 'User',
			required: true
		},

		paciente: {
			type: { patientSchema: _PatientModel2.default },
			required: true
		},

		agendaMedica: {
			type: [agendaMedicaSchema],
			required: false
		},

		medicamentos: {
			type: [medicamentosSchema],
			required: false
		}

	}, {
		collection: 'FamilyGroups'
	});

	// include indexes
	//familyGroupSchema.index({ field: 1 });
	module.exports.FamilyGroup = _mongoose2.default.model('FamilyGroup', familyGroupSchema);
});