const webpack = require('webpack');

const Merge = require('webpack-merge');
const CommonConfig = require('./webpack.common.js');

module.exports = Merge(CommonConfig, {
  devtool: 'cheap-module-source-map',

  devServer: {
    contentBase: path.join(__dirname, 'dist'),
    hot: true,
    compress: true,
  },

  plugins: [
    new webpack.HotModuleReplacementPlugin(),
  ],
})
