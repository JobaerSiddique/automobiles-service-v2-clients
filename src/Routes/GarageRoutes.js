import React from 'react';
import { useContext } from 'react';
import { AuthContext } from '../Contexts/AuthContext/AuthProvider';
import { Navigate, useLocation } from 'react-router-dom';
import useGarage from '../hooks/UseGarage';

const GarageRoutes = ({children}) => {
    const {user}=useContext(AuthContext)
    const [garage]=useGarage(user?.email)
  const location = useLocation()
   

  if(user ||garage ){
    return children
  }
  return <Navigate to="/login" state={{ from: location }} replace />;
    
};
export default GarageRoutes;