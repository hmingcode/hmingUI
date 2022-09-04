// 用于对组件单独打包，便于按需加载
const path = require('path')
// 用于提取到css文件中
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
// 用于压缩css代码
// const OptimizeCssnanoPlugin = require('@intervolga/optimize-cssnano-plugin')
// 用于压缩css代码
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin')
const { merge } = require('webpack-merge')
const BaseConfig = require('./webpack.lib.base.js')
// 引入入口配置文件
const entryConfig = require('../packages/entry_config.js')

let entry = {}
entryConfig.map((item) => {
  let componentName = item.toLowerCase()
  entry[componentName] = path.resolve(__dirname, '../packages/components/' + componentName + '/index.js')
})

module.exports = merge(BaseConfig, {
  mode: 'production',
  devtool: 'source-map',
  entry,
  output: {
    // 打包过后的文件的输出的路径
    path: path.resolve(__dirname, '../lib/packages'),
    // 打包后生成的js文件
    // 解释下这个[name]是怎么来的，它是根据你的entry命名来的，入口叫啥，出口的[name]就叫啥
    filename: '[name]/index.js',
    // 我这儿目前还没有资源引用
    publicPath: '/',
    library: '[name]',
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
            loader: MiniCssExtractPlugin.loader // 使用MiniCssExtractPlugin.loader代替style-loader
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
      filename: '[name]/style.css'
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
