import React from 'react';
import Navbar from '../../Navbar/Navbar';
import { Link, Outlet } from 'react-router-dom';
import { useContext } from 'react';
import { AuthContext } from '../../Contexts/AuthContext/AuthProvider';
import UseAdmin from '../../hooks/UseAdmin';
import Loading from '../../Shared/Loading';

const DashboardLayout = () => {
  const {user}= useContext(AuthContext) 
  const [admin,adminLoading]=UseAdmin(user?.email)

  if(adminLoading){
    return <Loading/>
  }
  return (
        <div>
            <Navbar/>
            {/* <div className="drawer drawer-mobile">
  <input id="dashboard-modal" type="checkbox" className="drawer-toggle" />
  <div className="drawer-content flex flex-col  ">
   
   
  
  </div> 
  <div className="drawer-side ">
    <label htmlFor="dashboard-modal" className="drawer-overlay"></label> 
    <ul className="menu p-4 w-60 bg-base-100 text-base-content">
     
        {!admin && <li><Link to='/dashboard'>My Appoinment</Link></li>}
     {admin && <>
      <li><Link to='/dashboard/user'>All Users</Link></li>
      <li><Link to='/dashboard/admin/allGarage'>All Garages</Link></li>
      <li><Link to='/dashboard/admin/manageOrders'>Manage All Bookings</Link></li>
     
     </>}
    
    </ul>
  
  </div>
</div> */}
<div className="drawer lg:drawer-open">
  <input id="dashboard-modal" type="checkbox" className="drawer-toggle" />
  <div className="drawer-content flex flex-col ml-3">
    {/* Page content here */}
    <Outlet/>
  
  </div> 
  <div className="drawer-side">
    <label htmlFor="dashboard-modal" className="drawer-overlay"></label> 
    <ul className="menu p-4 w-60 h-full bg-base-100 text-base-content">
    {!admin && 
    <>
    <li><Link to='/dashboard'>My Bookings</Link></li>
    <li><Link to='/dashboard/review'>Reviews</Link></li>
    </>
    
    }
     {admin && <>
      <li><Link to='/dashboard/user'>All Users</Link></li>
      <li><Link to='/dashboard/admin/allGarage'>All Garages</Link></li>
      <li><Link to='/dashboard/admin/manageOrders'>Manage All Bookings</Link></li>
     
     </>}
    </ul>
  
  </div>
</div>
        </div>
    );
};

export default DashboardLayout;