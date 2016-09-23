const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
module.exports = {
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js'
  },
  resolve: {
    root: [
      path.resolve('./src'),
      path.resolve('./node_modules')
    ]
  },
  devServer: {
    proxy: {}
  },
  entry: './src/index.js',
  module: {
    loaders: [
      {
        test: /\.js$/,
        loader: 'babel'
      },
      {
        test: /\.pug$/,
        loader: 'pug'
      }
    ]
  },
  plugins: [new HtmlWebpackPlugin({
    title: 'My App',
    template: 'src/index.pug'
  })]
};
