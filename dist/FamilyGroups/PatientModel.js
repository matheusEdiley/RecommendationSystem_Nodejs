'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.patientSchema = undefined;

var _mongoose = require('mongoose');

var _mongoose2 = _interopRequireDefault(_mongoose);

var _dbConfig = require('../dbConfig.js');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var schema = _mongoose2.default.Schema;

var dadosPessoaisSchema = new schema({

    nomeCompleto: {
        type: String,
        required: false
    },

    idade: {
        type: Number,
        required: false
    },

    cpf: {
        type: Number,
        required: false
    },

    estadoCivil: {
        type: String,
        required: false
    },

    reside: {
        type: String,
        required: false
    },

    tipoSanguineo: {
        type: String,
        required: false
    }

});

var enderecoSchema = new schema({

    endRua: {
        type: String,
        required: false
    },

    endNumero: {
        type: String,
        required: false
    },

    endBairro: {
        type: String,
        required: false
    },

    endCidade: {
        type: String,
        required: false
    },

    endEstado: {
        type: String,
        required: false
    }

});

var infoMedicasGeraisSchema = new schema({
    infoMedica: {
        type: String,
        required: false
    },
    flgInfoMedica: {
        type: Boolean,
        required: false
    }
});

var especialidadesMedicasTerapeuticasSchema = new schema({

    especialidadeMedica: {
        type: String
    },

    flgEspecialidadeMedica: {
        type: Boolean
    },

    tratamento: {
        type: Boolean
    }

});

var historicoMedicoSchema = new schema({

    internadoUltimosAnos: {
        type: Boolean,
        required: false
    },

    transfusaoSangue: {
        type: Boolean,
        required: false
    },

    antecedentesAlergicos: {
        type: Boolean,
        required: false
    },

    AVCDerrame: {
        type: Boolean,
        required: false
    },

    antecedentesOncologicos: {
        type: Boolean,
        required: false
    }
});

var cuidadoSchema = new schema({

    possuiCuratela: {
        type: Boolean,
        required: false
    },
    obsCuidado: {
        type: String,
        required: false
    },
    hipertenso: {
        type: Boolean,
        required: false
    },
    doresArticulacoes: {
        type: Boolean,
        required: false
    },
    incontinenciaUrinaria: {
        type: Boolean,
        required: false
    },
    usaMarcapasso: {
        type: Boolean,
        required: false
    },
    usaBengala: {
        type: Boolean,
        required: false
    },
    usaAndador: {
        type: Boolean,
        required: false
    },
    usaMuletas: {
        type: Boolean,
        required: false
    },
    usaProteseDentaria: {
        type: {
            usaOrteseProtese: Boolean,
            descOrteseProtese: String
        },
        required: false
    },
    usaOrteseProtese: {
        type: Boolean,
        required: false
    },
    usaAparelhoAuditivo: {
        type: Boolean,
        required: false
    },
    cadeirante: {
        type: Boolean,
        required: false
    }
});

var patientSchema = new schema({

    dadosPessoais: {
        type: dadosPessoaisSchema,
        required: false
    },

    endereco: {
        type: enderecoSchema,
        required: false
    },

    infoMedicasGerais: {
        type: [infoMedicasGeraisSchema],
        required: false
    },

    especialidadesMedicasTerapeuticas: {
        type: [especialidadesMedicasTerapeuticasSchema],
        required: false
    },

    historicoMedico: {
        type: historicoMedicoSchema,
        required: false
    },

    cuidado: {
        type: cuidadoSchema,
        required: false
    }

}, {
    collection: 'Patient'
});

exports.patientSchema = patientSchema;