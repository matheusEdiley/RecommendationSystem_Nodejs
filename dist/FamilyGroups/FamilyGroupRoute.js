'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.FamilyGroupRoute = undefined;

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _FamilyGroupController = require('./FamilyGroupController');

var _FamilyGroupController2 = _interopRequireDefault(_FamilyGroupController);

var _FamilyGroupSchemaValidation = require('./FamilyGroupSchemaValidation');

var _util = require('util');

var _util2 = _interopRequireDefault(_util);

var _Utils = require('../Utils.js');

var _Utils2 = _interopRequireDefault(_Utils);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var FamilyGroupRoute = _express2.default.Router();

/**
 * Method HTTP: POST
 * URI        : /familygroup
 * URL        : /
 * Create FamilyGroup
 **/
//for express validator
FamilyGroupRoute.post('/general', function (req, res) {

	//expressValidator check validation using FamilyGroupSchemaValidation
	//req.checkBody(FamilyGroupSchemaValidation.general);

	req.getValidationResult().then(function (result) {
		//check if validation result has any error
		if (!result.isEmpty()) {
			res.status(400).send({
				"done": false,
				"errors": result.array()
			});
			return;
		}

		var familygroup = req.body;
		console.log(familygroup);
		_FamilyGroupController2.default.insertFamilyGroup(familygroup, function (response) {
			res.json(response);
		});
	});
});

/**
 * Method HTTP: POST
 * URI        : /familygroup
 * URL        : /:id/patient/personalinfo
 * Update patient personalInfo route
 **/
FamilyGroupRoute.post('/:id/patient/personalinfo', function (req, res) {

	//expressValidator check validation using FamilyGroupSchemaValidation
	//req.checkBody(FamilyGroupSchemaValidation.pacienteInfo);

	req.getValidationResult().then(function (result) {
		//check if validation result has any error
		if (!result.isEmpty()) {
			res.status(400).send({
				"done": false,
				"errors": result.array()
			});
			return;
		}

		var familygroupId = req.params.id;
		var patientInfo = req.body;

		_FamilyGroupController2.default.updatePatientInfo(familygroupId, patientInfo, function (response) {
			res.json(response);
		});
	});
});

/**
 * Method HTTP: POST
 * URI        : /familygroup
 * URL        : /patient/personalinfo
 * Update patient personalInfo route
 **/
FamilyGroupRoute.post('/patient/personalinfo', function (req, res) {

	//expressValidator check validation using FamilyGroupSchemaValidation
	//req.checkBody(FamilyGroupSchemaValidation.patientInfo);
	req.getValidationResult().then(function (result) {
		//check if validation result has any error
		if (!result.isEmpty()) {
			res.status(400).send({
				"done": false,
				"errors": result.array()
			});
			return;
		}

		var patientInfo = req.body;

		_FamilyGroupController2.default.insertPatientInfo(patientInfo, function (response) {
			res.json(response);
			console.log(response.patient._id);
		});
	});
});

/**
 * Method HTTP: POST
 * URI        : /familygroup
 * URL        : /:id/patient/medices
 * Update patient medicines route
 **/
FamilyGroupRoute.post('/:id/patient/medices', function (req, res) {

	//expressValidator check validation using FamilyGroupSchemaValidation
	req.checkBody(_FamilyGroupSchemaValidation.FamilyGroupSchemaValidation.medicineValidation);

	req.getValidationResult().then(function (result) {
		//check if validation result has any error
		if (!result.isEmpty()) {
			res.status(400).send({
				"done": false,
				"errors": result.array()
			});
			return;
		}

		var familygroupId = req.params.id;
		var patientMedicice = req.body;

		_FamilyGroupController2.default.updatePatientMedicines(familygroupId, patientMedicice, function (response) {
			res.json(response);
		});
	});
});

/**
 * Method HTTP: DELETE
 * URI        : /familygroup
 * URL        : /:id/patient/medicines
 * Update patient medicines route
 **/
