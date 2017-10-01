const NODE_ENV = process.env.NODE_ENV;

const baseConfig = {
  presets: [
    'env',
    'react',
  ],
};

const devConfig = {};

const prodConfig = {};

const config = Object.assign(
  {},
  baseConfig,
  NODE_ENV === 'production' ? prodConfig : devConfig
);
module.exports = config;
