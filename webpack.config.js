var webpack = require('webpack');

module.exports = {
  entry: {
    register: './assets/js/modules/register',
    profile: './assets/js/modules/profile',
  },
  output: {
    publicPath: '/public/bundles/',
    path: './.tmp/public/bundles/',
    filename:'[name].js'  
  },
  module: {
    loaders: [
      { test: /\.less$/, loader: "style-loader!css-loader!less-loader" },
      { test: /\.css$/, loader: 'style-loader!css-loader' },
      { test: /\.jsx$/, exclude: /node_modules/, loader: 'jsx-loader?harmony' },
      { test: /\.(png|jpg)$/, loader: 'url-loader?limit=8192'} // inline base64 URLs for <=8k images, direct URLs for the rest
    ]
  },
  resolve: {
    extensions: ['.css','.js','.json', '.jsx'] 
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
