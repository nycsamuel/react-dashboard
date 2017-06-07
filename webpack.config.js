'use strict'

const path              = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack           = require('webpack');

const APP_DIR   = path.resolve(__dirname, 'src');
const BUILD_DIR = path.resolve(__dirname, 'dist');

module.exports = {
  entry: {
    app: `${APP_DIR}/index.js`,
    vendor: `${APP_DIR}/vendor/vendor.js`,
  },
  output: {
    // filename: 'bundle.js', // for single entry point
    filename: '[name].js', // for multiple entry points
    path: BUILD_DIR,
  },
  module: {
    rules: [
      {test: /\.txt$/, use: 'raw-loader'},
      {test: /\.css$/, use: [
        {loader: 'style-loader'},
        {loader: 'css-loader', options: {modules: true}},
        // need style and css loader for css to be active
      ]}, 
   ],
  },
  plugins: [
    new webpack.optimize.UglifyJsPlugin(),
    new HtmlWebpackPlugin({
      title: 'React Dashboard',
      // template:'./src/index.html' // taken from webpack site
      template: require('html-webpack-template'),
    }),
  ],
};
