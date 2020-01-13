// React
import React from 'react';

// Components
import { Switch, Route } from 'react-router-dom';
import PrivateRoute from '../components/PrivateRoute';

// Routes
import Home from './Home';
import SignIn from './SignIn';
import SignUp from './SignUp';
import Collaborator from './Collaborator';
import NotFound from './404';

const ApplicationRoutes = () => (
  <Switch>
    <Route exact path='/' component={Home} />
    <Route path='/signin' component={SignIn} />
    <Route path='/signup' component={SignUp} />
    <PrivateRoute path='/collaborator/:collaboratorId' component={Collaborator} />
    <Route component={NotFound} />
  </Switch>
);

export default ApplicationRoutes;
