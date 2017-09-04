'use strict';

var _lodash = require('lodash');

var _lodash2 = _interopRequireDefault(_lodash);

var _Utils = require('./Utils.js');

var _Utils2 = _interopRequireDefault(_Utils);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Function test
 * @param: param1 : string of keywords
 * @return: object: ...
 **/
// Here are all generic fuctions
exports.functionTeste = function () {
    console.log("Teste");
};

var stopWords = "a,à,agora,ainda,alguém,algum,alguma,algumas,alguns,ampla,amplas,amplo,amplos,ante,antes,ao,aos, \
    após,aquela,aquelas,aquele,aqueles,aquilo,as,até,através,cada,coisa,coisas,com,como,contra,contudo,da, \
    daquele,daqueles,das,de,dela,delas,dele,deles,depois,dessa,dessas,desse,desses,desta,destas,deste,deste,destes,deve, \
    devem,devendo,dever,deverá,deverão,deveria,deveriam,devia,deviam,disse,disso,disto,dito,diz,dizem,do,dos,e,é,e',ela, \
    elas,ele,eles,em,enquanto,entre,era,essa,essas,esse,esses,esta,está,estamos,estão,estas,estava,estavam,estávamos,este, \
    estes,estou,eu,fazendo,fazer,feita,feitas,feito,feitos,foi,for,foram,fosse,fossem,grande,grandes,há,isso,isto,já,la,la, \
    lá,lhe,lhes,lo,mas,me,mesma,mesmas,mesmo,mesmos,meu,meus,minha,minhas,muita,muitas,muito,muitos,na,não,nas,nem,nenhum, \
    nessa,nessas,nesta,nestas,ninguém,no,nos,nós,nossa,nossas,nosso,nossos,num,numa,nunca,o,os,ou,outra,outras,outro,outros, \
    para,pela,pelas,pelo,pelos,pequena,pequenas,pequeno,pequenos,per,perante,pode,pôde,podendo,poder,poderia,poderiam,podia, \
    podiam,pois,por,porém,porque,posso,pouca,poucas,pouco,poucos,primeiro,primeiros,própria,próprias,próprio,próprios,quais, \
    qual,quando,quanto,quantos,que,quem,são,se,seja,sejam,sem,sempre,sendo,será,serão,seu,seus,si,sido,só,sob,sobre,sua,suas, \
    talvez,também,tampouco,te,tem,tendo,tenha,ter,teu,teus,ti,tido,tinha,tinham,toda,todas,todavia,todo,todos,tu,tua,tuas, \
    tudo,última,últimas,último,últimos,um,uma,umas,uns,vendo,ver,vez,vindo,vir,vos,vós";

String.isStopWord = function (word) {
    var regex = new RegExp("\\b" + word + "\\b", "i");
    if (stopWords.search(regex) < 0) {
        return false;
    } else {
        return true;
    }
};

var removeStopWords = function removeStopWords(text) {
    var words = new Array();
    text.replace(/\b[\wÀ-ú]+\b/g, function ($0) {
        if (!String.isStopWord($0)) {
            words[words.length] = $0.trim();
        }
    });
    return words.join(" ");
};

var removeAccents = function removeAccents(text) {
    var with_accent = 'áàãâäéèêëíìîïóòõôöúùûüçÁÀÃÂÄÉÈÊËÍÌÎÏÓÒÕÖÔÚÙÛÜÇ';
    var without_accent = 'aaaaaeeeeiiiiooooouuuucAAAAAEEEEIIIIOOOOOUUUUC';
    var newText = '';
    for (var i = 0; i < text.length; i++) {
        if (with_accent.search(text.substr(i, 1)) >= 0) {
            newText += without_accent.substr(with_accent.search(text.substr(i, 1)), 1);
        } else {
            newText += text.substr(i, 1);
        }
    }
    return newText;
};

var removeSpecialCharacter = function removeSpecialCharacter(text) {
    var aux = text.replace(/[^a-zA-Z ]/g, "");
    return aux;
};

var removeNumbers = function removeNumbers(text) {
    var aux = text.replace(/[0-9]/g, '');
    return aux;
};

var removeSmallWords = function removeSmallWords(text) {
    var aux = text.replace(/\W*\b\w{1,1}\b/g, "");
    return aux;
};

var removeExtraSpace = function removeExtraSpace(text) {
    var aux = text.replace(/\s+/g, ' ').trim();
    return aux;
};

var stringToWordArray = function stringToWordArray(text) {
    var collection = text.split(" ");
    return collection;
};

exports.normalizeText = function (text) {

    text = text.toLowerCase();
    text = removeStopWords(text);
    text = removeAccents(text);
    text = removeSpecialCharacter(text);
    text = removeNumbers(text);
    text = removeSmallWords(text);
    text = removeExtraSpace(text);
    text = stringToWordArray(text);

    return text;
};