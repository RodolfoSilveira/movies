import React from 'react';
import { Switch } from 'react-router-dom';
import Route from './Route';
import Home from '../pages/Home';
import Details from '../pages/Details';

const Routes: React.FC = () => {
  return (
    <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/details/:id" component={Details} />
    </Switch>
  );
};

export default Routes;
