'use strict';

var SigninModel = require('../models/signin');

module.exports = function (router) {

  var model = new SigninModel();
  
  router.get('/signin', function (req, res) {
    res.send('<code><pre>' + JSON.stringify(model, null, 2) + '</pre></code>');
  });
  
};
