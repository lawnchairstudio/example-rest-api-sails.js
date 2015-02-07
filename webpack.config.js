var path = require('path');
var webpack = require('webpack');

module.exports = {
  devtool: 'eval-source-map',
  debug: true,
  context: path.join(__dirname + '/assets/js/modules'),
  entry: {
    profile: [
      'webpack-dev-server/client?http://localhost:3000',
      'webpack/hot/only-dev-server',
      './profile'
    ]
  },
  output: {
    publicPath: '/public/bundles/',
    path: path.join(__dirname + '/.tmp/public/bundles/'),
    filename:'[name].js'
  },
  externals: {
    'react': 'react'
  },
  module: {
    loaders: [
      {
        test: /\.less$/,
        loader: "style-loader!css-loader!less-loader"
      },
      {
        test: /\.css$/,
        loader: 'style-loader!css-loader'
      },
      {
        test: /\.jsx$/,
        loader: 'jsx-loader?harmony'
      },
      {
        test: /\.(png|jpg)$/, // inline base64 URLs for <=8k images, direct URLs for the rest
        loader: 'url-loader?limit=8192'
      }
    ]
  },
  resolve: {
    extensions: ['.css','.js','.jsx','.json'],
    modulesDirectory: ['web_modules', 'node_modules']
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin(),
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.optimize.DedupePlugin(),
    new webpack.optimize.UglifyJsPlugin({
      compress: {
          warnings: false
      }
    }),
    new webpack.DefinePlugin({
      _DEVELOPMENT_: JSON.stringify(JSON.parse(process.env.DEVELOPMENT || 'true')),
      _STAGING_: JSON.stringify(JSON.parse(process.env.STAGING_|| 'false'))
    })
  ]

};
