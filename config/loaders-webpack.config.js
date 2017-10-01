const NODE_ENV = process.env.NODE_ENV;

const babelConfig = require('./babel.config.js');

const baseLoaders = [{
  test: /\.jsx?$/,
  exclude: '/node_modules/',
  loader: 'babel-loader',
  options: babelConfig,
}];

const devLoaders = [];

const prodLoaders = [];

const loaders = NODE_ENV === 'production' ? baseLoaders.concat(prodLoaders) : baseLoaders.concat(devLoaders);
module.exports = loaders;
