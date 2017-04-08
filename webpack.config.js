const path = require('path');

module.exports = {
  context: path.resolve(__dirname, './src'),
  entry: {
    vue: './vue/index.js'
  },
  output: {
    path: path.resolve(__dirname, './src/public/js'),
    filename: '[name].bundle.js'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: [/node_modules/],
        use: [{
          loader: 'babel-loader',
          options: { presets: ['es2015'] }
        }]
      }
    ]
  }
}