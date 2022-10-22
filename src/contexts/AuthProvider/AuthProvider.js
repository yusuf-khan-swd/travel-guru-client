import React, { createContext, useEffect, useState } from 'react';
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, sendEmailVerification, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from 'firebase/auth';
import app from '../../firebase/firebase.config';

const auth = getAuth(app);
export const AuthContext = createContext(null);

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  const providerLogIn = provider => {
    return signInWithPopup(auth, provider);
  };

  const createUser = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };

  const setUserData = profile => {
    return updateProfile(auth.currentUser, profile);
  };

  const emailVerification = () => {
    return sendEmailVerification(auth.currentUser);
  };

  const logIn = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password)
  };

  const logOut = () => {
    return signOut(auth);
  };

  useEffect(() => {
    const unSubscribe = onAuthStateChanged(auth, currentUser => {
      setUser(currentUser);
    })

    return () => unSubscribe();
  }, []);

  const authInfo = { user, providerLogIn, createUser, setUserData, emailVerification, logIn, logOut, setUser };

  return (
    <AuthContext.Provider value={authInfo}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;