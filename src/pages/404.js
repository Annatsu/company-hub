// React
import React from 'react';
import { useIntl } from 'react-intl';

// Custom Hooks
import useTitle from '../hooks/useTitle';

// Components
import ApplicationFrame from '../components/ApplicationFrame';

const PageNotFound = () => {
  const { formatMessage } = useIntl();
  useTitle(formatMessage({ id: 'routes.pageNotFound.title' }));

  return (
    <ApplicationFrame>
      <h1 className='title'>{formatMessage({ id: 'routes.pageNotFound.title' })}</h1>
      <h2 className='subtitle'>{formatMessage({ id: 'routes.pageNotFound.subtitle' })}</h2>
    </ApplicationFrame>
  );
};

export default PageNotFound;
