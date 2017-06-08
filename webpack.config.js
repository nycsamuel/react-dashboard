'use strict'

const path              = require('path');
const webpack           = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

const APP_DIR   = path.resolve(__dirname, 'src');
const BUILD_DIR = path.resolve(__dirname, 'dist');

module.exports = {
  entry: {
    app: `${APP_DIR}/index.js`,
    // vendor: `${APP_DIR}/vendor/moment.js`,
    // vendor: 'moment',
  },
  output: {
    // filename: 'bundle.js', // for single entry point
    // filename: '[name].js', // for multiple entry points
    filename: '[name].[hash].js', // for code splitting (vendor) with caching
    path: BUILD_DIR,
  },
  devtool: 'cheap-eval-source-map',
  module: {
    rules: [
      { test: /\.txt$/, use: 'raw-loader' },
      // { test: /\.css$/, use: ['style-loader', 'css-loader'] }, // this is not asynchronous
      { test: /\.css$/, use: ExtractTextPlugin.extract({ use: 'css-loader' }) }, // asynchronous method
      { test: /\.(jpe?g|png|gif|svg)$/i, use: 'file-loader?name=/img/[name].[ext]' },
      { 
        test: /\.(js|jsx)$/, 
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader',
          options: { 
              presets: ['es2015', 'react'],
              plugins: [ 
                  ['transform-strict-mode', { "strict": true }], 
                  [require('babel-plugin-transform-object-rest-spread')],
              ], 
          },
        },
      },
   ],
  },
  plugins: [
    new ExtractTextPlugin('style.css'), // enable async method to load css styles
    // new ExtractTextPlugin('/css/[name].css', { allChunks: true }), // bobby's config
    new webpack.HotModuleReplacementPlugin(), // enable HMR
    new webpack.optimize.UglifyJsPlugin(),
    new webpack.optimize.CommonsChunkPlugin({
      name: 'vendor',
      minChunks: function (module) {
        return module.context && module.context.indexOf('node_modules') !== -1; // assume vendor imports exists in the node_modules/
      }
    }),
    new webpack.optimize.CommonsChunkPlugin({
      name: 'manifest'
    }),
    new HtmlWebpackPlugin({
      template:'./src/index.html' // taken from webpack site
      // template: require('html-webpack-template'), // from bobby's webpack; requires html-webpack-template module
    }),
  ],
};