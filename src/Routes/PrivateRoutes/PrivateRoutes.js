import React, { useContext } from 'react';
import { Navigate } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthProvider/AuthProvider';

const PrivateRoutes = ({ children }) => {
  const { user } = useContext(AuthContext);

  if (!user?.uid) {
    return <Navigate to='/login'></Navigate>
  }

  return children;
};

export default PrivateRoutes;