
const HtmlWebpackPlugin = require('html-webpack-plugin')
const { generate } = require('./webpack.common');
const client = generate();

client.entry = './src/browser/index.js';
client.output.filename = 'scripts.js';
client.plugins.push(new HtmlWebpackPlugin({
  template: './src/browser/index.html'
}));
module.exports = client;
