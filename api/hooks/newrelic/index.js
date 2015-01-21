/**
 * newrelic hook
 */
module.exports = function (sails) {
  return {

    initialize: function (next) {
      require('newrelic');
      return next();
    }

  };
};
