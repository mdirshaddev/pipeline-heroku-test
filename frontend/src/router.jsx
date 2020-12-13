import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Home from './components/home';
import Error from './components/error';


export default class BaseRouter extends Component {

  render () {

    return (
      <Router>
        <Route exact path="/" component={Home} />
        <Route exact path="/error" component={Error} />
      </Router>
    );

  }

}