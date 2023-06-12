import { useQuery } from '@tanstack/react-query';
import React, { useEffect, useRef } from 'react';
import Loading from '../Shared/Loading'
import { useState } from 'react';


const EmergencyService = () => {
    
    const [location,setLocation]=useState('')
    
    const [garage,setGarage]=useState([])
    const searchRef1= useRef()
    
  
useEffect(()=>{
  fetch(`http://localhost:5000/garages?location=${location}`)
  .then(res=>res.json())
  .then(data=>{
    setGarage(data)
  })
},[location])
   
  
   

    const handleSearch=()=>{
     setLocation(searchRef1.current.value);
    
    }
    
    return (
      <div>
        <div>
          <h1 className='text-xl text-center font-bold lg:text-5xl text-red-500'>Emergency Service Section</h1>
        </div>
        <div className='flex justify-center items-center mt-8'>
        <div className="form-control w-full max-w-xs">
 
  <input ref={searchRef1}  type="text" placeholder="Please Enter Your Location" className="input input-bordered w-full" />
 
 
</div>
    
<button onClick={handleSearch} className='btn btn-info ml-4'>Search</button>
        </div>
        {location && <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-20 justify-items-center mt-10'>
          {garage.map(gar=>
            <div className="card w-96 bg-base-100 shadow-xl">
            <figure><img src={gar.img}  /></figure>
            <div className="card-body">
              <h2 className="card-title">{gar.providername}</h2>
              
             
              <div className="card-actions justify-center">
                <button className="btn btn-primary">Book Now</button>
              </div>
            </div>
          </div>
          )}
        </div>}

       
      </div>

        
     
    );
};

export default EmergencyService;