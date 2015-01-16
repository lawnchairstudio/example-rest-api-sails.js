var express = require('express');
var compression = require('compression');
var gutil = require('gulp-util');
var chalk = require('chalk');
var livereload = require('tiny-lr')();

/**
 * @function init
 * @description Start the server.
 * @param {object} config
 * @param {function} callback
 */
exports.init = function (config, callback) {
  var config = config || {};
  var app = express();
  
  function startup (callback) {
    gutil.log('Starting the server...')
    app.use(require('connect-livereload')());
    app.use(compression());
    app.use(express.static(config.root + '/'));
    app.listen(config.port);    
    callback();
  };

  startup(function() {
    gutil.log('Listening at ' + chalk.magenta('http://localhost:' + config.port + '.'));
  });
  
  callback();
};

/**
 * @fucntion listen
 * @description Listen to the server for changes.
 */
exports.listen = function () {
  livereload.listen(35729);
};

/**
 * @function refresh
 * @description Refresh the server.
 * @param {object} event
 */
exports.refresh = function (event) {

  var file = require('path').relative(gulp.cache.opt.dest, event.path); // The changed file.
  
  gutil.log(chalk.magenta(file) + ' changed.');

  livereload.changed({
    body: {
      files: [gulp.cache.opt.dest]
    }
  });

};
