var gulp = require('gulp');
var tasks = require('./bin/tasks');
var tests = require('./bin/tests');
var utils = require('./bin/utils');

gulp.cache = {};

gulp.cache.opt = {
  src: './<%= src =>',
  dest: './<%= dest =>'
};

gulp.task('scripts', tasks.scripts);
gulp.task('copy', tasks.copy);
gulp.task('build',['scripts','copy']);
gulp.task('jshint', tests.jshint);
gulp.task('recess', tests.recess);
gulp.task('test', ['recess','jshint']);
gulp.task('clean', utils.clean);
gulp.task('deploy', utils.deploy);
gulp.task('watch', utils.watch);
gulp.task('default', ['build']);
