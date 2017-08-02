'use strict';

var _FamilyGroupModel = require('./FamilyGroupModel');

var _FamilyGroupModel2 = _interopRequireDefault(_FamilyGroupModel);

var _PatientModel = require('./PatientModel');

var _PatientModel2 = _interopRequireDefault(_PatientModel);

var _mongoose = require('mongoose');

var _mongoose2 = _interopRequireDefault(_mongoose);

var _lodash = require('lodash');

var _lodash2 = _interopRequireDefault(_lodash);

var _Utils = require('../Utils.js');

var _Utils2 = _interopRequireDefault(_Utils);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

//fields that should not be returned on get requests
var fieldsNotReturn = '-password -__v';
//fields that should be returned on get list requests
var fieldsReturnList = '';

/**
 * Function for get patient by Id
 * @param: id: patient id wich will be found
 * @param: projection: what will be returned
 * @param: callback: callback function wich will response patient or error
 * @return: callback object
 **/
exports.getPatientById = function (id, projection, callback) {
	_FamilyGroupModel2.default.FamilyGroup.findOne({
		"paciente.dadosPessoais.cpf": id
	}, function (error, familygroup) {
		console.log(familygroup);
		if (familygroup) {
			callback({
				done: true,
				"familygroup": familygroup
			});
			return familygroup;
		}
	});
};

/**
 * Function for create familygroup general
 * @param: familygroup
 * @param: callback: callback function wich will response true or false
 * @return: callback object
 **/

exports.insertFamilyGroup = function (familygroupPersist, callback) {
	//console.log("LOG ERRO: 	" + familygroupPersist);
	_FamilyGroupModel2.default.FamilyGroup.findOne({
		"paciente.dadosPessoais.cpf": familygroupPersist.paciente.dadosPessoais.cpf
	}, function (error, familygroup) {
		//console.log(pacientePersist.dadosPessoais.cpf);
		if (familygroup) {

			if (familygroup.paciente.dadosPessoais.cpf == familygroupPersist.paciente.dadosPessoais.cpf) {
				callback({
					done: false,
					"message": "Cpf já cadastrado"
				});
			}
		} else {

			_FamilyGroupModel2.default.FamilyGroup.create(familygroupPersist, function (err, familygroup) {
				if (err) {
					callback({
						done: false,
						"error": err,
						"message": "Failed on create familygroup"
					});
				} else {
					callback({
						done: true,
						"familygroup": familygroup
					});
				}
			}); //end if
		}
	});
};

/**
 * Function for update familygroup general 
 * @param: familygroup 
 * @param: callback: callback function wich will response true or false
 * @return: callback object
 **/
exports.updateFamilyGroupGeneral = function (id, familygroup, callback) {};

/**
 * Function for update familygroup patient info
 * @param: id: familygroup id
 * @param: patientInfo {keys : values}
 * @param: callback: callback function wich will response true or false
 * @return: callback object
 **/
exports.updatePatientInfo = function (id, patientInfo, callback) {
	_FamilyGroupModel2.default.FamilyGroup.findByIdAndUpdate(id, { $set: { paciente: patientInfo } }, { new: true }, function (err, familygroup) {
		if (err) {
			callback({
				done: false,
				"error": err,
				"message": "Erro ao atualizar dados paciente"
			});
		} else {
			callback({
				done: true,
				"familygroup": familygroup
			});
		}
	});
};

/**
 * Function remove familygroup patient medicines
 * @param: id: familygroup id
 * @param: medicineId to remove
 * @param: callback: callback function wich will response true or false
 * @return: callback object
 **/
exports.removePatientMedicines = function (id, medicineId, callback) {

	_FamilyGroupModel2.default.FamilyGroup.findOneAndUpdate({ _id: id }, { '$pull': { "medicamentos": { _id: medicineId } } }, function (err, medicine) {
		if (err) {
			callback({
				done: false,
				"error": err,
				"message": "Erro ao tentar incluir medicamentos"
			});
		} else {
			callback({
				done: true
			});
		}
	});
};

/**
 * Function for update familygroup patient medicines
 * @param: id: familygroup id
 * @param: patientMedicine {keys : values}
 * @param: callback: callback function wich will response true or false
 * @return: callback object
 **/
