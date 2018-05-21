const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');   //generate index.html file
const CleanWebpackPlugin = require('clean-webpack-plugin'); //clean dist folder

module.exports = {
  entry: path.resolve(__dirname, 'src/index.js'),
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'dist')
  },

  // 添加插件
  plugins: [
    new CleanWebpackPlugin(['dist']),

    new HtmlWebpackPlugin({
      title: 'Output Management'
    })
  ],
  node: {
    fs: "empty"
  }
}