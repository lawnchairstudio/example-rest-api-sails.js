var gulp = require('gulp');
var del = require('del');

module.exports = function (callback) {
  del([gulp.cache.opt.dest], callback);
};
