import React from 'react';
import { BrowserRouter as Router, Switch, Redirect } from 'react-router-dom';
import Route from './route';
import Home from 'pages/Home';

const Routes = () => {
  return (
    <Router>
      <Switch>
        <Redirect exact from="/" to="/home" />
        <Route path="/home" layout="primary" component={() => <Home />} />
      </Switch>
    </Router>
  );
};

export default Routes;
