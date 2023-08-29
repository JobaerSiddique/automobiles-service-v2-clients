import React from 'react';
import Navbar from '../../Navbar/Navbar';
import { Link, Outlet } from 'react-router-dom';
import { useContext } from 'react';
import { AuthContext } from '../../Contexts/AuthContext/AuthProvider';
import UseAdmin from '../../hooks/UseAdmin';
import Loading from '../../Shared/Loading';
import Footer from '../../Shared/Footer';
import useGarage from '../../hooks/UseGarage';
import { AiFillFileAdd } from 'react-icons/ai';
import {GiMechanicGarage } from 'react-icons/gi';
import {FiUsers } from 'react-icons/fi';
import {MdPayment } from 'react-icons/md';
import {MdRateReview } from 'react-icons/md';
import {FaHistory } from 'react-icons/fa';
import {TbBrandBooking} from 'react-icons/tb';
import {FcManager} from 'react-icons/fc';



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
  <div className="drawer-content flex flex-col ml-8   ">
   
   <Outlet/>
   <Footer />
  </div> 
  <div className="drawer-side">
    <label htmlFor="dashboard-modal" className="drawer-overlay"></label> 
    <ul className="menu p-4 w-60  text-base-content bg-slate-900 text-white">
     
        {!admin && !garage && <>
          <li className='hover:bg-white hover:text-black hover:rounded-full '><Link to='/dashboard'><span className='font-bold text-2xl'><TbBrandBooking/></span>My Bookings</Link></li>
          <li className='hover:bg-white hover:text-black hover:rounded-full '><Link to='/dashboard/review'><span className='font-bold text-2xl'><MdRateReview/></span> Review</Link></li>
          <li className='hover:bg-white hover:text-black hover:rounded-full '><Link to='/dashboard/payment/paymenthistory'><span className='font-bold text-2xl'><FaHistory/></span> Payment History</Link></li>
        </>}
     {admin && <>
      <li className='hover:bg-white hover:text-black hover:rounded-full '><Link to='/dashboard/user'> <span className='font-bold text-2xl'><FiUsers/></span> All Users</Link></li>
      <li className='hover:bg-white hover:text-black hover:rounded-full '><Link to='/dashboard/admin/allGarage'><span className='font-bold text-2xl'><GiMechanicGarage/></span>All Garages</Link></li>
      <li className='hover:bg-white hover:text-black hover:rounded-full '><Link to='/dashboard/admin/manageOrders'><span className='font-bold text-2xl'><FcManager/></span> Manage All Bookings</Link></li>
      <li className='hover:bg-white hover:text-black hover:rounded-full '><Link to='/dashboard/admin/add-garage'> <span className='font-bold text-2xl'><AiFillFileAdd/></span>Add Garage</Link></li>
      <li className='hover:bg-white hover:text-black hover:rounded-full '><Link to='/dashboard/admin/allpayment'> <span className='font-bold text-2xl'><MdPayment/></span>All Payment</Link></li>
      {/* <li className='hover:bg-white hover:text-black hover:rounded-full '><Link to='/dashboard/admin/garagePayment'> <span className='font-bold text-2xl'><MdPayment/></span>Garage Payment</Link></li> */}
     
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