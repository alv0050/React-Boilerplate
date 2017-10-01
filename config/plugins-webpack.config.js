const path = require('path');
const webpack = require('webpack');
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const HTMLWebpackPlugin = require('html-webpack-plugin');

const NODE_ENV = process.env.NODE_ENV;

const rootApp = path.join(__dirname, '../');
const srcPath = path.join(__dirname, '../src');

const basePlugins = [
  new CleanWebpackPlugin(['dist'], {
    root: rootApp,
  }),
  new webpack.DefinePlugin({
    'process.env': {
      NODE_ENV: JSON.stringify(NODE_ENV),
    },
  }),
  new HTMLWebpackPlugin({
    template: path.join(srcPath, 'index.html'),
    filename: 'index.html',
    inject: 'body',
  }),
];

const devPlugins = [];

const prodPlugins = [
  new UglifyJSPlugin({
    sourceMap: true,
  }),
  new webpack.HashedModuleIdsPlugin(),
  new webpack.optimize.CommonsChunkPlugin({
    name: 'vendor',
    minChunks: module => module.context && module.context.indexOf('node_modules') !== -1,
  }),
  new webpack.optimize.CommonsChunkPlugin({
    name: 'manifest',
  }),
];

const plugins = basePlugins.concat(NODE_ENV === 'production' ? prodPlugins : devPlugins);
module.exports = plugins;
