'use strict';

var utils = require('../utils/writer.js');
var Users = require('../service/UsersService');

module.exports.usersAdduserPOST = function usersAdduserPOST (req, res, next) {
  var user = req.swagger.params['user'].value;
  Users.usersAdduserPOST(user)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.usersDeleteuserIdDELETE = function usersDeleteuserIdDELETE (req, res, next) {
  var id = req.swagger.params['id'].value;
  Users.usersDeleteuserIdDELETE(id)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.usersUserlistGET = function usersUserlistGET (req, res, next) {
  Users.usersUserlistGET()
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
