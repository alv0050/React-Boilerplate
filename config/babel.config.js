const merge = require('webpack-merge');

/**
 * Environment Vars
 */
const { NODE_ENV } = process.env;

/**
 * Babel plugin config shared by dev and prod
 * @type {Array}
 */
const baseConfig = {
  presets: [
    'env',
    'react',
  ],
};

/**
 * Development-only babel plugins configuration
 * @type {Array}
 */
const devConfig = {
  plugins: [
    ['babel-plugin-styled-components', {
      ssr: false,
      displayName: true,
      minify: false,
      transpileTemplateLiterals: true,
    }],
  ],
};

/**
 * Production-only babel plugins configuration
 * @type {Array}
 */
const prodConfig = {
  plugins: [
    ['babel-plugin-styled-components', {
      ssr: false,
      displayName: false,
      minify: true,
      transpileTemplateLiterals: true,
    }],
  ],
};

/**
 * Actual babel plugin config object
 * @type {Array}
 */
const config = merge(
  baseConfig,
  NODE_ENV === 'production' ? prodConfig : devConfig
);
module.exports = config;
