import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../Contexts/AuthContext/AuthProvider';
import UseAdmin from '../hooks/UseAdmin';
import Loading from '../Shared/Loading';
import useGarage from '../hooks/UseGarage';

const Navbar = () => {
  const {user,logOut}=useContext(AuthContext) 
  const [admin,adminLoading]=UseAdmin(user?.email)
  const [garage,garageLoading]=useGarage(user?.email)


  if(adminLoading && garageLoading){
    return <Loading/>
  }
  const menuItems =
    <>
       <li ><Link to='/'>Home</Link></li>
      {!admin  && !garage &&   <>
        <li><Link to='/garagesList'>GarageList</Link></li>
        <li><Link to='/emergencyService'><span className='animate-pulse text-red-500 font-bold'>Emergeny Service</span></Link></li>
      </>}
       {user && !admin && !garage && <>
       
       
        <li><Link to='/dashboard'>Dashboard</Link></li>
       </>}
       {
        admin &&    <>
           <li><Link to='/dashboard'>Dashboard</Link></li>
        </>
       }
       {
        garage && !admin &&  <>
           <li><Link to='/dashboard'>Dashboard</Link></li>
        </>
       }
      
       
       
       {user?.uid? <li><button onClick={logOut}>Logout <span>{user.displayName}</span></button></li> : <li><Link to='/login'>Login</Link></li>}
       
       {user?.uid && <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
        <div className="w-10 rounded-full">
          <img src={user?.photoURL}/>
        </div>
      </label>
      }
    </>
  
  return (
        <div className="navbar sticky z-10  bg-black bg-opacity-30 font-bold text-white  ">
  <div className="navbar-start ">
    <div className="dropdown relative">
      <label tabIndex={0} className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </label>
     
      <ul tabIndex={0} className="menu bg-gradient-to-r from-gray-700 via-gray-900 to-black text-white  menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
        {menuItems}
      </ul>
    </div>
    <a className=" normal-case lg:text-xl font-bold"><Link to='/'>Taqwaa Automobiles Service Provider</Link></a>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1 ">
      {menuItems}
    </ul>
  </div>
  <label htmlFor="dashboard-modal" tabIndex={2} className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </label>
  
</div>

    );
};

export default Navbar;