"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});
var FamilyGroupSchemaValidation = {

	//see exress validators 
	// TODO: Criar função customizada para tratar se é array o campo
	// 'familyMembers': {
	// 	isArray: customFunction,
	// }

	"general": {
		"groupName": {},
		"identityMembers": {},
		"patient": {}

	},

	"patientInfo": {

		"dadosPessoais": {
			"nomeCompleto": {},
			"cpf": {},
			"estadoCivil": {},
			"idade": {},
			"reside": {},
			"tipoSanguineo": {}
		},

		"endereco": {
			"endRua": {},
			"endNumero": {},
			"endBairro": {},
			"endCidade": {},
			"endEstado": {}
		},

		"infoMedicasGerais": {
			"infoMedica": {},
			"flgInfoMedica": {}
		},

		"especialidadesMedicasTerapeuticas": {
			"especialidadeMedica": {},
			"flgEspecialidadeMedica": {},
			"tratamento": {}
		},

		"historicoMedico": {
			"internadoUltimosAnos": {},
			"transfusaoSangue": {},
			"antecedentesOncologicos": {},
			"AVCDerrame": {},
			"antecedentesAlergicos": {}
		},

		"cuidado": {
			"possuiCuratela": {},
			"obsCuidado": {},
			"hipertenso": {},
			"doresArticulacoes": {},
			"incontinenciaUrinaria": {},
			"usaMarcapasso": {},
			"usaBengala": {},
			"usaAndador": {},
			"usaMuletas": {},
			"usaProteseDentaria": {},
			"usaOrteseProtese": {
				"usaOrteseProtese": {},
				"descOrteseProtese": {}
			},
			"usaAparelhoAuditivo": {},
			"cadeirante": {}
		}

	},

	"medicineValidation": {
		"name": {},
		"dosage": {},
		"time": {}
	},

	"expenseValidation": {
		"description": {},
		"cost": {}
	},

	"compromiseValidation": {
		"description": {},
		"date": {},
		"time": {},
		"note": {}
	}

};

exports.FamilyGroupSchemaValidation = FamilyGroupSchemaValidation;