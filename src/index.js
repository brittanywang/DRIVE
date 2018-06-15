import React from 'react';
import { render } from 'react-dom';
import App from './App';
import {YelpAPI} from './api';  
import { Router, browserHistory, Route, Link } from 'react-router';

render((
  <Router history={browserHistory}>
    <Route exact path="/" component={App}/>
    <Route exact path="/api" component={YelpAPI}/>
  </Router>
), document.getElementById('root'))