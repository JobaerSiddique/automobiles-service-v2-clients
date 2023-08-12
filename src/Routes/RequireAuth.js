import React from 'react';
import { useContext } from 'react';
import { AuthContext } from '../Contexts/AuthContext/AuthProvider';
import { Navigate, useLocation } from 'react-router-dom';


const RequireAuth = ({children}) => {
  const {user}=useContext(AuthContext)
  const location = useLocation()

   

  if(user){
    return children
  }
  return <Navigate to="/login" state={{ from: location }} replace />;
  
};

export default RequireAuth;