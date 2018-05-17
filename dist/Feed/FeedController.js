'use strict';

var _FeedModel = require('./FeedModel');

var _FeedModel2 = _interopRequireDefault(_FeedModel);

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

//#region Feed
/**
 * Function for get feed by Id
 * @param: id: familygroup id wich will be found
 * @param: projection: what will be returned
 * @param: callback: callback function wich will response feed or error
 * @return: callback object
 **/
exports.getFeedById = function (id, projection, callback) {

    _FeedModel2.default.Feed.findOne({
        _id: id
    })
    //.select(projection)
    .exec(function (error, feed) {

        if (error) {

            callback({
                "done": false,
                "error": error,
                "message": "Failed on get term"
            });
        } else {
            callback({
                done: true,
                "feed": feed
            });
        }
    });
};

/**
* Function for create feed
* @param: feed
* @param: callback: callback function wich will response true or false
* @return: callback object
**/
exports.insertFeed = function (feedPersist, callback) {
    _FeedModel2.default.Feed.create(feedPersist, function (err, feed) {
        if (err) {
            callback({
                done: false,
                "error": err,
                "message": "Failed on create feed"
            });
        } else {
            callback({
                done: true,
                "feed": feed
            });
        }
    }); //end if
};

/**
* Function remove feed
* @param: id: feed id
* @param: feed to remove
* @param: callback: callback function wich will response true or false
* @return: callback object
**/
exports.removeFeed = function (id, callback) {
    _FeedModel2.default.Feed.remove({
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
                "feed": feed
            });
        }
    });
};

/**
* Function for get all feed 
* @param: projection: what will be returned
* @param: callback: callback function wich will response all feed or error
* @return: callback object
**/
exports.getAllFeed = function (callback) {

    _FeedModel2.default.Feed.find({})
    //.select(projection)
    .exec(function (error, feed) {

        if (error) {

            callback({
                "done": false,
                "error": error,
                "message": "Failed on get term"
            });
        } else {
            callback({
                done: true,
                "feed": feed
            });
        }
    });
};