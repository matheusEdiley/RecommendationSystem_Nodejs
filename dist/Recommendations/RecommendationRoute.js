'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.RecommendationRoute = undefined;

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _RecommendationController = require('./RecommendationController');

var _RecommendationController2 = _interopRequireDefault(_RecommendationController);

var _util = require('util');

var _util2 = _interopRequireDefault(_util);

var _Utils = require('../Utils.js');

var _Utils2 = _interopRequireDefault(_Utils);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var RecommendationRoute = _express2.default.Router();

/** 
* Method HTTP: GET
* URI        : /stepone
* URL        : /
* Param			 : user id wich will be returned
* Get all stepOnes
**/
//for express validator
RecommendationRoute.get('/stepone', function (req, res) {

    _RecommendationController2.default.getStepOne(function (response) {
        res.json(response);
    });
});

/**
 * Method HTTP: GET
 * URI        : /recommendations/:id/stepone
 * URL        : /:id/stepone
 * Param	  : recommendations stepone id wich will be returned
 * Get recommendations stepone by Id
 **/
RecommendationRoute.get('/:id/stepone', function (req, res) {

    var id = req.params.id;
    var projection = "";
    _RecommendationController2.default.getStepOneById(id, projection, function (response) {
        res.json(response);
    });
});

/**
 * Method HTTP: GET
 * URI        : /recommendations/:id/steptwo
 * URL        : /:id/steptwo
 * Param	  : recommendations steptwo id wich will be returned
 * Get recommendations steptwo by Id
 **/
RecommendationRoute.get('/:id/steptwo', function (req, res) {

    var id = req.params.id;
    var projection = "";
    _RecommendationController2.default.getStepTwoById(id, projection, function (response) {
        res.json(response);
    });
});

/**
 * Method HTTP: GET
 * URI        : /recommendations/:id/stepthree
 * URL        : /:id/stepthree
 * Param	  : recommendations stepthree id wich will be returned
 * Get recommendations stepthree by Id
 **/
RecommendationRoute.get('/:id/stepthree', function (req, res) {

    var id = req.params.id;
    var projection = "";
    _RecommendationController2.default.getStepThreeById(id, projection, function (response) {
        res.json(response);
    });
});

/**
 * Method HTTP: GET
 * URI        : /recommendations/stepthree
 * URL        : /stepthree
 * Param	  : recommendations stepthree id wich will be returned
 * Get recommendations stepthree by tags
 **/
RecommendationRoute.post('/stepthree/tags', function (req, res) {

    var tags = req.body.tags;
    var projection = "";
    console.log("Rota rec: " + tags);
    _RecommendationController2.default.getStepThreeByTags(tags, projection, function (response) {
        res.json(response);
    });
});

/**
 * Method HTTP: GET
 * URI        : /recommendations/:id/recommendation
 * URL        : /:id/recommendation
 * Param	  : recommendations id wich will be returned
 * Get recommendations stepthree by Id
 **/
RecommendationRoute.get('/:id/recommendation', function (req, res) {

    var id = req.params.id;
    var projection = "";
    _RecommendationController2.default.getRecommendationById(id, projection, function (response) {
        res.json(response);
    });
});

/**
 * Method HTTP: POST
 * URI        : /recommendations/stepone
 * URL        : /stepone
 * Create stepone
 **/
RecommendationRoute.post('/stepone', function (req, res) {

    //expressValidator check validation using FamilyGroupSchemaValidation
    //req.checkBody(FamilyGroupSchemaValidation.general);

    req.getValidationResult().then(function (result) {
        //check if validation result has any error
        if (!result.isEmpty()) {
            res.status(400).send({
                "done": false,
                "errors": result.array()
            });
            return;
        }

        var stepone = req.body;
        console.log(stepone);
        _RecommendationController2.default.insertStepOne(stepone, function (response) {
            res.json(response);
        });
    });
});

/**
 * Method HTTP: POST
 * URI        : /recommendations/steptwo
 * URL        : /steptwo
 * Create stepone
 **/
RecommendationRoute.post('/steptwo', function (req, res) {

    //expressValidator check validation using FamilyGroupSchemaValidation
    //req.checkBody(FamilyGroupSchemaValidation.general);

    req.getValidationResult().then(function (result) {
        //check if validation result has any error
        if (!result.isEmpty()) {
            res.status(400).send({
                "done": false,
                "errors": result.array()
            });
            return;
        }

        var steptwo = req.body;
        console.log(steptwo);
        _RecommendationController2.default.insertStepTwo(steptwo, function (response) {
            res.json(response);
        });
    });
});

