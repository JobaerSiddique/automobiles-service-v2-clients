import React, { useContext, useState } from 'react';
import { AuthContext } from '../Contexts/AuthContext/AuthProvider';

const EmergencyModal = ({gar,service}) => {
   const {providername}=gar
   const {user}=useContext(AuthContext)
   const date = new Date().toDateString()
   const name=[

   ]
    return (
        <div>
            <input type="checkbox" id="my-modal-3" className="modal-toggle" />
<div className="modal">
  <div className="modal-box relative">
    <label htmlFor="my-modal-3" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
    <h3 className="text-lg font-bold">{providername}</h3>
   <form action="">
   <div className="form-control w-full ">
  <label className="label">
    <span className="label-text">Customer Name</span>
  </label>
  <input type="text" 
  placeholder="Type here" 
  value={user.displayName}
  disabled
  className="input input-bordered w-full " />
  
</div>
   <div className="form-control w-full ">
  <label className="label">
    <span className="label-text">Customer Email</span>
  </label>
  <input type="text" 
  placeholder="Type here" 
  value={user.email}
  disabled
  className="input input-bordered w-full " />
  
</div>
   <div className="form-control w-full ">
  <label className="label">
    <span className="label-text">Date</span>
  </label>
  <input type="text" 
  placeholder="Type here" 
  value={date}
  disabled
  className="input input-bordered w-full " />
  
</div>

   </form>


  </div>
</div>
        </div>
    );
};

export default EmergencyModal;