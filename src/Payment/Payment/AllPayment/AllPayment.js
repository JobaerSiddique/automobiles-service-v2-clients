
import { useQuery } from '@tanstack/react-query';
import React, { useEffect } from 'react';

const AllPayment = () => {
    const {data:payments={},refetch}=useQuery({
        queryKey:[],
        queryFn: async ()=>{
            const res= await fetch('http://localhost:5000/allpayment')
            const data= res.json()
           console.log('all payment',data);
            return data
        }
    })
    // useEffect(()=>{
    //     refetch()
    // },[])
    

    return (
       
        <div>
            <h1 className='my-20 text-center text-yellow-500 font-bold text-5xl'>this is Admin All Payment</h1>
         
         {/* {payments.payment.map(pay=><h1 className='text-center text-orange-500 font-bold text-3xl'>Total Payment : {pay.TotalPrice} Tk</h1>)}
         <h1 className='text-center text-orange-500 font-bold text-3xl'>{payments.totalServices}</h1>
         <h1 className='text-center text-orange-500 font-bold text-3xl'>{payments.totalGarage}</h1> */}
<div className="stats shadow flex justify-center items-center my-10">
  
  {payments && payments.payment?.map(pay=><div className="stat place-items-center">
    <div className="font-semibold text-black text-xl">Total Payment</div>
    <div className="stat-value text-success">{pay.TotalPrice}Tk</div>
    
  </div>)
  
  }
  
  
  <div className="stat place-items-center">
    <div className=" font-semibold text-black text-xl">Total Users</div>
    <div className="stat-value text-secondary">{payments.users}</div>
   
  </div>
  
  <div className="stat place-items-center">
    <div className="font-semibold text-black text-xl">Total Services</div>
    <div className="stat-value">{payments.services}</div>
    
  </div>
  <div className="stat place-items-center">
    <div className="font-semibold text-black text-xl">Total Garages</div>
    <div className="stat-value">{payments.totalGarage}</div>
    
  </div>
  
</div>
        </div>
    );
};

export default AllPayment;