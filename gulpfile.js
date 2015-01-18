var gulp = require('gulp');
var tasks = require('./bin/tasks');
var utils = require('./bin/utils');

gulp.cache = {};

gulp.cache.opt = {
  src: './',
  dest: './.build/'
};

gulp.task('bundle', tasks.bundle);
gulp.task('copy', tasks.copy);
gulp.task('build',['scripts','copy']);
gulp.task('clean', utils.clean);
gulp.task('watch', utils.watch);
gulp.task('default', ['build']);
