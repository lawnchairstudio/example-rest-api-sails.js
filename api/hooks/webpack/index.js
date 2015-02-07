module.exports = function (sails) {
  return {

    initialize: function (callback) {

      try {
        var webpack = require('webpack');
        var server = require('webpack-dev-server');
        var config = require('../../../webpack.config');
      } catch (error) {
        console.error('WebPack hook has errored.');
        console.error(error);
      }

      if (process.env.NODE_ENV === 'development') {

        var port = 3000;

        new server(webpack(config), {
          contentBase: '.tmp/',
          publicPath: config.publicPath,
          path: '.tmp/public/bundles',
          hot: true,
          quiet: false,
          noInfo: false,
          lazy: true,
          watchDelay: 300
        }).listen(port, 'localhost', function (error, result) {
          if (error) {
            console.error('WebPack hook has errored.');
            console.error(error);
          } else {
            console.log('Listening to http://localhost:' + port);
            console.log(config);
            return callback();
          }
        }.bind(this));

      }
    }

  };
};
