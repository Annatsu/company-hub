// React
import React, { useState, useMemo } from 'react';
import PropTypes from 'prop-types';

// Components
import { BrowserRouter } from 'react-router-dom';
import ApplicationFrame from './components/ApplicationFrame';
import ApplicationRoutes from './routes';

// Hooks
import useAuthentication from './hooks/useAuthentication';

// Contexts
import { IntlProvider } from 'react-intl';
import AuthenticationContext from './contexts/Authentication';
import i18nContext from './contexts/i18n';

// I18n Messages
import * as messages from './i18n';

const App = () => {
  return (
    <GlobalProviders>
      <ApplicationFrame>
        <BrowserRouter>
          <ApplicationRoutes />
        </BrowserRouter>
      </ApplicationFrame>
    </GlobalProviders>
  );
};

const GlobalProviders = ({ children }) => {
  const authentication = useAuthentication();
  const [locale, setLocale] = useState('pt');
  const localeContextValue = useMemo(() => ({ locale, setLocale }), [locale]);

  return (
    <AuthenticationContext.Provider value={authentication}>
      <i18nContext.Provider value={localeContextValue}>
        <IntlProvider locale={locale} messages={messages[locale]}>
          {children}
        </IntlProvider>
      </i18nContext.Provider>
    </AuthenticationContext.Provider>
  );
};

GlobalProviders.propTypes = {
  children: PropTypes.node,
};

export default App;
