const autoprefixer = require('autoprefixer');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin');
const ESLintPlugin = require('eslint-webpack-plugin');
const ImageMinimizerPlugin = require('image-minimizer-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const path = require('path');
const TerserPlugin = require('terser-webpack-plugin');
const webpack = require('webpack');
const nodeExternals = require("webpack-node-externals");

const isDev = process.env.NODE_ENV === 'development';

const paths = {
  js: path.resolve(__dirname, 'src/js'),
  css: path.resolve(__dirname, 'dist/css'),
  img: path.resolve(__dirname, 'dist/img'),
  imgsrc: path.resolve(__dirname, 'src/img'),
  sass: path.resolve(__dirname, 'src/scss'),
  node: path.resolve(__dirname, 'node_modules'),
};

module.exports = {
  mode: isDev ? "development" : "production",
  entry: {
    "bootstrap-asu": path.resolve(paths.js, "index.js"),
    "googleAnalytics": path.resolve(paths.js, "googleAnalytics.js"),
  },
  externalsPresets: { node: true },
  externals: [nodeExternals(), "commonjs sharp"],
  output: {
    path: path.resolve(__dirname, "dist/js"),
    filename: "[name].js",
    libraryTarget: "umd",
  },
  devtool: "source-map",
  resolve: {
    extensions: [".js"],
  },
  optimization: {
    minimize: !isDev,
    minimizer: [
      new CssMinimizerPlugin(),
      new TerserPlugin({
        parallel: true,
        extractComments: true,
        terserOptions: {
          compress: {
            drop_console: true, // removes console statements
            drop_debugger: true, // removes debugger statements
          },
        },
      }),
    ],
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        use: ["babel-loader"],
      },
      {
        test: /\.(sa|sc|c)ss$/,
        use: [
          MiniCssExtractPlugin.loader,
          "css-loader",
          "postcss-loader",
          "sass-loader",
        ],
      },
      // {
      //   test: /\.(png|jpe?g|gif)$/i,
      //   include: paths.imgsrc,
      //   type: 'asset/resource',
      //   generator: {
      //     filename: 'img/[name][ext]',
      //   },
      //   use: [
      //     new ImageMinimizerPlugin({})
      //   ],
      // },
    ],
  },
  plugins: [
    new webpack.LoaderOptionsPlugin({
      options: {
        postcss: [autoprefixer()],
      },
    }),
    new MiniCssExtractPlugin({
      filename: "../css/[name].min.css",
    }),
    new CopyWebpackPlugin({
      patterns: [
        { from: paths.imgsrc, to: paths.img },
        {
          from: `${paths.node}/bootstrap/dist/js`,
          to: path.resolve(__dirname, "dist/js"),
        },
      ],
    }),
    new ESLintPlugin({
      context: path.resolve(__dirname, "src"),
      extensions: ["js"],
      files: "**/*.@(js)",
    }),
  ],
};
