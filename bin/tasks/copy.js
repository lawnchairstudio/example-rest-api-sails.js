var gulp = require('gulp');

module.exports = function (callback) {
  gulp.src(gulp.cache.opt.src + '/img/**')
   .pipe(gulp.dest(gulp.cache.opt.dest + '/public/img/'));
  callback();
};
