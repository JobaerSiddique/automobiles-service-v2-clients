import React from 'react';

const GarageInfoBanner = ({pay,totalGarage,services,users}) => {
   const {TotalPrice}=pay

   const price = TotalPrice;
   let tax=0.1
   const totalprice=price*tax;
   const result=totalprice
   console.log(services);
    return (
        <div className='w-10/12 mx-auto my-10'>
        
            <div className="stats shadow flex justify-center items-center">
  
  <div className="stat place-items-center">
    <div className="stat-title">Total Payment</div>
    <div className="stat-value">{TotalPrice}Tk</div>
    
  </div>
  
  <div className="stat place-items-center">
    <div className="stat-title">Users</div>
    <div className="stat-value text-secondary">{users}</div>
    
  </div>
  
  <div className="stat place-items-center">
    <div className="stat-title">Services</div>
    <div className="stat-value">{services}</div>
   
  </div>
  <div className="stat place-items-center">
    <div className="stat-title">Garages</div>
    <div className="stat-value">{totalGarage}</div>
   
  </div>
  <div className="stat place-items-center">
    <div className="stat-title">Admin Profit</div>
    <div className="stat-value">{result}Tk</div>
   
  </div>
  
</div>
        </div>
    );
};

export default GarageInfoBanner;