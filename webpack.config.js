const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');   //generate index.html file
const CleanWebpackPlugin = require('clean-webpack-plugin'); //clean dist folder

module.exports = {
  entry: path.resolve(__dirname, 'src/index.js'),
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'dist')
  },
  rules: [{
    test: '/\.css$/',
    use: [
      {loader: 'style-loader'},
      {loader: 'css-loader', options: {modules: true}}
    ],
    
  }],
  // 添加插件
  plugins: [
    new CleanWebpackPlugin(['dist']),

    new HtmlWebpackPlugin({
      title: 'zhang yan is a boy'
    })
  ]
}