
import { useQuery } from '@tanstack/react-query';
import React  from 'react';
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
   

    if(isLoading){
        return <Loading/>
    }
    return (
        <div>
            <h1 className='text-center font-bold lg:text-5xl text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-orange-600'>Manage All Services : {services.length}</h1>


            <div className='mt-8'>
            <div className="overflow-x-auto border">
  <table className="table table-sm">
    {/* head */}
    <thead className='bg-green-600 '>
      <tr>
        <th></th>
        <th className='text-center text-white'>Customer Email</th>
        <th className='text-center text-white'>Provider Name</th>
        <th className='text-center text-white'>ServiceName</th>
        <th className='text-center text-white'>Price</th>
        <th className='text-center text-white' >Date</th>
        <th className='text-center text-white'>Registration No</th>
        <th className='text-center text-white'>Phone</th>
      </tr>
    </thead>
    <tbody>
      {/* row 1 */}
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