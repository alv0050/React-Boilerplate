const merge = require('webpack-merge');

// First thing first, check the NODE_ENV. If undefined, set to development
if (!process.env.NODE_ENV) {
  process.env.NODE_ENV = 'development';
}

/**
 * Environment Vars
 */
const { NODE_ENV } = process.env;

/**
 * Directory Paths
 */
const { srcPath, buildPath } = require('./paths');
const loadersConfig = require('./loaders-webpack.config.js');
const pluginsConfig = require('./plugins-webpack.config.js');

/**
 * Webpack config shared by dev and prod
 * @type {Object}
 */
const baseConfig = {
  context: srcPath,
  entry: './index.jsx',
  output: {
    filename: './assets/js/[name].[hash].js',
    path: buildPath,
  },
  module: {
    rules: loadersConfig,
  },
  resolve: {
    extensions: ['.js', '.jsx', '.json'],
  },
  plugins: pluginsConfig,
};

/**
 * Development-specific webpack configuration
 * @type {Object}
 */
const devConfig = {
  devtool: 'inline-source-map',
  devServer: {
    port: 8080,
    hot: true,
  },
};

/**
 * Production-specific webpack configuration
 * @type {Object}
 */
const prodConfig = {
  devtool: 'nosources-source-map',
  devServer: {
    contentBase: buildPath,
    compress: true,
    port: 8080,
  },
};

/**
 * Actual webpack config object
 * @type {Object}
 */
const config = merge(
  baseConfig,
  (NODE_ENV === 'production' ? prodConfig : devConfig)
);
module.exports = config;
