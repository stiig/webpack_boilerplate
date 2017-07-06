const path = require('path');
const webpack = require('webpack');

const HtmlWebpackPlugin = require('html-webpack-plugin');

const isProd = process.env.NODE_ENV === 'production';

module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
  },

  externals: {},

  module: {
    rules: [
      {
        test: /\.scss$/,
        loaders: [
          'style-loader',
          { loader: 'css-loader', options: { sourceMap: true } },
          'sass-loader',
        ],
      },
      {
        test: /\.pug/,
        loaders: ['html-loader',
          {
            loader: 'pug-html-loader',
            options: {
              pretty: !isProd,
            },
          },
        ],
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/,
        loaders: [
          'file-loader'
        ]
      },
    ],
  },

  devServer: {
    contentBase: path.join(__dirname, 'dist'),
    hot: true,
    compress: true,
  },

  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new HtmlWebpackPlugin(),
  ],
};
