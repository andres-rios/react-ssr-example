
import React, { Component } from 'react';
import {
  StaticRouter, BrowserRouter,
  Route,
  Link
} from 'react-router-dom';


const Home = () => (
  <div>
    <h2>Home</h2>
  </div>
);

const About = () => (
  <div>
    <h2>About</h2>
  </div>
);


export default class App extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    if (this.props.location) {
    return (
  <StaticRouter location={this.props.location} context={this.props.context} >
    <div>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/about">About</Link></li>
      </ul>

      <hr/>

      <Route exact path="/" component={Home}/>
      <Route path="/about" component={About}/>
    </div>
  </StaticRouter>
    );
    }

    return (
  <BrowserRouter>
    <div>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/about">About</Link></li>
      </ul>

      <hr/>

      <Route exact path="/" component={Home}/>
      <Route path="/about" component={About}/>
    </div>
  </BrowserRouter>
    );
  }
};
