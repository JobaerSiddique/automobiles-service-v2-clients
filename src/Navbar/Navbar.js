import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../Contexts/AuthContext/AuthProvider';
import UseAdmin from '../hooks/UseAdmin';
import Loading from '../Shared/Loading';

const Navbar = () => {
  const {user,logOut}=useContext(AuthContext) 
  const [admin,adminLoading]=UseAdmin(user?.email)


  if(adminLoading){
    return <Loading/>
  }
  const menuItems =
    <>
       <li><Link to='/'>Home</Link></li>
      {!admin  &&   <>
        <li><Link to='/garagesList'>GarageList</Link></li>
        <li><Link to='/emergencyService'><span></span>Emergeny Service</Link></li>
      </>}
       {user && !admin && <>
       
       
        <li><Link to='/dashboard'>Dashboard</Link></li>
       </>}
       {
        admin &&  <>
           <li><Link to='/dashboard'>Dashboard</Link></li>
        </>
       }
       
       
       {user?.uid? <li><button onClick={logOut}>Logut <span>{user.displayName}</span></button></li> : <li><Link to='/login'>Login</Link></li>}
       
       {user?.uid && <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
        <div className="w-10 rounded-full">
          <img src={user?.photoURL}/>
        </div>
      </label>
      }
    </>
  
  return (
        <div className="navbar  ">
  <div className="navbar-start ">
    <div className="dropdown relative">
      <label tabIndex={0} className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </label>
     
      <ul tabIndex={0} className="menu bg-cyan-500  menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
        {menuItems}
      </ul>
    </div>
    <a className=" normal-case lg:text-xl">Taqwaa Automobiles Service Provider</a>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
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