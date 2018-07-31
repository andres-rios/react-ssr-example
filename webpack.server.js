
const { generate } = require('./webpack.common');
const server = generate();
server.output.filename = 'bundle.js';
server.output.libraryTarget = 'commonjs2';
server.target = 'node';
module.exports = server;
