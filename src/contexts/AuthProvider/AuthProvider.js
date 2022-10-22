import React, { createContext } from 'react';
import { getAuth, signInWithPopup } from 'firebase/auth';
import app from '../../firebase/firebase.config';

const auth = getAuth(app);
const AuthContext = createContext(null);

const AuthProvider = ({ children }) => {
  const user = { displayName: 'Yusuf' };

  const providerLogIn = provider => {
    return signInWithPopup(auth, provider);
  };

  const authInfo = { user, providerLogIn };

  return (
    <AuthContext.Provider value={authInfo}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;