var gulp = require('gulp');
var recess = require('gulp-recess');

module.exports = function (callback) {
  return gulp.src(gulp.cache.opt.src + '/less/**/*.less')
    .pipe(recess())
    .pipe(recess.reporter());
};
