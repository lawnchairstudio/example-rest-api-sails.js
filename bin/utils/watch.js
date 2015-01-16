var gulp = require('gulp');
var minimist = require('minimist');

module.exports = function (callback) {

  var argv = minimist(process.argv.slice(2));

  if (argv.serve) {
    if (typeof argv.serve === 'number') { // If a port number is specified, use it instead of the default
      var port = argv.serve;
      if (opt.port.toString().length != 4) {
        throw new Error('Server port must be a 4 digit number');
      }
    };

    var server = require('./server');

    server.init({
      port: port || process.env.PORT || 8000,
      root: gulp.cache.opt.dest
    }, server.listen);

    gulp.watch(gulp.cache.opt.dest + '/**/*.html', server.refresh);
  };

  gulp.task('scripts', require('../tasks/scripts.js'));
  
  gulp.watch(gulp.cache.opt.src + '/js/**/*.js', ['scripts']);
  
};
