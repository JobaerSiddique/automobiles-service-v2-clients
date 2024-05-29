
import React, { useContext, useEffect, useRef } from 'react';
import Loading from '../Shared/Loading'
import { useState } from 'react';
import { AuthContext } from '../Contexts/AuthContext/AuthProvider';
import { Link } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';
import EmergencyModal from '../EmergencyModal/EmergencyModal';


const EmergencyService = () => {
    
    const [location,setLocation]=useState('')
    const[service,setService]=useState('')
    const [modal,setModal]=useState(null)
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
  queryKey:['garage',location],
  queryFn:async()=>{
    const res = await  fetch(`https://taqwaa-services-v2-servers.vercel.app/garages?location=${location}`)
    const data = await res.json()
    console.log('garage',data);
    return data
  }
})
   
  const {data:services=[]}=useQuery({
    queryKey:['service'],
    queryFn:async()=>{
      const res = await fetch('http://localhost:5000/bookings',{
        headers:{
          authorizaion:`bearer ${localStorage.getItem('accessToken')}`
       }
      })
      const serviceData = await res.json()
      console.log("service Slot",serviceData);
      return serviceData
      
    }
    
  })
   

    const handleSearch=()=>{
      if(isLoading){
        return <Loading></Loading>
      }
     setLocation(searchRef1.current.value);
   refetch()
    console.log(searchRef1.current.value)
    
    }
   
    return (
      <>
      <div className='mt-10'>
        <div>
          <h1 className='animate-pulse text-xl text-center font-bold lg:text-5xl text-red-500'>Emergency Service Section</h1>
        </div>
        <h1 className='text-center mt-5 text-xl text-white'>Please Enter Your Location</h1>
        <div className='flex justify-center items-center mt-8'>
        
        <select ref={searchRef1} className="select select-bordered w-full max-w-xs">
          {garage.map(gar=><option>{gar.location}</option>
          
          )}
 
</select>
        
    
<button onClick={handleSearch} className='btn btn-info ml-4'>Search</button>
        </div>
        
        {location &&   <div className='grid  grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-20 justify-items-center mt-10 p-10'>
          {garage.map(gar=>
            <div className="card w-96 bg-base-100 shadow-xl  ">
            <figure><img src={gar.img}  /></figure>
            <div className="card-body ">
              <h2 className=" text-center text-xl">{gar.providername}</h2>
              <h2 className=" font-semibold text-center">{gar.phone}</h2>
              
             
              <div className="card-actions justify-center">
                <Link to={`/garage/${gar._id}`} className='btn btn-outline btn-info'>Book Now</Link>
              </div>
              {/* <div className="card-actions justify-center">
              <label 
              htmlFor="my-modal-3"
              
              className="btn">
                open modal</label>
              </div> */}
              <EmergencyModal service={services} gar={gar}></EmergencyModal>
            </div>
          </div>
          )}
        </div>}
          <p>  {services.length}</p>
    
        
      
      </div>
     
      </>

        
     
    );
};

export default EmergencyService;