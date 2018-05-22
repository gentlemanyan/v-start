const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');   //generate index.html file
const CleanWebpackPlugin = require('clean-webpack-plugin'); //clean dist folder
const ExtractTextPlugin = require("extract-text-webpack-plugin");  // css file

module.exports = {
  entry: path.resolve(__dirname, 'src/index.js'),
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'dist')
  },
  // module: {
  //   rules: [{
  //     test: '/\.scss$/',
  //     include: path.resolve(__dirname, 'styles/app.scss'),
  //     use: ExtractTextPlugin.extract({
  //       use: ['css-loader', 'sass-loader'],
  //       fallback: 'style-loader'
  //     })
  //   }],
  // },
  // 添加插件
  plugins: [
    new CleanWebpackPlugin(['dist']),

    new HtmlWebpackPlugin({
      title: 'zhang yan is a boy'
    })
  ]
}