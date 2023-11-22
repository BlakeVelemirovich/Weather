const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'main.js'
  },
  module: {
    rules: [
        {
            test: /\.(sass|scss)$/,
            use: [MiniCssExtractPlugin.loader,'css-loader', 'sass-loader']
        },
        {
          test: /\.(png|jpg|gif|svg)$/,
          use: [
            {
              loader: 'url-loader',
              options: {
                limit: 243, 
                name: '[name].[ext]',
                outputPath: 'images/',
              },
            },
          ],
        }
    ]
},
plugins: [new MiniCssExtractPlugin()]
};