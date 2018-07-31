
const HtmlWebpackPlugin = require('html-webpack-plugin')
const { generate } = require('./webpack.common');
const client = generate();
client.output.filename = 'scripts.js';
client.plugins.push(new HtmlWebpackPlugin({
  template: './src/index.html'
}));
module.exports = client;
