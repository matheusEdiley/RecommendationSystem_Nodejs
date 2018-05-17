import express from 'express';
import FeedController from './FeedController';

import util from 'util'; //for express validator
import Utils from '../Utils.js';

const FeedRoute = express.Router();

/** 
* Method HTTP: GET
* URI        : /feed
* URL        : /
* Param			 : user id wich will be returned
* Get all feed
**/
FeedRoute.get('/feed', (req, res) => {

    FeedController.getFeed((response) => {
        res.json(response);
    });

});

/**
 * Method HTTP: GET
 * URI        : /:id
 * URL        : /:id
 * Param	  :  feed id wich will be returned
 * Get  feed by Id
 **/
FeedRoute.get('/:id', (req, res) => {

    const id = req.params.id;
    const projection = "";
    FeedController.getFeedById(id, projection, (response) => {
        res.json(response);
    });

});

/**
 * Method HTTP: POST
 * URI        : /feed
 * URL        : /feed
 * Create feed
 **/
FeedRoute.post('/feed', (req, res) => {

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

        const feed = req.body;
        console.log(feed);
        FeedController.insertFeed(feed, (response) => {
            res.json(response);
        });
    });
});

/**
* Method HTTP: DELETE
* URI        : /feed
* URL        : /:id
* Param			 : user id wich will be removed
* Delete users by Id
**/
FeedRoute.delete('/:id', (req, res) => {

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

        const feedId = req.params.id;
        FeedController.removeFeed(feedId, (response) => {
            res.json(response);
        });
    });
});

export {
    FeedRoute
};