import React from 'react';
import { useContext } from 'react';
import { AuthContext } from '../Contexts/AuthContext/AuthProvider';
import { Navigate, useLocation } from 'react-router-dom';
import UseAdmin from '../hooks/UseAdmin';

const AdminRoutes = ({children}) => {
    const {user}=useContext(AuthContext)
    const [admin]=UseAdmin(user?.email)
  const location = useLocation()
   

  if(user || admin){
    return children
  }
  return <Navigate to="/login" state={{ from: location }} replace />;
    
};
export default AdminRoutes;