/**
 * newrelic hook
 */
module.exports = function (sails) {
  return {

    initialize: function (next) {
      if (process.env.NODE_ENV === 'production') {
        require('newrelic');
      }
      return next();
    }

  };
};
