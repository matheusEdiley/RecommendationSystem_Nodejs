'use strict';

var _RecommendationModel = require('./RecommendationModel');

var _RecommendationModel2 = _interopRequireDefault(_RecommendationModel);

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

//#region Recommendation
/**
 * Function for get recommendation by Id
 * @param: id: familygroup id wich will be found
 * @param: projection: what will be returned
 * @param: callback: callback function wich will response recommendation or error
 * @return: callback object
 **/
exports.getRecommendationById = function (id, projection, callback) {

    _RecommendationModel2.default.Recommendation.findOne({
        "stepThreeId": id
    })
    //.select(projection)
    .exec(function (error, recommendation) {

        if (error) {

            callback({
                "done": false,
                "error": error,
                "message": "Failed on get term"
            });
        } else {
            callback({
                done: true,
                "recommendation": recommendation
            });
        }
    });
};

/**
 * Function for create recommendation
 * @param: recommendation
 * @param: callback: callback function wich will response true or false
 * @return: callback object
 **/
exports.insertRecommendation = function (recommendationPersist, callback) {
    _RecommendationModel2.default.Recommendation.create(recommendationPersist, function (err, recommendation) {
        if (err) {
            callback({
                done: false,
                "error": err,
                "message": "Failed on create recommendation"
            });
        } else {
            callback({
                done: true,
                "recommendation": recommendation
            });
        }
    }); //end if
};

/**
 * Function remove recommendation
 * @param: id: recommendation id
 * @param: recommendation to remove
 * @param: callback: callback function wich will response true or false
 * @return: callback object
 **/
exports.removeRecommendation = function (id, callback) {
    _RecommendationModel2.default.Recommendation.remove({
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
                "recommendation": recommendation
            });
        }
    });
};
//#endregion Recommendation

//#region StepOne
/**
 * Function for get stepOne by Id
 * @param: id: familygroup id wich will be found
 * @param: projection: what will be returned
 * @param: callback: callback function wich will response stepOne or error
 * @return: callback object
 **/
exports.getStepOneById = function (id, projection, callback) {

    _RecommendationModel2.default.StepOne.findOne({
        _id: id
    })
    //.select(projection)
    .exec(function (error, stepOne) {

        if (error) {

            callback({
                "done": false,
                "error": error,
                "message": "Failed on get term"
            });
        } else {
            callback({
                done: true,
                "stepOne": stepOne
            });
        }
    });
};

/**
 * Function for get stepOne 
 * @param: id: familygroup id wich will be found
 * @param: projection: what will be returned
 * @param: callback: callback function wich will response stepOne or error
 * @return: callback object
 **/
exports.getStepOne = function (callback) {

    _RecommendationModel2.default.StepOne.find({})
    //.select(projection)
    .exec(function (error, stepOnes) {

        if (error) {

            callback({
                "done": false,
                "error": error,
                "message": "Failed on get term"
            });
        } else {
            callback({
                done: true,
                "stepOnes": stepOnes
            });
        }
    });
};

/**
 * Function for create stepOne
 * @param: stepOne
 * @param: callback: callback function wich will response true or false
 * @return: callback object
 **/
exports.insertStepOne = function (stepOnePersist, callback) {
    _RecommendationModel2.default.StepOne.create(stepOnePersist, function (err, stepOne) {
        if (err) {
            callback({
                done: false,
                "error": err,
                "message": "Failed on create stepOne"
            });
        } else {
            callback({
                done: true,
                "stepOne": stepOne
            });
        }
    }); //end if
};

/**
 * Function remove stepOne
 * @param: id: stepOne id
 * @param: stepOne to remove
 * @param: callback: callback function wich will response true or false
 * @return: callback object
 **/
exports.removeStepOne = function (id, callback) {
    _RecommendationModel2.default.StepOne.remove({
        _id: id
    })
    //.select(projection)
    .exec(function (error, stepOne) {

        if (error) {

            callback({
                "done": false,
                "error": error,
                "message": "Failed on get term"
            });
        } else {
            callback({
                done: true,
                "stepOne": stepOne
            });
        }
    });
};
//#endregion StepOne

