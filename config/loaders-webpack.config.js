/**
 * Environment Vars
 */
const { NODE_ENV } = process.env;

/**
 * Directory Paths
 */
const babelConfig = require('./babel.config.js');

const { srcPath } = require('./paths');

/**
 * Webpack config shared by dev and prod
 * @type {Object}
 */
const baseLoaders = [{
  test: /\.jsx?$/,
  include: srcPath,
  loader: 'babel-loader',
  options: babelConfig,
}, {
  test: /\.jsx?$/,
  include: srcPath,
  loader: 'stylelint-custom-processor-loader',
  options: {
    configPath: './src/.stylelintrc.json',
  },
}, {
  enforce: 'pre',
  test: /\.jsx?$/,
  include: srcPath,
  loader: 'eslint-loader',
  options: {
    cache: true,
    emitError: true,
    emitWarning: true,
  },
}];

/**
 * Development-only webpack loaders configuration
 * @type {Object}
 */
const devLoaders = [{
  test: /\.(ico|svg|png|jpg|gif)$/,
  use: [
    {
      loader: 'file-loader',
      options: {
        name: '[name].[ext]',
        useRelativePath: true,
        emitFile: false,
      },
    },
  ],
}];

/**
 * Production-only webpack loaders configuration
 * @type {Object}
 */
const prodLoaders = [{
  test: /\.(ico|svg|png|jpg|gif)$/,
  use: [
    {
      loader: 'file-loader',
      options: {
        name: 'assets/images/[name].[hash].[ext]',
      },
    },
  ],
}];

/**
 * Actual webpack loader config object
 * @type {Object}
 */
const loaders = NODE_ENV === 'production' ? baseLoaders.concat(prodLoaders) : baseLoaders.concat(devLoaders);
module.exports = loaders;
