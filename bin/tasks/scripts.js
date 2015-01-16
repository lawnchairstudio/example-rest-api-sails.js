var gulp = require('gulp');
var browserify = require('browserify'); // Bundles JS.
var reactify = require('reactify');  // Transforms React JSX to JS.
var plumber = require('gulp-plumber');
var gutil = require('gulp-util');
var rev = require('gulp-rev');
var buffer = require('gulp-buffer');
var uglify = require('gulp-uglify');
var source = require('vinyl-source-stream');

module.exports = function () {

  // Bundle 1: app.js
  browserify(gulp.cache.opt.src + '/js/app.js')
    .bundle()
    .pipe(plumber())
    .on('error', gutil.log)
    .pipe(source('app.js'))
    .pipe(buffer())
    .pipe(gulp.dest(gulp.cache.opt.dest + '/public/js/'))

  // Bundle 2: react-liker.js
  browserify(gulp.cache.opt.src + '/js/modules/liker/index.js')
    .transform(reactify)
    .bundle()
    .on('error', gutil.log)
    .pipe(source('react-liker.js'))
    .pipe(buffer())
    .pipe(uglify())
    .pipe(gulp.dest(gulp.cache.opt.dest + '/public/js/'))

};
