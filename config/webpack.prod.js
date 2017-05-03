const path = require('path');
var webpack = require('webpack');
const helpers = require('./helpers');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

const ENV = process.env.NODE_ENV = process.env.ENV = 'production';
const API_URL = 'https://anaheim-proj-production.appspot-preview.com';

module.exports = {
  devtool: 'source-map',
  entry: [
    './src/main.js'
  ],
  output: {
    path: helpers.root('public/build'),
    publicPath: '/public',
    filename: 'bundle.js'
  },
  devServer: {
    contentBase: './',
    historyApiFallback: true,
    stats: 'minimal'
  },
  module: {
    loaders: [
      { test: /\.js$/, loader: 'babel-loader', exclude: /node_modules/ }
    ]
  },
  resolve: {
    extensions: ['.js', '.jsx']
  },
  plugins: [
    new webpack.DefinePlugin({
        'process.env': {
            'API_URL': JSON.stringify(API_URL),
            'ENV': JSON.stringify(ENV),
            'NODE_ENV': JSON.stringify(ENV)
        }
    })
  ]
};
