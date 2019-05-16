const path = require('path');
var webpack = require('webpack');

const devMode = process.env.NODE_ENV !== 'production';
module.exports = {
 mode: devMode ? 'development' : 'production',
 entry: ['./src/js/main.js'],
 output: {
  path: path.resolve(__dirname, 'docs'),
  publicPath: 'assets/',
  filename: 'assets/js/bundle.js'
 },
 resolve: {
  extensions: ['.js']
 },
 module: {
  rules: [
   {
    test: /\.(js)$/,
    exclude: /node_modules/,
    use: ['babel-loader']
   },
   {
    // Adds support to load images in your CSS rules. It looks
    // for .png, .jpg, .jpeg and .gif
    test: /\.(png|jpe?g|gif)$/,
    use: [
     {
      loader: 'file-loader',
      options: {
       name: '[name].[ext]',
       publicPath: '../images',
       emitFile: false
      }
     }
    ]
   }
  ]
 },
 plugins: [
  new webpack.DefinePlugin({
   'process.env.NODE_ENV': process.env.NODE_ENV
  }),
  new webpack.EnvironmentPlugin(['MapboxAccessToken'])
 ]
};