exports.updatePatientMedicines = function (id, patientMedicine, callback) {};

/**
 * Function for update familygroup patient expenses
 * @param: id: familygroup id
 * @param: patientExpense {keys : values}
 * @param: callback: callback function wich will response true or false
 * @return: callback object
 **/
exports.updatePatientExpenses = function (id, patientExpense, callback) {};

/**
 * Function for update familygroup patient compromises
 * @param: id: familygroup id
 * @param: patientCompromise {keys : values}
 * @param: callback: callback function wich will response true or false
 * @return: callback object
 **/
exports.updatePatientCompromises = function (id, patientCompromise, compromiseId, callback) {

	var query = void 0;
	var action = void 0;
	var getNew = false;
	if (!compromiseId) {
		query = { _id: id };
		action = { '$push': { agendaMedica: patientCompromise } };
		getNew = true;
	} else {
		query = { $and: [{ _id: id }, { "agendaMedica._id": compromiseId }] }, action = { '$set': { "agendaMedica.$": patientCompromise } };
	}
	_FamilyGroupModel2.default.FamilyGroup.findOneAndUpdate(query, action, { new: getNew }, function (err, compromise) {
		if (err) {
			callback({
				done: false,
				"error": err,
				"message": "Erro ao tentar incluir compromisso"
			});
		} else {
			callback({
				done: true
			});
		}
	});
};

/**
 * Function remove familygroup patient compromises
 * @param: id: familygroup id
 * @param: compromiseId to remove
 * @param: callback: callback function wich will response true or false
 * @return: callback object
 **/
exports.removePatientCompromises = function (id, compromiseId, callback) {

	_FamilyGroupModel2.default.FamilyGroup.findOneAndUpdate({ _id: id }, { '$pull': { "agendaMedica": { _id: compromiseId } } }, function (err, compromise) {
		if (err) {
			callback({
				done: false,
				"error": err,
				"message": "Erro ao tentar incluir compromisso"
			});
		} else {
			callback({
				done: true
			});
		}
	});
};

/**
 * Function for update familygroup patient medicines
 * @param: id: familygroup id
 * @param: patientMedicine {keys : values}
 * @param: callback: callback function wich will response true or false
 * @return: callback object
 **/
exports.updatePatientMedicines = function (id, patientMedicine, medicineId, callback) {
	var query = void 0;
	var action = void 0;
	var getNew = false;
	if (!medicineId) {
		query = { _id: id };
		action = { '$push': { medicamentos: patientMedicine } };
		getNew = true;
	} else {
		query = { $and: [{ _id: id }, { "medicamentos._id": medicineId }] }, action = { '$set': { "medicamentos.$": patientMedicine } };
	}
	_FamilyGroupModel2.default.FamilyGroup.findOneAndUpdate(query, action, { new: getNew }, function (err, medicine) {
		if (err) {
			callback({
				done: false,
				"error": err,
				"message": "Erro ao tentar incluir compromisso"
			});
		} else {
			callback({
				done: true
			});
		}
	});
};

/**
 * Function for get all familygroups
 * @param: callback: callback function wich will response familygroups or false
 * @return: callback object
 **/
exports.getFamilyGroups = function (callback) {};

/**
 * Function for get familygroup by Id
 * @param: id: familygroup id wich will be found
 * @param: projection: what will be returned
 * @param: callback: callback function wich will response familygroup or error
 * @return: callback object
 **/
exports.getFamilyGroupById = function (id, projection, callback) {

	_FamilyGroupModel2.default.FamilyGroup.findOne({
		_id: id
	})
	//.select(projection)
	.exec(function (error, familygroup) {

		if (error) {

			callback({
				"done": false,
				"error": error,
				"message": "Failed on get term"
			});
		} else {
			callback({
				done: true,
				"familygroup": familygroup
			});
		}
	});
};

/**
 * Function remove familygroup by Id
 * @param: id: familygroup id wich will be  removed
 * @param: callback: callback function wich will response true or error
 * @return: callback
 **/
exports.removeFamilyGroup = function (id, callback) {};