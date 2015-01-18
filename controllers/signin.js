'use strict';

var SigninModel = require('../models/signin');

module.exports = function (router) {

  var model = new SigninModel();
  
  router.get('/signin', function (req, res) {
    res.send();
  });
  
};
