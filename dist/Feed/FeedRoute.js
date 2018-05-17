'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.FeedRoute = undefined;

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _FeedController = require('./FeedController');

var _FeedController2 = _interopRequireDefault(_FeedController);

var _util = require('util');

var _util2 = _interopRequireDefault(_util);

var _Utils = require('../Utils.js');

var _Utils2 = _interopRequireDefault(_Utils);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var FeedRoute = _express2.default.Router();

/** 
* Method HTTP: GET
* URI        : /feed
* URL        : /
* Param			 : user id wich will be returned
* Get all feed
**/
//for express validator
FeedRoute.get('/feed', function (req, res) {

    _FeedController2.default.getFeed(function (response) {
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
FeedRoute.get('/:id', function (req, res) {

    var id = req.params.id;
    var projection = "";
    _FeedController2.default.getFeedById(id, projection, function (response) {
        res.json(response);
    });
});

/**
 * Method HTTP: POST
 * URI        : /feed
 * URL        : /feed
 * Create feed
 **/
FeedRoute.post('/feed', function (req, res) {

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

        var feed = req.body;
        console.log(feed);
        _FeedController2.default.insertFeed(feed, function (response) {
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
FeedRoute.delete('/:id', function (req, res) {

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

        var feedId = req.params.id;
        _FeedController2.default.removeFeed(feedId, function (response) {
            res.json(response);
        });
    });
});

exports.FeedRoute = FeedRoute;