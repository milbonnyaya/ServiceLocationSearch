const path = require('path');
var webpack = require('webpack');
const helpers = require('./helpers');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

const ENV = process.env.NODE_ENV = process.env.ENV = 'development';
const API_URL = 'https://anaheim-proj-production.appspot-preview.com';

module.exports = {
  entry: [
    './src/main.js'
  ],
  output: {
    path: __dirname,
    publicPath: '/',
    filename: 'bundle.js'
  },
  devServer: {
    contentBase: './',
    historyApiFallback: true,
    stats: 'minimal'
  },
  module: {
    loaders: [
      { test: /\.js$/, loader: 'babel-loader', exclude: /node_modules/ },
      {
          test: /\.css$/,
          use: ExtractTextPlugin.extract({
            fallback: "style-loader",
            use: "css-loader"
          })
      }
    ]
  },
  resolve: {
    extensions: ['.js', '.jsx']
  },
  plugins: [
    new ExtractTextPlugin("styles.css"),
    new webpack.DefinePlugin({
        'process.env': {
            'API_URL': JSON.stringify(API_URL),
            'ENV': JSON.stringify(ENV),
            'NODE_ENV': JSON.stringify(ENV)
        }
    })
  ]
};
