
const express = require('express');
const app = express();

const webpack = require('webpack');
const clientCfg = require('./webpack.client');
const serverCfg = require('./webpack.server');

const server = webpack(serverCfg);
const client = webpack(clientCfg);
client.watch({aggregateTimeout: 200}, (err, stats) => {
  if (err) {
    console.log(err);
  } else {
    console.log('Client build');
  }
});

server.watch({aggregateTimeout: 200}, (err, stats) => {
  if (err) {
    console.log(err);
  } else {
    console.log('Server build');
  }
});


app.get('/api/names', (req, res, next) => {
  res.json([1, 2, 3, 4, 5]);
});


const ssr = (req, res, next) => {
  const render = require('./dist/bundle.js').default;
  const html = render(req.url);
  res.send(`
<!DOCTYPE html>
<html>
  <head>
    <meta charset="UTF-8">
    <title>Webpack App</title>
  </head>
  <body>
    <div id="root">${html}</div>
    <script type="text/javascript" src="scripts.js"></script>
  </body>
</html>`);
};

app.get('/', ssr);
app.use(express.static('dist'));
app.get('*', ssr);
app.listen(3000);
