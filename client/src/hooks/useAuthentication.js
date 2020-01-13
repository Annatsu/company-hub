// React
import { useState, useCallback } from 'react';

const useAuthentication = () => {
  const [authenticated, setAuthentication] = useState(false);

  const setAuthenticated = useCallback(() => {
    setAuthentication(true);
  }, []);

  const setUnauthenticated = useCallback(() => {
    setAuthentication(false);
  }, []);

  return {
    authenticated,
    setAuthenticated,
    setUnauthenticated,
  };
};

export default useAuthentication;
