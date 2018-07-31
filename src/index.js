
import React, { Component } from 'react';
import { renderToStaticMarkup } from 'react-dom/server';
import { hydrate } from 'react-dom';

class App extends Component {
  render() {
    return (
      <div>This is really magic</div>
    );
  }
}

if (global.document) {
  hydrate(<App />, document.querySelector('#root'));
}

export default function() {
  return renderToStaticMarkup(<App />);
}
