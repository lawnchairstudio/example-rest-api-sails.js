'use strict';

var gulp = require('gulp');
var path = require('path');
var less = require('gulp-less');
var gutil = require('gulp-util');
var prefix = require('gulp-autoprefixer');
var minify = require('gulp-minify-css');
var plumber = require('gulp-plumber');
var opt = require('../options.json');
var header = require('../utils/header');

module.exports = function () {

  var src = opt.src + '/less/*.less';
  var dest = opt.dest;

  gulp.src(src)
    .pipe(plumber())
    .pipe(less({paths: [ path.join(__dirname, 'less', 'includes') ] }))
    .pipe(prefix('last 2 version','safari 5','opera 12.1'))
    .pipe(header('Primary stylesheet.'))
    .pipe(minify())
    .pipe(gulp.dest(dest));    

};
