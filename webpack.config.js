var webpack = require('webpack');

module.exports = {
  entry: {
    common: './source/js/common',
    register: '',
    profile: '',
  },
  output: {
    publicPath: '/public/js/bundles/',
    path: './dest/public/js/bundles/',
    filename:'[name].js'  
  },
  module: {
    loaders: [
      { test: /\.css$/, loader: 'style-loader!css-loader' },
      { test: /\.jsx$/, loader: 'jsx-loader?harmony' },
      { test: /\.(png|jpg)$/, loader: 'url-loader?limit=8192'} // inline base64 URLs for <=8k images, direct URLs for the rest
    ]
  },
  resolve: {
    extensions: ['.css','.js','.json'] 
  },
  plugins: [
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.optimize.DedupePlugin(),
    new webpack.optimize.UglifyJsPlugin({
      compress: {
          warnings: false
      }
    }),
    new webpack.DefinePlugin({
      development: JSON.stringify(JSON.parse(process.env.DEVELOPMENT || 'true')),
      staging: JSON.stringify(JSON.parse(process.env.STAGING || 'false'))
    })
  ]

};
