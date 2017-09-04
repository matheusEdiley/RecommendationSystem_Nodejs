'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.UserRoute = undefined;

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _UserController = require('./UserController');

var _UserController2 = _interopRequireDefault(_UserController);

var _UserSchemaValidation = require('./UserSchemaValidation');

var _util = require('util');

var _util2 = _interopRequireDefault(_util);

var _Utils = require('../Utils.js');

var _Utils2 = _interopRequireDefault(_Utils);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var UserRoute = _express2.default.Router();

/**
* Method HTTP: POST
* URI        : /users/login
* URL        : /login
* Register users route
**/
//for express validator
UserRoute.post('/login', function (req, res) {

	//expressValidator check validation using UserSchemaValidation
	//req.checkBody(UserSchemaValidation.userInsertValidation);

	req.getValidationResult().then(function (result) {
		//check if validation result has any error
		if (!result.isEmpty()) {
			res.status(400).send({
				"done": false,
				"errors": result.array()
			});
			return;
		}

		var user = req.body;
		console.log(JSON.stringify(user));
		_UserController2.default.insertUser(user, function (response) {
			res.json(response);
		});
	});
});

/**
* Method HTTP: POST
* URI        : /users/:id
* URL        : /:id
* Update user infos route
**/
UserRoute.post('/:id', function (req, res) {

	//expressValidator check validation using UserSchemaValidation
	req.checkBody(_UserSchemaValidation.UserSchemaValidation.userUpdateValidation);

	req.getValidationResult().then(function (result) {
		//check if validation result has any error
		if (!result.isEmpty()) {
			res.status(400).send({
				"done": false,
				"errors": result.array()
			});
			return;
		}

		var user = req.body;
		var id = req.params.id;
		console.log("ID:", id);
		_UserController2.default.updateUser(id, user, function (response) {
			res.json(response);
		});
	});
});

/**
* Method HTTP: PUT
* URI        : /users
* URL        : /
* Register users route
**/
UserRoute.put('/:id', function (req, res) {

	//expressValidator check validation using UserSchemaValidation
	req.checkBody(_UserSchemaValidation.UserSchemaValidation.userUpdateValidation);

	req.getValidationResult().then(function (result) {
		//check if validation result has any error
		if (!result.isEmpty()) {
			res.send({
				"done": false,
				"errors": result.array()
			}, 400);
			return;
		}

		var user = req.body;

		_UserController2.default.updateUser(user, function (response) {
			res.json(response);
		});
	});
});

/**
* Method HTTP: GET
* URI        : /users
* URL        : /
* Get all users
**/
UserRoute.get('/:id', function (req, res) {
	var userId = req.params.id;

	_UserController2.default.getUsers(userId, function (response) {
		res.json(response);
	});
});

/**
* Method HTTP: GET
* URI        : /users/:id
* URL        : /:id
* Param			 : user id wich will be returned
* Get user by Id
**/
UserRoute.get('/user/:id', function (req, res) {

	var id = req.params.id;

	_UserController2.default.getUserById(id, function (response) {
		res.json(response);
	});
});

// /**
// * Method HTTP: GET
// * URI        : /users/:id
// * URL        : /:id
// * Param			 : user id wich will be returned
// * Get user by Name
// **/
// UserRoute.get('/:userName', (req, res) => {

// 	UserController.getUserByName((response) => {
// 		res.json(response);
// 	});

// });

/**
* Method HTTP: DELETE
* URI        : /users/:id
* URL        : /:id
* Param			 : user id wich will be removed
* Delete users by Id
**/
UserRoute.delete('/:id', function (req, res) {

	_UserController2.default.removeUser(function (response) {
		res.json(response);
	});
});

exports.UserRoute = UserRoute;