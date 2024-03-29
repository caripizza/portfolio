const HtmlPlugin = require('html-webpack-plugin');
const CleanPlugin = require('clean-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const prodFlag = process.env.NODE_ENV === 'production' ? 'production' : 'development';

module.exports = {
  mode: prodFlag,
  devtool: prodFlag ? 'source-map' : 'eval-source-map',
  entry: ['@babel/polyfill', './src/index.js'],
  output: {
    filename: '[name].[chunkhash].js',
    publicPath: '/'
  },
  devServer: {
    port: 7890,
    historyApiFallback: true
  },
  plugins: [
    new HtmlPlugin({
      template: './src/index.html',
      inlineSource: 'runtime~main.+\\.js',
      favicon: './assets/favicon.ico'
    }),
    new CleanPlugin('./dist'),
    new MiniCssExtractPlugin({
      filename: '[name].css',
      chunkFilename: '[id].css',
    }),
    new CopyWebpackPlugin({
      patterns: [{ from: 'public' }]
    }),
  ],
  optimization: {
    splitChunks: {
      chunks: 'all',
    },
    runtimeChunk: true,
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env', '@babel/preset-react'],
            plugins: ['@babel/plugin-proposal-class-properties'],
            cacheDirectory: true
          }
        }
      },
      {
        test: /\.css$/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
          },
          {
            loader: 'css-loader',
            options: {
              sourceMap: true,
              modules: true,
              importLoaders: 1
            }
          },
          {
            loader: 'postcss-loader',
            options: {
              sourceMap: true,
              plugins: [
                require('autoprefixer')(),
                require('postcss-nested')()
              ]
            }
          }
        ]
      },
      {
        test: /\.(jpeg|jpg|png|svg|gif)$/,
        use: {
          loader: 'url-loader',
          options: { limit: 8192 },
        },
      }
    ]
  }
};
