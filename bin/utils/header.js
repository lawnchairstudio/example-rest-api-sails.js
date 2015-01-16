var moment = require('moment');
var header = require('gulp-header');

/**
 * Use package.json to get the name and
 * version of the project. Moment.js is
 * used to get the current date.
 */
var pkg = require('../../package.json');

var name = '/*! <%= pkg.name %>';
var version = ' - v<%= pkg.version %> - ';
var date = moment(new Date()).toDate();

/**
 * @param {string} - 'description'
 */
module.exports = function (description) {

  var generate = function (description) {
    if (description) return name + ' - ' + description + version + date + '*/ ';
    else return name + version + date + '*/ ';
  };

  return header(generate(description), { pkg: pkg });
};
