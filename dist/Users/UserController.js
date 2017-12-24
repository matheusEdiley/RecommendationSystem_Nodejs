'use strict';

var _UserModel = require('./UserModel');

var _UserModel2 = _interopRequireDefault(_UserModel);

var _mongoose = require('mongoose');

var _mongoose2 = _interopRequireDefault(_mongoose);

var _lodash = require('lodash');

var _lodash2 = _interopRequireDefault(_lodash);

var _Utils = require('../Utils.js');

var _Utils2 = _interopRequireDefault(_Utils);

var _nodemailer = require('nodemailer');

var _nodemailer2 = _interopRequireDefault(_nodemailer);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

//fields that should not be returned on get requests
var fieldsNotReturn = '-password';
//fields that should be returned on get list requests
var fieldsReturnList = '';

exports.passwordRecorvery = function (email, callback) {

	//let cryptr = new Cryptr('AEADASDAFSDFDFS');

	var transporter = _nodemailer2.default.createTransport({
		service: 'hotmail',
		auth: {
			user: 'gladss@hotmail.com',
			pass: 'matheus326428'
		}
	});

	//console.log(cryptr.encrypt('abc12345'));

	_UserModel2.default.User.findOne({
		email: email
	}, function (error, user) {
		if (user) {
			console.log(user);

			var mailOptions = {
				from: 'gladss@hotmail.com',
				to: user.email,
				subject: ' - Recuperação de senha',
				html: '<h1> Sua senha foi recuperada, email: ' + user.email + '\n\t\t\t\t\t\t</h1><p> Sua senha \xE9: ' + user.senha + '</p>'
				//text: 'Nº celular: ' + user.telefone + ' Sua senha é: ' + cryptr.decrypt(user.senha)
			};

			transporter.sendMail(mailOptions, function (error, info) {
				if (error) {
					console.log(error);
				} else {
					console.log('Email sent: ' + info.response);
					callback({
						done: true,
						"email": info.response
					});
				}
			});
		} else {
			callback({
				done: false,
				"message": "Conta não encontrada, informe um email cadastrado!"
			});
		}
	});
};

/**
 * 
 * Function for create user
 * @param: user
 * @param: callback: callback function wich will response true or false
 * @return: callback object
 **/

exports.insertUser = function (userPersist, callback) {
	//let id = userPersist._id ? new ObjectId(userPersist._id) : new mongoose.Types.ObjectId;

	_UserModel2.default.User.findOne({
		email: userPersist.email
	}, function (error, user) {
		if (user) {
			callback({
				done: false,
				"message": "Email já cadastrado, verifique sua senha."
			});
		} else {
			_UserModel2.default.User.create(userPersist, function (err, user) {
				if (err) {
					callback({
						done: false,
						"error": err,
						"message": "Failed on create user"
					});
				} else {
					callback({
						done: true,
						"user": user
					});
				}
			}); //end if
		}
	});
};

/**
 * Function for login user
 * @param: user
 * @param: callback: callback function wich will response true or false
 * @return: callback object
 **/
exports.loginUser = function (userPersist, callback) {
	console.log(userPersist);
	_UserModel2.default.User.findOne({
		email: userPersist.email
	}, function (error, user) {
		if (user) {
			if (user.password === userPersist.password) {
				callback({
					done: true,
					"user": user
				});
			} else {
				callback({
					done: false,
					"message": "Senha incorreta, tente novamente!"
				});
			}
		} else {
			callback({
				done: false,
				"message": "Email não cadastrado, registre-se."
			});
		}
	});
};

/**
 * Function for update user
 * @param: userId: user id to update
 * @param: user {keys : values}
 * @param: callback: callback function wich will response true or false
 * @return: callback object
 **/
exports.updateUser = function (userId, userPersist, callback) {

	_UserModel2.default.User.findOne({
		$or: [{ telefone: userPersist.telefone }, { _id: userPersist._id }]
	}, function (error, user) {
		if (error) {
			callback({
				done: false,
				message: "Ocorreu um erro inesperado"
			});
		} else if (user && user._id == userId) {
			_UserModel2.default.User.findByIdAndUpdate(userId, userPersist, {
				upsert: true,
				new: true
			}, function (err, user) {
				if (err) {
					callback({
						done: false,
						"error": err,
						"message": "Ocorreu um erro inesperado"
					});
				} else {
					callback({
						done: true,
						"user": user
					});
				}
			}); //end if
		} else {
			callback({
				done: true,
				message: "O telefone informado já existe, faça login."
			});
		}
	});
};

/**
 * Function for get all users
 * @param: callback: callback function wich will response users or false
 * @return: callback object
 **/
exports.getUsers = function (callback) {};

/**
 * Function for get user by Id
 * @param: id: user id wich will be found
 * @param: callback: callback function wich will response user or error
 * @return: callback object
 **/
exports.getUserById = function (id, callback) {};

/**
 * Function remove user by Id
 * @param: id: user id wich will be  removed
 * @param: callback: callback function wich will response true or error
 * @return: callback
 **/
exports.removeUser = function (id, callback) {};