FamilyGroupRoute.delete('/:id/patient/medicines/:medicineId', function (req, res) {

	//expressValidator check validation using FamilyGroupSchemaValidation
	req.checkBody(_FamilyGroupSchemaValidation.FamilyGroupSchemaValidation.medicineValidation);

	req.getValidationResult().then(function (result) {
		//check if validation result has any error
		if (!result.isEmpty()) {
			res.status(400).send({
				"done": false,
				"errors": result.array()
			});
			return;
		}

		var familygroupId = req.params.id;
		var medicineId = req.params.medicineId;
		_FamilyGroupController2.default.removePatientMedicines(familygroupId, medicineId, function (response) {
			res.json(response);
		});
	});
});

/**
 * Method HTTP: POST
 * URI        : /familygroup
 * URL        : /:id/patient/medices
 * Update patient expenses route
 **/
FamilyGroupRoute.post('/:id/patient/expenses', function (req, res) {

	//expressValidator check validation using FamilyGroupSchemaValidation
	req.checkBody(_FamilyGroupSchemaValidation.FamilyGroupSchemaValidation.expenseValidation);

	req.getValidationResult().then(function (result) {
		//check if validation result has any error
		if (!result.isEmpty()) {
			res.status(400).send({
				"done": false,
				"errors": result.array()
			});
			return;
		}

		var familygroupId = req.params.id;
		var patientxpense = req.body;

		_FamilyGroupController2.default.updatepatientxpenses(familygroupId, patientxpense, function (response) {
			res.json(response);
		});
	});
});

/**
 * Method HTTP: POST
 * URI        : /familygroup
 * URL        : /:id/patient/compromises
 * Update patient compromises route
 **/
FamilyGroupRoute.post('/:id/patient/compromises/:compromiseId?', function (req, res) {

	//expressValidator check validation using FamilyGroupSchemaValidation
	req.checkBody(_FamilyGroupSchemaValidation.FamilyGroupSchemaValidation.compromiseValidation);

	req.getValidationResult().then(function (result) {
		//check if validation result has any error
		if (!result.isEmpty()) {
			res.status(400).send({
				"done": false,
				"errors": result.array()
			});
			return;
		}

		var familygroupId = req.params.id;
		var patientCompromise = req.body;
		var compromiseId = req.params.compromiseId;
		_FamilyGroupController2.default.updatePatientCompromises(familygroupId, patientCompromise, compromiseId, function (response) {
			res.json(response);
		});
	});
});

/**
 * Method HTTP: DELETE
 * URI        : /familygroup
 * URL        : /:id/patient/compromises
 * Update patient compromises route
 **/
FamilyGroupRoute.delete('/:id/patient/compromises/:compromiseId', function (req, res) {

	//expressValidator check validation using FamilyGroupSchemaValidation
	req.checkBody(_FamilyGroupSchemaValidation.FamilyGroupSchemaValidation.compromiseValidation);

	req.getValidationResult().then(function (result) {
		//check if validation result has any error
		if (!result.isEmpty()) {
			res.status(400).send({
				"done": false,
				"errors": result.array()
			});
			return;
		}

		var familygroupId = req.params.id;
		var compromiseId = req.params.compromiseId;
		_FamilyGroupController2.default.removePatientCompromises(familygroupId, compromiseId, function (response) {
			res.json(response);
		});
	});
});

/**
 * Method HTTP: POST
 * URI        : /familygroup
 * URL        : /:id/patient/compromises
 * Update patient compromises route
 **/
FamilyGroupRoute.post('/:id/patient/medicines/:medicineId?', function (req, res) {

	//expressValidator check validation using FamilyGroupSchemaValidation
	//req.checkBody(FamilyGroupSchemaValidation.compromiseValidation);

	req.getValidationResult().then(function (result) {
		//check if validation result has any error
		if (!result.isEmpty()) {
			res.status(400).send({
				"done": false,
				"errors": result.array()
			});
			return;
		}

		var familygroupId = req.params.id;
		var patientMedicine = req.body;
		var medicineId = req.params.medicineId;

		_FamilyGroupController2.default.updatePatientMedicines(familygroupId, patientMedicine, medicineId, function (response) {
			res.json(response);
		});
	});
});

/**
 * Method HTTP: PUT
 * URI        : /familygroup
 * URL        : /:id
 * Update FamilyGroup route
 **/
