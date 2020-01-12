// React
import React from 'react';

// Components
import { Switch, Route } from 'react-router-dom';

// Routes
import Home from './Home';
import SignIn from './SignIn';
import SignUp from './SignUp';
import NotFound from './404';

const ApplicationRoutes = () => (
  <Switch>
    <Route exact path='/' component={Home} />
    <Route path='/signin' component={SignIn} />
    <Route path='/signup' component={SignUp} />
    <Route component={NotFound} />
  </Switch>
);

export default ApplicationRoutes;
