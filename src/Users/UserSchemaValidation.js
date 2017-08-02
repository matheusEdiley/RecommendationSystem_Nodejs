const UserSchemaValidation = {

	//see exress validators 
	userInsertValidation: {

		"telefone": {
			notEmpty: true,
			errorMessage: "O telefone não pode ser vazio",	
		},

		"senha": {
				isLength: {
					options: [{
						min: 4
					}],
					errorMessage: "A senha deve ter entre 4 e 8 caractéres"
				}
			}

	},
	userUpdateValidation: {
		"nomeCompleto": {
			notEmpty: true,
			errorMessage: "Empty..",
		},

		"email": {
			isEmail: {
				errorMessage: "Invalid email",
			}
		},
		"telefone": {
			notEmpty: true,
			errorMessage: "O telefone não pode ser vazio",	
		},
		"vinculoPaciente": {
			notEmpty: true,
			errorMessage: "Deve informar o vínculo com o paciente",
	
		},


	}
};

export {
	UserSchemaValidation
};