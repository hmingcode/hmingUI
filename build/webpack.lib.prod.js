// 打包所有
// node.js里面自带的操作路径的模块
const path = require('path')
const { merge } = require('webpack-merge')
const webpackLibBaseConfig = require('./webpack.lib.base')
// 用于提取到css文件中
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
// 用于压缩css代码
// const OptimizeCssnanoPlugin = require('@intervolga/optimize-cssnano-plugin')
// 用于压缩css代码
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin')

module.exports = merge(webpackLibBaseConfig, {
  mode: 'production',
  devtool: 'source-map',
  entry: {
    hmingui: path.resolve(__dirname, '../packages/hmingui.js')
  },
  output: {
    // 打包过后的文件输出路径
    path: path.resolve(__dirname, '../lib'),
    // 打包后生成的js文件
    filename: '[name].js',
    publicPath: '/',
    library: 'hmingui',
    libraryTarget: 'umd',
    libraryExport: 'default',
    umdNamedDefine: true
  },
  module: {
    rules: [
      {
        test: /\.(scss|sass|css)$/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader // 使用miniCssExtractPlugin.loader代替style-loader
          },
          {
            loader: 'css-loader'
          },
          {
            loader: 'sass-loader'
          },
          {
            loader: 'postcss-loader'
          }
        ]
      }
    ]
  },
  optimization: {
    minimizer: [
      // 在 webpack@5 中，你可以使用 `...` 语法来扩展现有的 minimizer（即 `terser-webpack-plugin`），将下一行取消注释
      // `...`,
      // 压缩css
      new CssMinimizerPlugin()
    ]
  },
  plugins: [
    // 新建MiniCssExtractPlugin实例并配置
    new MiniCssExtractPlugin({
      filename: '[name].css'
    })
    // 压缩css
    // new OptimizeCssnanoPlugin({
    //   sourceMap: true,
    //   cssnanoOptions: {
    //     preset: [
    //       'default',
    //       {
    //         discardComments: {
    //           removeAll: true
    //         }
    //       }
    //     ]
    //   }
    // })
  ]
})
