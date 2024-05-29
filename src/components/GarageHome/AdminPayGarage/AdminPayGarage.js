
import React, { useEffect, useState } from 'react';

const AdminPayGarage = ({providerName}) => {
    const [paying,setPaying]=useState({})

    useEffect(()=>{
        fetch(`https://taqwaa-services-v2-servers.vercel.app/garageGive?providerName=${providerName}`)
        .then(res=>res.json())
        .then(data=>{
            console.log(data);
            setPaying({providerName:data.providerName,price:data.reducePrice,id:data.transactionId,
       createdAt:data.createdAt       })
        })
    },[providerName])
    // const {data:paying={},refetch}=useQuery({
    //     queryKey:['pay',providerName],
    //     queryFn: async ()=>{
    //         const res = await  fetch(`http://localhost:5000/garageGive?providerName=${providerName}`)
    //         const data =await res.json()
    //       console.log('ff',data);
    //         return data

    //     }
    // })
    // useEffect(()=>{
    //     refetch()
    // },[])
    
    return (
        <div>
       {paying?.id &&  <div className="overflow-x-auto">
  <table className="table w-10/12">
    {/* head */}
    <thead>
      <tr>
       
        <th>ProviderName</th>
        <th>Price</th>
        <th>transaction ID</th>
        <th>Payment Time</th>
      </tr>
    </thead>
    <tbody>
     <tr>
      <th>{paying.providerName}</th>
      <td className='text-orange-500 font-bold'>{paying.price}Tk</td>
      <td className='text-orange-500 font-bold'>{paying.id}Tk</td>
      <td className='text-orange-500 font-bold'>{paying.createdAt}Tk</td>
    </tr>
  
    </tbody>
  </table>
</div>}
        
        </div>
    );
};

export default AdminPayGarage;