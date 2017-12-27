import RecommendationModel from './RecommendationModel';
import mongoose from 'mongoose';
import _ from 'lodash';
import Utils from '../Utils.js';

//fields that should not be returned on get requests
const fieldsNotReturn = '-password -__v';
//fields that should be returned on get list requests
const fieldsReturnList = '';

//#region Recommendation
/**
 * Function for get recommendation by Id
 * @param: id: familygroup id wich will be found
 * @param: projection: what will be returned
 * @param: callback: callback function wich will response recommendation or error
 * @return: callback object
 **/
exports.getRecommendationById = (id, projection, callback) => {

    RecommendationModel.Recommendation.findOne({
        "stepThreeId": id
    })
        //.select(projection)
        .exec((error, recommendation) => {

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
exports.insertRecommendation = (recommendationPersist, callback) => {
    RecommendationModel.Recommendation.create(
        recommendationPersist,
        (err, recommendation) => {
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
exports.removeRecommendation = (id, callback) => {
    RecommendationModel.Recommendation.remove({
        _id: id
    })
        //.select(projection)
        .exec((error, familygroup) => {

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
exports.getStepOneById = (id, projection, callback) => {

    RecommendationModel.StepOne.findOne({
        _id: id
    })
        //.select(projection)
        .exec((error, stepOne) => {

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
exports.getStepOne = (callback) => {
    console.log(Utils.normalizeText("Eu quero saber da minha conta de lúz"));
    RecommendationModel.StepOne.find({

    })
        //.select(projection)
        .exec((error, stepOnes) => {

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
exports.insertStepOne = (stepOnePersist, callback) => {
    RecommendationModel.StepOne.create(
        stepOnePersist,
        (err, stepOne) => {
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
exports.removeStepOne = (id, callback) => {
    RecommendationModel.StepOne.remove({
        _id: id
    })
        //.select(projection)
        .exec((error, stepOne) => {

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
exports.getStepTwoById = (id, projection, callback) => {

    RecommendationModel.StepTwo.find({
        "stepOneId": id
    })
        //.select(projection)
        .exec((error, stepTwo) => {

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
exports.insertStepTwo = (stepTwoPersist, callback) => {
    RecommendationModel.StepTwo.create(
        stepTwoPersist,
        (err, stepTwo) => {
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
exports.removeStepTwo = (id, callback) => {
    RecommendationModel.StepTwo.remove({
        _id: id
    })
        //.select(projection)
        .exec((error, familygroup) => {

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
exports.getStepThreeById = (id, projection, callback) => {

    RecommendationModel.StepThree.find({
        "stepTwoId": id
    })
        //.select(projection)
        .exec((error, stepThree) => {

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
exports.getStepThreeByTags = (tags, projection, callback) => {
    //let search = Utils.normalizeText(tags);
    RecommendationModel.StepThree.find({

    })
        //.select(projection)
        .exec((error, stepThree) => {

            if (error) {

                callback({
                    "done": false,
                    "error": error,
                    "message": "Failed on get term"
                });

            } else {
                // let vet = [];
                // stepThree.forEach(function (element, index) {
                //     if (element.tags.countMatches(search) > 1) {
                //         element.count = element.tags.countMatches(search);
                //         vet.push(element);
                //     }
                // });
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
exports.insertStepThree = (stepThreePersist, callback) => {
    RecommendationModel.StepThree.create(
        stepThreePersist,
        (err, stepThree) => {
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
exports.removeStepThree = (id, callback) => {
    RecommendationModel.StepThree.remove({
        _id: id
    })
        //.select(projection)
        .exec((error, familygroup) => {

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

