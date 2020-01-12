// React
import React, { useEffect } from 'react';
import { useHistory } from 'react-router-dom';

// Page
import PageNotFound from '../pages/404';

const PageNotFoundRoute = () => {
  const history = useHistory();
  useEffect(() => {
    const timeoutHandle = window.setTimeout(() => {
      history.push('/');
    }, 10000);

    return () => window.clearTimeout(timeoutHandle);
  });

  return <PageNotFound />;
};

export default PageNotFoundRoute;
