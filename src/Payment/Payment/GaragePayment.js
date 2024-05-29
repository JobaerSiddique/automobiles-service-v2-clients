import { useQuery } from '@tanstack/react-query';
import React from 'react';
import { Link } from 'react-router-dom';

const GaragePayment = () => {
   const{data:pays}=useQuery({
    queryKey:[],
    queryFn: async()=> {
    const res = await fetch('https://taqwaa-services-v2-servers.vercel.app/garagePayment')
    const data = await res.json()
    return data
    }
    
   })

   
   
    return (
        <div className='my-10'>
            <div className="overflow-x-auto">
  <table className="table w-full">
    {/* head */}
    <thead>
      <tr>
        <th></th>
        <th>Name</th>
        <th>Job</th>
        <th>Favorite Color</th>
      </tr>
    </thead>
    <tbody>
      {pays && pays?.map((p,index)=><tr>
       <th>{index+1}</th>
        <th>{p.GarageName}</th>
        <td>{p.price}</td>
        <td><Link className='btn btn-info btn-sm' to={`/dashboard/admin/garagePayment/${p._id}`}>pay</Link></td>
        
      </tr>)}
     
    </tbody>
  </table>
</div>
        </div>
    );
};

export default GaragePayment;