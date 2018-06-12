const path = require("path");
const webpack = require('webpack');
const { resolve } = require('./config/helper');
const HtmlWebpackPlugin = require("html-webpack-plugin"); //generate index.html file
const CleanWebpackPlugin = require("clean-webpack-plugin"); //clean dist folder
const MiniCssExtractPlugin = require("mini-css-extract-plugin"); //提取css文件
const VueLoaderPlugin = require('vue-loader/lib/plugin')

const devMode = process.env.NODE_ENV !== 'production';

module.exports = {
  entry: {
    main: resolve("src/main.js"),
    vendor: ['vue', 'vue-router']
  },
  output: {
    filename: "[name].[hash].js",
    path: resolve("dist"),
    chunkFilename: '[id].[hash].js'
  },
  mode: devMode ? "development" : 'production',
  devtool: 'cheap-module-source-map',
  resolve: {
    extensions: ['.js', '.vue', '.json', 'scss'],
    modules: [resolve('./public/images/'), 'node_modules'] //绝对路径的模块依赖优先查找地址
  },
  module: {
    rules: [
      {
        test: /\.vue$/,
        loader: 'vue-loader',
        include: [resolve('src')],
        options: {
          hotReload: devMode ? true : false
        }
      },
      {
        test: /\.scss$/,
        include: [resolve('src')],
        use: [
          MiniCssExtractPlugin.loader,
          "css-loader",
          "sass-loader"
        ]
      },
      {
        test: /\.js$/,
        exclude: /(node_modules|bower_components)/,
        loader: "babel-loader"
      },
      {
        test: /\.(png|jpg|jpeg|gif)$/,
        exclude: /node_modules/,
        use: [
          {
            loader: 'url-loader',
            options: {
              limit: 2048,
              name: "[name].[ext]",
              outputPath: 'images'
            }
          },
        ]
      },
      {
        test: /\.(eot|svg|ttf|woff|woff2|otf)$/,
        exclude: /node_modules/,
        use: [{
            loader: "url-loader",
            options: {
              limit: 8192,
              name: "[name].[ext]",
              outputPath: 'svg'
            }
        }]
      }
    ]
  },
  optimization: {
    runtimeChunk: false,
    splitChunks: {
      cacheGroups: {
        vendor: {
          name: "vendor",
          test: /node_modules/,
          chunks: "all",
          minChunks: 2
        },
        common: {
          name: 'common',
          test: /src/,
          chunks: 'all',
          minChunks: 2  //至少两个模块引用则单独打包
        },
        styles: {
          name: 'styles',
          test: /\.scss$/,
          chunks: 'all',
          enforce: true
        }
      }
    }
  },
  // 添加插件
  plugins: [
    new CleanWebpackPlugin(["dist"]),

    new HtmlWebpackPlugin({
      title: "zhangyan test",
      template: 'index.html',
      hash: true
    }),

    //提取CSS文件
    new MiniCssExtractPlugin({
      // both options are optional
      filename: "[name].css",
      chunkFilename: "[id].css"
    }),
    
    new webpack.ProvidePlugin({
      Vue: 'vue'
    }),

    new VueLoaderPlugin()
  ],

  devServer: {
    contentBase: path.resolve(__dirname, 'dist'),
    compress: true,
    host: '127.0.0.1',
    port: 3600,
    historyApiFallback: true
  }
};
