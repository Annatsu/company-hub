// React
import React from 'react';

// Components
import { BrowserRouter } from 'react-router-dom';
import ApplicationFrame from './components/ApplicationFrame';
import ApplicationRoutes from './routes';

// Hooks
import useAuthentication from './hooks/useAuthentication';

// Contexts
import AuthenticationContext from './contexts/Authentication';

const App = () => {
  const authentication = useAuthentication();

  return (
    <AuthenticationContext.Provider value={authentication}>
      <ApplicationFrame>
        <BrowserRouter>
          <ApplicationRoutes />
        </BrowserRouter>
      </ApplicationFrame>
    </AuthenticationContext.Provider>
  );
};

export default App;
