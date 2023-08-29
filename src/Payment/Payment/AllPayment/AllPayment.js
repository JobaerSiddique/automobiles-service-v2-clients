
// import { useQuery } from '@tanstack/react-query';
// import React, { useEffect } from 'react';


import { useState } from 'react';
import UsePayment from '../../../hooks/UsePayment';
import { Link, useNavigate } from 'react-router-dom';

const AllPayment = () => {
  
    // const {data:payments={},refetch}=useQuery({
    //     queryKey:[],
    //     queryFn: async ()=>{
    //         const res= await fetch('http://localhost:5000/allpayment')
    //         const data= res.json()
           
           
    //         return data
    //     }
    // })
    // useEffect(()=>{
    //     refetch()
    // },[])
    const {payments}=UsePayment()
    
    const navigate=useNavigate()
    const [totals,setTotals]=useState(null)
    const {totalGarage,services,users,payment,wholepayment}=payments
   
  const total=(pay)=>{
    
    
    
    const paying=pay.TotalPrice;
      let percentages= 0.1;
      const fullytk=paying*percentages;
      garageTotal(fullytk)
      
      return fullytk
      
   }
  
    const garageTotal=(pays)=>{
   
    const paysGarage=pays.Totalprice
    
    const adminpercentage=0.1;
    const totalpercentages=parseInt(paysGarage*adminpercentage)
    const adminwithpercentage=parseInt(paysGarage-totalpercentages)
    
    // bill(totalpercentages,adminwithpercentage,paysGarage,pays)
    return [totalpercentages]
    
   }
   
   const bill=(pays)=>{
    // console.log('total',totalpercentages,'admin',adminwithpercentage,'pay',paysGarage);
    // const garageTotal=paysGarage;
    // const afterPay=adminwithpercentage;
    // const admingive=totalpercentages
    // const adminpercentage=garageTotal-admingive
    
    const paysGarage=pays.Totalprice
    
    const adminpercentage=0.1;
    const totalpercentages=parseInt(paysGarage*adminpercentage)
    const adminwithpercentage=parseInt(paysGarage-totalpercentages)
    
    return adminwithpercentage
    
  
   }

   const handlePay=(pays)=>{
      const id=pays._id.providerName;
      const price=pays.Totalprice
      const adminpercentage=0.1;
    const totalpercentages=parseInt(price*adminpercentage)
    const adminwithpercentage=parseInt(price-totalpercentages)
      console.log(id,adminwithpercentage);
      
   }
  
    return (
       
        <div>
            <h1 className='my-20 text-center text-yellow-500 font-bold text-5xl'>this is Admin All Payment</h1>
         
         {/* {payments.payment.map(pay=><h1 className='text-center text-orange-500 font-bold text-3xl'>Total Payment : {pay.TotalPrice} Tk</h1>)}
         <h1 className='text-center text-orange-500 font-bold text-3xl'>{payments.totalServices}</h1>
         <h1 className='text-center text-orange-500 font-bold text-3xl'>{payments.totalGarage}</h1> */}
<div className="stats shadow flex justify-center items-center my-10">
  
  {payment?.map(pay=><div className="stat place-items-center">
    <div className="font-semibold text-black text-xl">Total Payment</div>
    <div className="stat-value text-success">{pay.TotalPrice}Tk</div>
   <h1 className='text-base font-bold text-info mt-4'>Admin Percentage: {total(pay)}Tk</h1>
  </div>)
 
  }
  
  
  <div className="stat place-items-center">
    <div className=" font-semibold text-black text-xl">Total Users</div>
    <div className="stat-value text-secondary">{users}</div>
   
  </div>
  
  <div className="stat place-items-center">
    <div className="font-semibold text-black text-xl">Total Services</div>
    <div className="stat-value">{services}</div>
    
  </div>
  <div className="stat place-items-center">
    <div className="font-semibold text-black text-xl">Total Garages</div>
    <div className="stat-value">{totalGarage}</div>

  </div>
  
  
</div>
<div className='mt-20'>
  <h1 className='text-center font-semibold text-transparent bg-clip-text text-xl lg:text-5xl bg-[radial-gradient(ellipse_at_bottom,_var(--tw-gradient-stops))] from-amber-900 to-yellow-300 my-10'>Garages Individual Payments Info</h1>
<div className="overflow-x-auto">
  <table className="table table-zebra w-8/12 mx-auto my-10">
    {/* head */}
    <thead>
      <tr align="center">
        <th></th>
        <th className='text-black font-bold text-lg'>Garages</th>
        <th className='text-black font-bold text-lg'>Total Price</th>
        <th className='text-black font-bold text-lg'>Admin Percentage</th>
        <th className='text-black font-bold text-lg'>Garage payment</th>
       
      </tr>
    </thead>
    <tbody>
     {
      wholepayment?.map((pays,index)=><tr align="center" >
        <th className='text-black font-bold font-serif'>{index+1}</th>
        <td className='text-black font-bold font-serif'>{pays._id.providerName}</td>
        <td className=' font-bold font-sans hover:font-serif text-orange-500 text-lg'>{pays.Totalprice} Tk</td>
        <td className=' font-bold font-sans hover:font-serif text-red-500 text-lg'>{garageTotal(pays)} Tk</td>
        <td className=' font-bold font-sans hover:font-serif text-black text-lg'>{bill(pays)} Tk</td>
        <td ><Link onClick={()=>handlePay(pays)} className='btn btn-info btn-sm'>pay</Link></td>

        
        
      
        
      
      </tr>)
      
     }
    
     

      
      
      
    </tbody>
  </table>
 
</div>
</div>
        </div>
    );
};

export default AllPayment;