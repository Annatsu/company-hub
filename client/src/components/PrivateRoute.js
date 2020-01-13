// React
import React, { useContext } from 'react';
import PropTypes from 'prop-types';

// Components
import { Route, Redirect } from 'react-router-dom';

// Contexts
import AuthenticationContext from '../contexts/Authentication';

const PrivateRoute = ({ component: Component, redirectToUrl = '/signin', ...rest }) => {
  const { authenticated } = useContext(AuthenticationContext);

  return (
    <Route
      {...rest}
      render={({ location }) =>
        authenticated ? <Component /> : <Redirect to={{ pathname: redirectToUrl, state: { from: location } }} />
      }
    />
  );
};

PrivateRoute.propTypes = {
  component: PropTypes.func,
  redirectToUrl: PropTypes.string,
};

export default PrivateRoute;
