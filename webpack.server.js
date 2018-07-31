
const nodeExternals = require('webpack-node-externals');
const { generate } = require('./webpack.common');
const server = generate();

server.entry = './src/server/index.js';
server.output.filename = 'bundle.js';
server.output.libraryTarget = 'commonjs2';
server.target = 'node';
server.externals = [nodeExternals()];

module.exports = server;
