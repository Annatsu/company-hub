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

  const toggleAuthenticated = useCallback(() => {
    setAuthentication(!authenticated);
  });

  return {
    authenticated,
    setAuthenticated,
    setUnauthenticated,
    toggleAuthenticated,
  };
};

export default useAuthentication;
