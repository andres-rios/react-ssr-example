
import React, { Component } from 'react';
import { renderToStaticMarkup } from 'react-dom/server';
import { hydrate } from 'react-dom';
import App from './App';

if (global.document) {
  hydrate(<App />, document.querySelector('#root'));
}

export default function(location) {
  const context = {};
  return renderToStaticMarkup(<App location={location} context={context} />);
}
