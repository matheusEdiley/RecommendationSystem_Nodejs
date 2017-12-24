import UserModel from './UserModel';
import mongoose from 'mongoose';
import _ from 'lodash';
import Utils from '../Utils.js';
import nodemailer from 'nodemailer';

//fields that should not be returned on get requests
const fieldsNotReturn = '-password';
//fields that should be returned on get list requests
const fieldsReturnList = '';

exports.passwordRecorvery = (email, callback) => {

	//let cryptr = new Cryptr('AEADASDAFSDFDFS');

	let transporter = nodemailer.createTransport({
		service: 'hotmail',
		auth: {
			user: 'gladss@hotmail.com',
			pass: 'matheus326428'
		}
	});

	//console.log(cryptr.encrypt('abc12345'));

	UserModel.User.findOne({
		email: email
	},
		(error, user) => {
			if (user) {
				console.log(user);

				let mailOptions = {
					from: 'gladss@hotmail.com',
					to: user.email,
					subject: ' - Recuperação de senha',
					html: `<h1> Sua senha foi recuperada, email: ${user.email}
						</h1><p> Sua senha é: ${user.password}</p>`
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

			}
			else {
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

exports.insertUser = (userPersist, callback) => {
	//let id = userPersist._id ? new ObjectId(userPersist._id) : new mongoose.Types.ObjectId;

	UserModel.User.findOne({
		email: userPersist.email
	},
		(error, user) => {
			if (user) {
				callback({
					done: false,
					"message": "Email já cadastrado, verifique sua senha."
				});
			} else {
				UserModel.User.create(
					userPersist,
					(err, user) => {
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
exports.loginUser = (userPersist, callback) => {
	console.log(userPersist);
	UserModel.User.findOne({
		email: userPersist.email
	},
		(error, user) => {
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
exports.updateUser = (userId, userPersist, callback) => {

	UserModel.User.findOne({
		$or: [{ telefone: userPersist.telefone }, { _id: userPersist._id }]
	},
		(error, user) => {
			if (error) {
				callback({
					done: false,
					message: "Ocorreu um erro inesperado"
				});
			}
			else if (user && user._id == userId) {
				UserModel.User.findByIdAndUpdate(
					userId,
					userPersist,
					{
						upsert: true,
						new: true
					},
					(err, user) => {
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
exports.getUsers = (callback) => {

};

/**
 * Function for get user by Id
 * @param: id: user id wich will be found
 * @param: callback: callback function wich will response user or error
 * @return: callback object
 **/
exports.getUserById = (id, callback) => {

};

/**
 * Function remove user by Id
 * @param: id: user id wich will be  removed
 * @param: callback: callback function wich will response true or error
 * @return: callback
 **/
exports.removeUser = (id, callback) => {

};