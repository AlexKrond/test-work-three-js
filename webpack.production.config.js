const path = require('path');

module.exports = {
  mode: 'production',
  entry: './src/index.js',
  output: {
    filename: 'bindle.js',
    path: path.resolve(__dirname, 'public', 'build'),
  },
};
