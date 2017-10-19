const { NODE_ENV } = process.env;

const babelConfig = require('./babel.config.js');

const { srcPath } = require('./paths');

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

const loaders = NODE_ENV === 'production' ? baseLoaders.concat(prodLoaders) : baseLoaders.concat(devLoaders);
module.exports = loaders;
