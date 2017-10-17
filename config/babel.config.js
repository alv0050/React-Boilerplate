const merge = require('webpack-merge');

const { NODE_ENV } = process.env;

const baseConfig = {
  presets: [
    'env',
    'react',
  ],
};

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

const config = merge(
  baseConfig,
  NODE_ENV === 'production' ? prodConfig : devConfig
);
module.exports = config;
