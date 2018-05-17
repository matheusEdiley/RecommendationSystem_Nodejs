import FeedModel from './FeedModel';
import mongoose from 'mongoose';
import _ from 'lodash';
import Utils from '../Utils.js';

//fields that should not be returned on get requests
const fieldsNotReturn = '-password -__v';
//fields that should be returned on get list requests
const fieldsReturnList = '';



//#region Feed
/**
 * Function for get feed by Id
 * @param: id: familygroup id wich will be found
 * @param: projection: what will be returned
 * @param: callback: callback function wich will response feed or error
 * @return: callback object
 **/
exports.getFeedById = (id, projection, callback) => {
    
        FeedModel.Feed.findOne({
            _id: id
        })
            //.select(projection)
            .exec((error, feed) => {
    
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
exports.insertFeed = (feedPersist, callback) => {
        FeedModel.Feed.create(
            feedPersist,
            (err, feed) => {
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
exports.removeFeed = (id, callback) => {
        FeedModel.Feed.remove({
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
exports.getAllFeed = (callback) => {
    
    FeedModel.Feed.find({

    })
        //.select(projection)
        .exec((error, feed) => {

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