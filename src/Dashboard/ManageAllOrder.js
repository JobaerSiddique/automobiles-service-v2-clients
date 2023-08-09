
import { useQuery } from '@tanstack/react-query';
import React, { useEffect }  from 'react';
import Loading from '../Shared/Loading';


const ManageAllOrder = () => {
   
   const{data:services=[],refetch,isLoading}=useQuery({
    queryKey:['services'],
    queryFn: async()=>{
        const res = await fetch('http://localhost:5000/allOrders',{
            headers:{
                authorizaion:`bearer ${localStorage.getItem('accessToken')}`
             }
        })
        const data= await res.json()
        return data
    }
   })
   useEffect(()=>{
    refetch()
   },[refetch])

    if(isLoading){
        return <Loading/>
    }
    return (
        <div>
            <h1 className='text-center mt-10 font-bold lg:text-5xl text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-600'>Manage All Services : {services.length}</h1>


            <div className='my-20'>
            <div className="overflow-x-auto flex justify-center">
  <table className="table w-5/6 ">
    {/* head */}
    <thead >
      <tr>
        <th></th>
        <th className='text-center'>Customer Email</th>
        <th className='text-center'>Provider Name</th>
        <th className='text-center'>ServiceName</th>
        <th className='text-center'>Price</th>
        <th className='text-center' >Date</th>
        <th className='text-center'>Registration No</th>
        <th className='text-center'>Phone</th>
      </tr>
    </thead>
    <tbody>
      
      {services.map((ser,index)=><tr key={ser._id} className="hover">
        <th className='text-center'>{index+1}</th>
        <td className='text-center'>{ser.CustomerEmail}</td>
        <td className='text-center font-bold text-green-500'>{ser.providerName}</td>
        <td className='text-center'>{ser.serviceName}</td>
        <td className='text-center'>{ser.price}</td>
        <td className='text-center'>{ser.date}</td>
        <td className='text-center'>{ser.RegistrationNo}</td>
        <td className='text-center'>{ser.Phone}</td>
      </tr>)}
      
     
      
    </tbody>
  </table>
</div>
            </div>
        </div>
    );
};

export default ManageAllOrder;