/**
 * Method HTTP: POST
 * URI        : /recommendations/stepthree
 * URL        : /stepthree
 * Create stepone
 **/
RecommendationRoute.post('/stepthree', function (req, res) {

    //expressValidator check validation using FamilyGroupSchemaValidation
    //req.checkBody(FamilyGroupSchemaValidation.general);

    req.getValidationResult().then(function (result) {
        //check if validation result has any error
        if (!result.isEmpty()) {
            res.status(400).send({
                "done": false,
                "errors": result.array()
            });
            return;
        }

        var stepthree = req.body;
        console.log(stepthree);
        _RecommendationController2.default.insertStepTwo(stepthree, function (response) {
            res.json(response);
        });
    });
});

/**
 * Method HTTP: POST
 * URI        : /recommendations/recommendation
 * URL        : /stepthree
 * Create stepone
 **/
RecommendationRoute.post('/recommendation', function (req, res) {

    //expressValidator check validation using FamilyGroupSchemaValidation
    //req.checkBody(FamilyGroupSchemaValidation.general);

    req.getValidationResult().then(function (result) {
        //check if validation result has any error
        if (!result.isEmpty()) {
            res.status(400).send({
                "done": false,
                "errors": result.array()
            });
            return;
        }

        var recommendation = req.body;
        console.log(recommendation);
        _RecommendationController2.default.insertRecommendation(recommendation, function (response) {
            res.json(response);
        });
    });
});

/**
* Method HTTP: DELETE
* URI        : /recommendations/stepone
* URL        : /:id
* Param			 : user id wich will be removed
* Delete users by Id
**/
RecommendationRoute.delete('/:id/stepone', function (req, res) {

    //expressValidator check validation using FamilyGroupSchemaValidation
    //req.checkBody(FamilyGroupSchemaValidation.medicineValidation);

    req.getValidationResult().then(function (result) {
        //check if validation result has any error
        if (!result.isEmpty()) {
            res.status(400).send({
                "done": false,
                "errors": result.array()
            });
            return;
        }

        var stepOneId = req.params.id;
        _RecommendationController2.default.removeStepOne(stepOneId, function (response) {
            res.json(response);
        });
    });
});

/**
* Method HTTP: DELETE
* URI        : /recommendations/steptwo
* URL        : /:id
* Param			 : user id wich will be removed
* Delete users by Id
**/
RecommendationRoute.delete('/:id/steptwo', function (req, res) {

    //expressValidator check validation using FamilyGroupSchemaValidation
    //req.checkBody(FamilyGroupSchemaValidation.medicineValidation);

    req.getValidationResult().then(function (result) {
        //check if validation result has any error
        if (!result.isEmpty()) {
            res.status(400).send({
                "done": false,
                "errors": result.array()
            });
            return;
        }

        var stepTwoId = req.params.id;
        _RecommendationController2.default.removeStepTwo(stepTwoId, function (response) {
            res.json(response);
        });
    });
});

/**
* Method HTTP: DELETE
* URI        : /recommendations/stepthree
* URL        : /:id
* Param			 : user id wich will be removed
* Delete users by Id
**/
RecommendationRoute.delete('/:id/stepthree', function (req, res) {

    //expressValidator check validation using FamilyGroupSchemaValidation
    //req.checkBody(FamilyGroupSchemaValidation.medicineValidation);

    req.getValidationResult().then(function (result) {
        //check if validation result has any error
        if (!result.isEmpty()) {
            res.status(400).send({
                "done": false,
                "errors": result.array()
            });
            return;
        }

        var stepThreeId = req.params.id;
        _RecommendationController2.default.removeStepThree(stepThreeId, function (response) {
            res.json(response);
        });
    });
});

/**
* Method HTTP: DELETE
* URI        : /recommendations/recommendation
* URL        : /:id
* Param			 : user id wich will be removed
* Delete users by Id
**/
RecommendationRoute.delete('/:id/recommendation', function (req, res) {

    //expressValidator check validation using FamilyGroupSchemaValidation
    //req.checkBody(FamilyGroupSchemaValidation.medicineValidation);

    req.getValidationResult().then(function (result) {
        //check if validation result has any error
        if (!result.isEmpty()) {
            res.status(400).send({
                "done": false,
                "errors": result.array()
            });
            return;
        }

        var recommendationId = req.params.id;
        _RecommendationController2.default.removeStepThree(recommendationId, function (response) {
            res.json(response);
        });
    });
});

exports.RecommendationRoute = RecommendationRoute;