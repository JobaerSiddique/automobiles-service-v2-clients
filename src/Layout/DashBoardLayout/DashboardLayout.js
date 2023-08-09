import React from 'react';
import Navbar from '../../Navbar/Navbar';
import { Link, Outlet } from 'react-router-dom';
import { useContext } from 'react';
import { AuthContext } from '../../Contexts/AuthContext/AuthProvider';
import UseAdmin from '../../hooks/UseAdmin';
import Loading from '../../Shared/Loading';
import Footer from '../../Shared/Footer';
import useGarage from '../../hooks/UseGarage';

const DashboardLayout = () => {
  const {user}= useContext(AuthContext) 
  const [admin,adminLoading]=UseAdmin(user?.email)
  const [garage,garageLoading]=useGarage(user?.email)
console.log();
  if(adminLoading ||garageLoading  ){
    return <Loading/>
  }
  return (
        <div>
            <Navbar/>
            <div className="drawer drawer-mobile">
  <input id="dashboard-modal" type="checkbox" className="drawer-toggle" />
  <div className="drawer-content flex flex-col ml-8  ">
   
   <Outlet/>
   <Footer />
  </div> 
  <div className="drawer-side ">
    <label htmlFor="dashboard-modal" className="drawer-overlay"></label> 
    <ul className="menu p-4 w-60  text-base-content bg-slate-900 text-white">
     
        {!admin && !garage && <>
          <li className='hover:bg-white hover:text-black hover:rounded-full '><Link to='/dashboard'>My Bookings</Link></li>
          <li className='hover:bg-white hover:text-black hover:rounded-full '><Link to='/dashboard/review'>Review</Link></li>
          <li className='hover:bg-white hover:text-black hover:rounded-full '><Link to='/dashboard/payment/paymenthistory'>Payment History</Link></li>
        </>}
     {admin && <>
      <li className='hover:bg-white hover:text-black hover:rounded-full '><Link to='/dashboard/user'>All Users</Link></li>
      <li className='hover:bg-white hover:text-black hover:rounded-full '><Link to='/dashboard/admin/allGarage'>All Garages</Link></li>
      <li className='hover:bg-white hover:text-black hover:rounded-full '><Link to='/dashboard/admin/manageOrders'>Manage All Bookings</Link></li>
      <li className='hover:bg-white hover:text-black hover:rounded-full '><Link to='/dashboard/admin/add-garage'>Add Garage</Link></li>
     
     </>}
     {garage && !admin && <>
      <li className='hover:bg-white hover:text-black hover:rounded-full '><Link to='/dashboard/garage/garagehome'>GarageHome</Link></li>
     
     </>}
    
    </ul>
  
  </div>
  
</div>

        </div>
        
    );
};

export default DashboardLayout;