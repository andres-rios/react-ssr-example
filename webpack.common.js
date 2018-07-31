
const path = require('path');
const webpack = require('webpack');

function generate() {
const common = {
  context: __dirname,
  devtool: 'source-map',
  mode: 'development',
  entry: ['./src/index.js'],
  output: {
    path: path.join(path.resolve(__dirname), 'dist')
  },
  plugins: [
    new webpack.NamedModulesPlugin()
  ],
  module: {
    rules: [
    {
      test: /.js$/,
      loader: 'babel-loader',
      include: [path.join(path.resolve(__dirname), 'src'), 'index'],
      exclude: /node_modules/,
      query: {
        presets: ['react']
      }
    },
    {
      test:/\.(png|jpg|gif|svg|eot|ttf|woff|woff2)$/,
      loader: 'file-loader',
      options: {
        outputPath: 'images/'
      }
    }
    ]
  }
};

return Object.freeze(common);
}

module.exports = {
  generate: generate
};
