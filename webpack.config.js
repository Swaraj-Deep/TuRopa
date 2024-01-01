/* eslint-disable no-undef */
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const Webpack = require('webpack');

require('dotenv').config();

const htmlWebpackPlugin = new HtmlWebpackPlugin({
  template: './public/html/index.html',
});

const miniCssExtractPlugin = new MiniCssExtractPlugin();

const providePlugin = new Webpack.ProvidePlugin({
  React: 'react',
});

module.exports = {
  mode: 'development',
  devtool: 'inline-source-map',
  context: __dirname,
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].bundle.js',
    publicPath: '/',
  },
  devServer: {
    port: process.env.PORT,
    hot: true,
    historyApiFallback: true,
  },
  resolve: {
    alias: {
      '@components': path.resolve(__dirname, 'src/components'),
      '@layouts': path.resolve(__dirname, 'src/layouts'),
      '@utils': path.resolve(__dirname, 'src/utils'),
      '@constants': path.resolve(__dirname, 'src/constants'),
      '@pages': path.resolve(__dirname, 'src/pages'),
      '@hooks': path.resolve(__dirname, 'src/hooks'),
      '@services': path.resolve(__dirname, 'src/services'),
    },
    extensions: ['.js', '.jsx'],
  },
  module: {
    rules: [
      {
        test: /\.js$|jsx/,
        use: 'babel-loader',
      },
      {
        test: /\.css/,
        use: [
          MiniCssExtractPlugin.loader,
          {
            loader: 'css-loader',
            options: { modules: true },
          },
        ],
      },
    ],
  },
  plugins: [htmlWebpackPlugin, providePlugin, miniCssExtractPlugin],
};
