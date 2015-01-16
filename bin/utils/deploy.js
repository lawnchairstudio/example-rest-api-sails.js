var gulp = require('gulp');
var awspublish = require('gulp-awspublish');
var yaml = require('js-yaml');
var fs = require('fs');

module.exports = function () {

  var config = yaml.safeLoad(fs.readFileSync(__dirname + '/../../.aws.yml', 'utf8'));

  var headers = {
    'Cache-Control': 'max-age=315360000, no-transform, public'
  };

  var publisher = awspublish.create({
      key: config.key,
      secret: config.secret,
      bucket: config.bucket,
      region: config.region
    });

  return gulp.src('./dest/**/*')
    .pipe(awspublish.gzip({ext:''}))
    .pipe(publisher.publish(headers))
    .pipe(publisher.cache())
    .pipe(awspublish.reporter());

};