//#region StepTwo
/**
 * Function for get stepTwo by Id
 * @param: id: familygroup id wich will be found
 * @param: projection: what will be returned
 * @param: callback: callback function wich will response stepTwo or error
 * @return: callback object
 **/
exports.getStepTwoById = function (id, projection, callback) {

    _RecommendationModel2.default.StepTwo.find({
        "stepOneId": id
    })
    //.select(projection)
    .exec(function (error, stepTwo) {

        if (error) {

            callback({
                "done": false,
                "error": error,
                "message": "Failed on get term"
            });
        } else {
            callback({
                done: true,
                "stepTwo": stepTwo
            });
        }
    });
};

/**
 * Function for create stepTwo
 * @param: stepTwo
 * @param: callback: callback function wich will response true or false
 * @return: callback object
 **/
exports.insertStepTwo = function (stepTwoPersist, callback) {
    _RecommendationModel2.default.StepTwo.create(stepTwoPersist, function (err, stepTwo) {
        if (err) {
            callback({
                done: false,
                "error": err,
                "message": "Failed on create stepTwo"
            });
        } else {
            callback({
                done: true,
                "stepTwo": stepTwo
            });
        }
    }); //end if
};

/**
 * Function remove stepTwo
 * @param: id: stepTwo id
 * @param: stepTwo to remove
 * @param: callback: callback function wich will response true or false
 * @return: callback object
 **/
exports.removeStepTwo = function (id, callback) {
    _RecommendationModel2.default.StepTwo.remove({
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
                "stepTwo": stepTwo
            });
        }
    });
};
//#endregion StepTwo

//#region StepThree
/**
 * Function for get stepThree by Id
 * @param: id: familygroup id wich will be found
 * @param: projection: what will be returned
 * @param: callback: callback function wich will response stepThree or error
 * @return: callback object
 **/
exports.getStepThreeById = function (id, projection, callback) {

    _RecommendationModel2.default.StepThree.find({
        "stepTwoId": id
    })
    //.select(projection)
    .exec(function (error, stepThree) {

        if (error) {

            callback({
                "done": false,
                "error": error,
                "message": "Failed on get term"
            });
        } else {
            callback({
                done: true,
                "stepThree": stepThree
            });
        }
    });
};

Array.prototype.countMatches = function (arr2) {
    this.sort();
    arr2.sort();
    var count = 0;
    for (var i = 0; i < this.length; i += 1) {
        if (arr2.indexOf(this[i]) > -1) {
            count++;
        }
    }
    return count;
};

/**
 * Function for get stepThree by Id
 * @param: id: familygroup id wich will be found
 * @param: projection: what will be returned
 * @param: callback: callback function wich will response stepThree or error
 * @return: callback object
 **/
exports.getStepThreeByTags = function (tags, projection, callback) {
    var search = _Utils2.default.normalizeText(tags);
    console.log("Recuperação da informação: " + search);
    _RecommendationModel2.default.StepThree.find({})
    //.select(projection)
    .exec(function (error, stepThree) {

        if (error) {

            callback({
                "done": false,
                "error": error,
                "message": "Failed on get term"
            });
        } else {
            var vet = [];
            stepThree.forEach(function (element, index) {
                if (element.tags.countMatches(search) > 1) {
                    element.count = element.tags.countMatches(search);
                    vet.push(element);
                }
            });
            console.log(vet);
            callback({
                done: true,
                "stepThree": stepThree
            });
        }
    });
};

/**
 * Function for create stepThree
 * @param: stepThree
 * @param: callback: callback function wich will response true or false
 * @return: callback object
 **/
exports.insertStepThree = function (stepThreePersist, callback) {
    _RecommendationModel2.default.StepThree.create(stepThreePersist, function (err, stepThree) {
        if (err) {
            callback({
                done: false,
                "error": err,
                "message": "Failed on create stepThree"
            });
        } else {
            callback({
                done: true,
                "stepThree": stepThree
            });
        }
    }); //end if
};

/**
 * Function remove stepThree
 * @param: id: stepThree id
 * @param: stepThree to remove
 * @param: callback: callback function wich will response true or false
 * @return: callback object
 **/
exports.removeStepThree = function (id, callback) {
    _RecommendationModel2.default.StepThree.remove({
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
                "stepThree": stepThree
            });
        }
    });
};
//#region StepThree