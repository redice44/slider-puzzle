var path = require('path');
var webpack = require('webpack');

var config = {
  entry: {
    'dist/16-slider': './src/index.js'
  },
  output: {
    path: './',
    filename: '[name].js'
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        loader: 'babel',
        exclude: /node_modules/
      }
    ]
  },
  plugins: [
  /*
    new webpack.optimize.CommonsChunkPlugin('build/assets/js/vendor',
      'build/assets/js/vendor.js'),
  */
  ]
};

module.exports = config;
