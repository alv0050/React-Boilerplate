const path = require('path');
const webpack = require('webpack');
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const HTMLWebpackPlugin = require('html-webpack-plugin');
const HtmlWebpackExternalsPlugin = require('html-webpack-externals-plugin');

const { NODE_ENV } = process.env;

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
  new HtmlWebpackExternalsPlugin({
    externals: [{
      module: 'react',
      global: 'React',
      entry: {
        path: 'https://cdnjs.cloudflare.com/ajax/libs/react/16.0.0/umd/react.production.min.js',
        attributes: {
          integrity: 'sha256-3lmw1FBKoDUME3df7Jt4hZ8+2oPeoh1g3e2Yu3hm1Uo=',
          crossorigin: 'anonymous',
        },
      },
    }, {
      module: 'react-dom',
      global: 'ReactDOM',
      entry: {
        path: 'https://cdnjs.cloudflare.com/ajax/libs/react-dom/16.0.0/umd/react-dom.production.min.js',
        attributes: {
          integrity: 'sha256-DcuTpceFnh+pCf/iObWR7DKb/qgb9eBZ7LG29+HKcFg=',
          crossorigin: 'anonymous',
        },
      },
    }, {
      module: 'prop-types',
      global: 'PropTypes',
      entry: {
        path: 'https://cdnjs.cloudflare.com/ajax/libs/prop-types/15.6.0/prop-types.min.js',
        attributes: {
          integrity: 'sha256-hMV/CxbecNC5yXFYw1PxgYj0AximiDUyWJbacFBm9vE=',
          crossorigin: 'anonymous',
        },
      },
    }, {
      module: 'styled-components',
      global: 'styled',
      entry: {
        path: 'https://cdnjs.cloudflare.com/ajax/libs/styled-components/2.2.1/styled-components.min.js',
        attributes: {
          integrity: 'sha256-Le6hEFyQhfQ2wIcNjuoByKJ+5wwlWoSCkY0PYWoHCzM=',
          crossorigin: 'anonymous',
        },
      },
    }],
  }),
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
