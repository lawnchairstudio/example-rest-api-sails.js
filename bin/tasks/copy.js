var gulp = require('gulp');

module.exports = function (callback) {
  gulp.src(gulp.cache.opt.src + '/images/**')
   .pipe(gulp.dest(gulp.cache.opt.dest + '/images/'));
  gulp.src(gulp.cache.opt.src + '/fonts/**')
   .pipe(gulp.dest(gulp.cache.opt.dest + '/fonts/'));
  callback();
};
