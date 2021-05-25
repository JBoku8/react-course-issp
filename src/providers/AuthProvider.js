import React, { useEffect, useState } from 'react';
import { getValue, valueExists } from '../utils';
import { AUTH_TOKEN } from '../utils/constants';

export const authContext = React.createContext(null);

function AuthProviderComponent({ children }) {
  const [user, setUser] = useState(null);

  useEffect(() => {
    if (valueExists(AUTH_TOKEN)) {
      setUser(getValue(AUTH_TOKEN));
    }
  }, []);

  const signIn = (data) => {
    setUser(data);
  };
  const signOut = () => {
    setUser(null);
  };

  return (
    <authContext.Provider
      value={{
        user,
        signIn,
        signOut,
      }}>
      {children}
    </authContext.Provider>
  );
}

export default AuthProviderComponent;
