const path = require('path');

if (!process.env.NODE_ENV) {
  process.env.NODE_ENV = 'development';
}

const NODE_ENV = process.env.NODE_ENV;

const loadersConfig = require('./loaders-webpack.config.js');
const pluginsConfig = require('./plugins-webpack.config.js');

const srcPath = path.join(__dirname, '..', 'src');
const buildPath = path.join(__dirname, '..', 'dist');

const baseConfig = {
  context: srcPath,
  entry: './index.jsx',
  output: {
    filename: './assets/js/[name].[chunkhash].js',
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

const devConfig = {
  devtool: 'inline-source-map',
  devServer: {
    port: 8080,
  },
};

const prodConfig = {
  devtool: 'nosources-source-map',
  devServer: {
    contentBase: buildPath,
    compress: true,
    port: 8080,
  },
};

const config = Object.assign(
  {},
  baseConfig,
  (NODE_ENV === 'production' ? prodConfig : devConfig)
);
module.exports = config;
