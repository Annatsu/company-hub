// React
import React from 'react';

// Components
import { BrowserRouter } from 'react-router-dom';
import ApplicationFrame from './components/ApplicationFrame';
import ApplicationRoutes from './routes';

// Contexts
import AuthenticationContext from './contexts/Authentication';

const App = () => {
  return (
    <AuthenticationContext.Provider>
      <ApplicationFrame>
        <BrowserRouter>
          <ApplicationRoutes />
        </BrowserRouter>
      </ApplicationFrame>
    </AuthenticationContext.Provider>
  );
};

export default App;
