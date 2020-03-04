const path = require('path');

module.exports = {
  mode: 'development',
  entry: './src/index.js',
  output: {
    filename: 'bindle.js',
    path: path.resolve(__dirname, 'public', 'build'),
  },
  watch: true,
  watchOptions: {
    aggregateTimeout: 1000,
    poll: 1000,
    ignored: /node_modules/,
  }
};