FamilyGroupRoute.put('/:id', function (req, res) {

	//expressValidator check validation using FamilyGroupSchemaValidation
	req.checkBody(_FamilyGroupSchemaValidation.FamilyGroupSchemaValidation);

	req.getValidationResult().then(function (result) {
		//check if validation result has any error
		if (!result.isEmpty()) {
			res.status(400).send({
				"done": false,
				"errors": result.array()
			});
			return;
		}

		var id = req.params.id;
		var familygroup = req.body;

		_FamilyGroupController2.default.updateFamilyGroup(id, familygroup, function (response) {
			res.json(response);
		});
	});
});

/**
 * Method HTTP: GET
 * URI        : /familygroup
 * URL        : /
 * Get all FamilyGroups
 **/
FamilyGroupRoute.get('/', function (req, res) {

	_FamilyGroupController2.default.getFamilyGroups(function (response) {
		res.json(response);
	});
});

/**
 * Method HTTP: GET
 * URI        : /familygroup/:id/general
 * URL        : /:id/general
 * Param	  : familygroup id wich will be returned
 * Get familygroup by Id
 **/
FamilyGroupRoute.get('/:id/general', function (req, res) {

	var id = req.params.id;
	var projection = "";
	_FamilyGroupController2.default.getFamilyGroupById(id, projection, function (response) {
		res.json(response);
	});
});

/**
 * Method HTTP: GET
 * URI        : /familygroup/:id/patient/personalinfo
 * URL        : /:id/patient/personalinfo
 * Param	  : familygroup id wich will be returned
 * Get patient by familyGroupId
 **/
FamilyGroupRoute.get('/:id/patient/personalinfo', function (req, res) {

	var id = req.params.id;
	var projection = "paciente";
	_FamilyGroupController2.default.getFamilyGroupById(id, projection, function (response) {
		res.json(response);
	});
});

/**
 * Method HTTP: GET
 * URI        : /familygroup/:id/patient/medicines
 * URL        : /:id/patient/medicines
 * Param	  : familygroup id wich will be returned
 * Get patient medicines by familyGroupId
 **/
FamilyGroupRoute.get('/:id/patient/medicines', function (req, res) {

	var id = req.params.id;
	var projection = "familyGroup";
	_FamilyGroupController2.default.getFamilyGroupById(id, projection, function (response) {
		res.json(response);
	});
});

/**
 * Method HTTP: GET
 * URI        : /familygroup/:id/patient/expenses
 * URL        : /:id/patient/expenses
 * Param	  : familygroup id wich will be returned
 * Get patient expenses by familyGroupId
 **/
FamilyGroupRoute.get('/:id/patient/expenses', function (req, res) {

	var id = req.params.id;
	var projection = "expenses";
	_FamilyGroupController2.default.getFamilyGroupById(id, projection, function (response) {
		res.json(response);
	});
});

/**
 * Method HTTP: GET
 * URI        : /familygroup/:id/patient/compromises
 * URL        : /:id/patient/compromises
 * Param	  : familygroup id wich will be returned
 * Get patient compromises by familyGroupId
 **/
FamilyGroupRoute.get('/:id/patient/compromises', function (req, res) {

	var id = req.params.id;
	var projection = "agendaMedica";
	_FamilyGroupController2.default.getFamilyGroupById(id, projection, function (response) {
		res.json(response);
	});
});

/**
 * Method HTTP: DELETE
 * URI        : /familygroup/:id
 * URL        : /:id
 * Param	  : familygroup id wich will be removed
 * Delete familygroup by Id
 **/
FamilyGroupRoute.delete('/:id', function (req, res) {
	var id = req.params.id;

	_FamilyGroupController2.default.removeFamilyGroup(owner, id, function (response) {
		res.json(response);
	});
});

/**
 * Method HTTP: GET
 * URI        : /familygroup/heroku
 * URL        : /
 **/
FamilyGroupRoute.get('/heroku', function (req, res) {
	res.json({
		message: "Hello heroku!"
	});
});

exports.FamilyGroupRoute = FamilyGroupRoute;