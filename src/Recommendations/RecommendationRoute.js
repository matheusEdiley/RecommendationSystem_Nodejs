import express from 'express';
import RecommendationController from './RecommendationController';

import util from 'util'; //for express validator
import Utils from '../Utils.js';

const RecommendationRoute = express.Router();

/** 
* Method HTTP: GET
* URI        : /stepone
* URL        : /
* Param			 : user id wich will be returned
* Get all stepOnes
**/
RecommendationRoute.get('/stepone', (req, res) => {

    RecommendationController.getStepOne((response) => {
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
RecommendationRoute.get('/:id/stepone', (req, res) => {

    const id = req.params.id;
    const projection = "";
    RecommendationController.getStepOneById(id, projection, (response) => {
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
RecommendationRoute.get('/:id/steptwo', (req, res) => {

    const id = req.params.id;
    const projection = "";
    RecommendationController.getStepTwoById(id, projection, (response) => {
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
RecommendationRoute.get('/:id/stepthree', (req, res) => {

    const id = req.params.id;
    const projection = "";
    RecommendationController.getStepThreeById(id, projection, (response) => {
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
RecommendationRoute.get('/stepthree', (req, res) => {

    const tags = req.body;
    const projection = "";
    RecommendationController.getStepThreeByTags(tags, projection, (response) => {
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
RecommendationRoute.get('/:id/recommendation', (req, res) => {

    const id = req.params.id;
    const projection = "";
    RecommendationController.getRecommendationById(id, projection, (response) => {
        res.json(response);
    });
});

/**
 * Method HTTP: POST
 * URI        : /recommendations/stepone
 * URL        : /stepone
 * Create stepone
 **/
RecommendationRoute.post('/stepone', (req, res) => {

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

        const stepone = req.body;
        console.log(stepone);
        RecommendationController.insertStepOne(stepone, (response) => {
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
RecommendationRoute.post('/steptwo', (req, res) => {

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

        const steptwo = req.body;
        console.log(steptwo);
        RecommendationController.insertStepTwo(steptwo, (response) => {
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
RecommendationRoute.post('/stepthree', (req, res) => {

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

        const stepthree = req.body;
        console.log(stepthree);
        RecommendationController.insertStepTwo(stepthree, (response) => {
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
RecommendationRoute.post('/recommendation', (req, res) => {

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

        const recommendation = req.body;
        console.log(recommendation);
        RecommendationController.insertRecommendation(recommendation, (response) => {
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
RecommendationRoute.delete('/:id/stepone', (req, res) => {

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

        const stepOneId = req.params.id;
        RecommendationController.removeStepOne(stepOneId, (response) => {
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
RecommendationRoute.delete('/:id/steptwo', (req, res) => {

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

        const stepTwoId = req.params.id;
        RecommendationController.removeStepTwo(stepTwoId, (response) => {
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
RecommendationRoute.delete('/:id/stepthree', (req, res) => {

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

        const stepThreeId = req.params.id;
        RecommendationController.removeStepThree(stepThreeId, (response) => {
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
RecommendationRoute.delete('/:id/recommendation', (req, res) => {

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

        const recommendationId = req.params.id;
        RecommendationController.removeStepThree(recommendationId, (response) => {
            res.json(response);
        });
    });
});

export {
    RecommendationRoute
};