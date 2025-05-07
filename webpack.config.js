// webpack.config.js
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');


module.exports = {
  entry: './src/index.js',       // Entry point
  output: {
    filename: 'main.js',         // Output bundle name
    path: path.resolve(__dirname, 'dist'), // Output folder
  },
  mode: 'development',         // or 'production' for optimization
  devServer: {
    static: './dist',
    open: true
  },
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader'], // Handles CSS
      },
      {
        test: /\.html$/i,
        loader: 'html-loader', // Optional, if you want to process images, etc.
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/template.html', // Use your HTML as a template
    }),
  ],
  
};
