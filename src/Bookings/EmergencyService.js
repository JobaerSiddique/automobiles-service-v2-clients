
import React, { useContext, useEffect, useRef } from 'react';
import Loading from '../Shared/Loading'
import { useState } from 'react';
import { AuthContext } from '../Contexts/AuthContext/AuthProvider';
import { Link } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';


const EmergencyService = () => {
    
    const [location,setLocation]=useState('')
    const[service,setService]=useState('')
    const {loading}=useContext(AuthContext)
    // const [garage,setGarage]=useState([])
    const searchRef1= useRef()
    const searchRef2= useRef()
    
  
// useEffect(()=>{
//   fetch(`http://localhost:5000/garages?location=${location}&service=${service}`)
//   .then(res=>res.json())
//   .then(data=>{
//     setGarage(data)
//   })
// },[location,service])

const {data:garage=[],isLoading,refetch}=useQuery({
  queryKey:['garage',location,service],
  queryFn:async()=>{
    const res = await  fetch(`http://localhost:5000/garages?location=${location}&service=${service}`)
    const data = await res.json()
    return data
  }
})
   
  
   

    const handleSearch=()=>{
      if(isLoading){
        return <Loading></Loading>
      }
     setLocation(searchRef1.current.value);
     setService(searchRef2.current.value)
    console.log(searchRef1.current.value,searchRef2.current.value)
    refetch()
    }
   
    return (
      <div className='mt-10'>
        <div>
          <h1 className='text-xl text-center font-bold lg:text-5xl text-red-500'>Emergency Service Section</h1>
        </div>
        <div className='flex justify-center items-center mt-8'>
        <select ref={searchRef1} className="select select-bordered w-full max-w-xs">
          {garage.map(gar=><option>{gar.location}</option>
          
          )}
 
</select>
        <select ref={searchRef2} className="select select-bordered w-full ml-2 max-w-xs">
          {garage.map(gar=>{
            return gar.services.map(g=><option>{g.name}</option>)
          }
          
          )}
 
</select>
    
<button onClick={handleSearch} className='btn btn-info ml-4'>Search</button>
        </div>
        
        {location && service?  <div className='grid  grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-20 justify-items-center mt-10 p-10'>
          {garage.map(gar=>
            <div className="card w-96 bg-base-100 shadow-xl  ">
            <figure><img src={gar.img}  /></figure>
            <div className="card-body">
              <h2 className="card-title">{gar.providername}</h2>
              
             
              <div className="card-actions justify-center">
                <Link to={`/garage/${gar._id}`} className='btn btn-outline btn-info'>Book Now</Link>
              </div>
            </div>
          </div>
          )}
        </div>:<p>No Result Found</p>}

       
      </div>

        
     
    );
};

export default EmergencyService;