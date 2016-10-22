const path = require('path');
const webpack = require('webpack');
module.exports = {
  entry: './src/index.ts',
  devtool: '#source-map',
  target: 'node',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js'
  },
  resolve: {
    root: [
      path.resolve('./src'),
      path.resolve('./node_modules')
    ],
    extensions: ['', '.webpack.js', '.web.js', '.ts', '.tsx', '.js'],
    alias: {}
  },
  module: {
    loaders: [
      {
        test: /\.ts$/,
        loader: 'ts-loader'
      }
    ]
  },
  devServer: {
    proxy: {}
  },
  plugins: [new webpack.optimize.OccurrenceOrderPlugin(), new webpack.HotModuleReplacementPlugin()]
};
