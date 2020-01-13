// React
import React, { useContext } from 'react';

// Contexts
import AuthenticationContext from '../contexts/Authentication';

// Pages
import LandingPage from '../pages/LandingPage';
import CollaboratorsPage from '../pages/Collaborators';

const Home = () => {
  const { authenticated } = useContext(AuthenticationContext);

  if (authenticated) {
    return <CollaboratorsPage />;
  } else {
    return <LandingPage />;
  }
};

export default Home;
