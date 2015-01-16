var gulp = require('gulp');
var path = require('path');
var jshint = require('gulp-jshint');
var gutil = require('gulp-util');

module.exports = function () {
  var src = gulp.cache.opt.src + '/**/*.js';

  gulp.src(src)
    .pipe(jshint( {
      undef: true,
      unused: true,
      node: true,
      browser: true,
      predef: [
        "angular"
      ]
    }))
    .pipe(jshint.reporter('default'))
    .pipe(gulp.dest());
};
