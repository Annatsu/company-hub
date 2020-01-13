// React
import React from 'react';

// Components
import { Switch, Route } from 'react-router-dom';
import PrivateRoute from '../components/PrivateRoute';

// Routes
import Home from './Home';
import Collaborator from './Collaborator';
import NotFound from './404';

const ApplicationRoutes = () => (
  <Switch>
    <Route exact path='/' component={Home} />
    <PrivateRoute path='/collaborator/:collaboratorId' component={Collaborator} />
    <Route component={NotFound} />
  </Switch>
);

export default ApplicationRoutes;
