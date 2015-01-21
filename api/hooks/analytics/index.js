/**
 * analytics hook
 */
module.exports = function (sails) {
  return {

    initialize: function (next) {
      if (process.env.NODE_ENV === 'production') {
        var analytics = new require('analytics-node')(process.env.SEGMENT);
      } 
      return next();
    }

  };
};
