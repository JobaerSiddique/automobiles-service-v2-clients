import React from 'react';

import GarageOrder from '../../GarageSection/GarageOrder';



const GarageHomeInfo = ({garage}) => {
   const {providername,services,experts,location}=garage


   
    return (
      <>
        <div>
    <h1 className='text-center text-white mt-10 text-2xl font-semibold text-transparent lg:text-5xl bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600'>       
    Hi,{providername}
 
</h1>

<div className='flex justify-center my-10'>
<div className="stats shadow">
  
  <div className="stat place-items-center">
    <div className="stat-title">Our Services Provides</div>
   
    <div className="stat-value">{services.length}</div>
    
  </div>
  <div className="stat place-items-center">
    <div className="stat-title">Location</div>
    <div className="stat-value">{location}</div>
    
  </div>
  
  <div className="stat place-items-center">
    <div className="stat-title">Our Total Experts </div>
    <div className="stat-value text-secondary">{experts.length}</div>
    
  </div>
  
  
  
</div>
</div>

        </div>
        <div>
        {providername && <GarageOrder
        providerName={providername}
        ></GarageOrder>}
        </div>
      </>
    );
};

export default GarageHomeInfo;