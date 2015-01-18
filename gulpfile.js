var gulp = require('gulp');
var tasks = require('./bin/tasks');
var utils = require('./bin/utils');

gulp.cache = {};

gulp.cache.opt = {
  src: './assets/',
  dest: './.tmp/public/'
};

gulp.task('bundle', tasks.bundle);
gulp.task('styles', tasks.styles);
gulp.task('copy', tasks.copy);
gulp.task('build',['bundle','copy']);
gulp.task('clean', utils.clean);
gulp.task('watch', utils.watch);
gulp.task('default', ['build']);
