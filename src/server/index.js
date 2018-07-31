
import express from "express";
import React, { Component } from 'react';
import { renderToStaticMarkup } from 'react-dom/server';
import App from '../app/App';

const app = express();

app.use(express.static('dist'));

app.get('*', (req, res) => {
  const context = {};
  const html = renderToStaticMarkup(<App location={req.url} context={context} />);
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
});


app.listen(process.env.PORT || 3000, () => {
  console.log('Running server');
});
