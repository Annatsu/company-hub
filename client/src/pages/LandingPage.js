// React
import React from 'react';

// Custom Hooks
import useTitle from '../hooks/useTitle';

// Components
import Hero from '../components/Hero';

const LandingPage = () => {
  useTitle('');
  return <Hero />;
};

export default LandingPage;
