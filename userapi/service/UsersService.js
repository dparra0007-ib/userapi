'use strict';


/**
 * Creates a new user
 *
 * user User User object
 * no response value expected for this operation
 **/
exports.usersAdduserPOST = function(user) {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}


/**
 * Deletes a single user
 *
 * id Integer User's id
 * no response value expected for this operation
 **/
exports.usersDeleteuserIdDELETE = function(id) {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}


/**
 * Returns all users
 *
 * returns User
 **/
exports.usersUserlistGET = function() {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "gender" : "gender",
  "location" : "location",
  "fullname" : "fullname",
  "email" : 0,
  "age" : 6,
  "username" : "username"
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}

