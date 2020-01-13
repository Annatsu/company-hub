// React
import React from 'react';
import { useIntl } from 'react-intl';

// Components
import ApplicationFrame from '../components/ApplicationFrame';

const PageNotFound = () => {
  const { formatMessage } = useIntl();

  return (
    <ApplicationFrame>
      <h1 className='title'>{formatMessage({ id: 'routes.pageNotFound.title' })}</h1>
      <h2 className='subtitle'>{formatMessage({ id: 'routes.pageNotFound.subtitle' })}</h2>
    </ApplicationFrame>
  );
};

export default PageNotFound;
