const path = require('path');

const rootApp = process.cwd();
const resolvePaths = relativePath => path.resolve(rootApp, relativePath);

const paths = {
  rootApp,
  srcPath: resolvePaths('src'),
  buildPath: resolvePaths('dist'),
  libPaths: resolvePaths('node_modules'),
  publicPath: '/',
};

module.exports = paths;
