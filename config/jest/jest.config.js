const path = require('path');

const { rootApp } = require('./../paths');

const jestConfigFiles = path.join(rootApp, 'config', 'jest');

module.exports = {
  rootDir: rootApp,
  transform: {
    '^.+\\.jsx?$': path.join(jestConfigFiles, 'preprocessor.js'),
  },
  setupFiles: [
    path.join(jestConfigFiles, 'shim.js'),
    path.join(jestConfigFiles, './setupTests.js'),
  ],
};
