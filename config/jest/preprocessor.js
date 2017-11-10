const babel = require('babel-core');
// const jestPreset = require('babel-preset-jest')

module.exports = {
  process: (src) => {
    const transformCfg = {
      presets: ['env', 'react'],
    };
    return babel.transform(src, transformCfg).code;
  },
};
