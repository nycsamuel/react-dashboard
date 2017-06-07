const path = require('path');

const config = {
  entry: {
    app: './src/components/App/App.js',
    vendors: './src/vendors/vendor.js',
  },
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
  }
};

module.exports = config;
