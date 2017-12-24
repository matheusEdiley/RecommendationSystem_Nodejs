import express from 'express';
import UserController from './UserController';
import { UserSchemaValidation } from './UserSchemaValidation';
import util from 'util'; //for express validator
import Utils from '../Utils.js';

const UserRoute = express.Router();

UserRoute.get('/:email/user', (req, res) => {
	
	const email = req.params.email;
	console.log(email);
	UserController.passwordRecorvery(email, (response) => {
		res.json(response);
	});

});

/**
* Method HTTP: POST
* URI        : /users/user
* URL        : /user
* Register users route
**/
UserRoute.post('/user', (req, res) => {

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

		const user = req.body;
		console.log(JSON.stringify(user));
		UserController.insertUser(user, (response) => {
			res.json(response);
		});
	});
});

/**
* Method HTTP: POST
* URI        : /users/login
* URL        : /login
* Register users route
**/
UserRoute.post('/login', (req, res) => {

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

		const user = req.body;
		//console.log(JSON.stringify(user));
		UserController.loginUser(user, (response) => {
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
UserRoute.post('/:id', (req, res) => {

	//expressValidator check validation using UserSchemaValidation
	req.checkBody(UserSchemaValidation.userUpdateValidation);

	req.getValidationResult().then(function (result) {
		//check if validation result has any error
		if (!result.isEmpty()) {
			res.status(400).send({
				"done": false,
				"errors": result.array()
			});
			return;
		}

		const user = req.body;
		const id = req.params.id;
		console.log("ID:", id);
		UserController.updateUser(id, user, (response) => {
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
UserRoute.put('/:id', (req, res) => {

	//expressValidator check validation using UserSchemaValidation
	req.checkBody(UserSchemaValidation.userUpdateValidation);

	req.getValidationResult().then(function (result) {
		//check if validation result has any error
		if (!result.isEmpty()) {
			res.send({
				"done": false,
				"errors": result.array()
			}, 400);
			return;
		}

		const user = req.body;

		UserController.updateUser(user, (response) => {
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
UserRoute.get('/:id', (req, res) => {
	let userId = req.params.id;

	UserController.getUsers(userId, (response) => {
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
UserRoute.get('/user/:id', (req, res) => {

	const id = req.params.id;

	UserController.getUserById(id, (response) => {
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
UserRoute.delete('/:id', (req, res) => {

	UserController.removeUser((response) => {
		res.json(response);
	});

});


export {
	UserRoute
};