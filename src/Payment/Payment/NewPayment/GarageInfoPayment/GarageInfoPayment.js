import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';

const GarageInfoPayment = ({pays,index}) => {
  const [totalPrice,setTotalPrice]=useState('')  
  const [profit,setProfit]=useState(null)  
  const [reducePrices,setReducePrices]=useState(null)  
  const{Totalprice,_id,reducePrice,providerName,paid}=pays
  console.log(pays);
  
  
  useEffect(()=>{
    setTotalPrice(Totalprice)
    setReducePrices(reducePrice)
   const prices=totalPrice*0.1;
   setProfit(prices)
  },[Totalprice,_id,reducePrice])

    const handlePay=()=>{
       const id=providerName
      
        
       const info={
         garageName:id,
        price:reducePrice,
        _id:_id
       }
       
       console.log(info);
     
      fetch('http://localhost:5000/garagePay',{
        method:"post",
        headers:{'content-type':'application/json'},
        body:JSON.stringify(info)
    })
    .then(res=>res.json())
    .then((result)=>{
        // console.log(result.url);
        window.location.replace(result.url)
        setTotalPrice(0)
        setProfit(0)
        setReducePrices(0)
        
        
    })
     
    }
    return <>
    <tr align="center">
        <th>{index+1}</th>
        <td className='font-bold text-info lg:text-lg'>{_id}</td>
        {paid ? <td className='font-bold text-orange-500 lg:text-lg'>0</td>:<td className='font-bold text-orange-500 lg:text-lg'>{totalPrice}Tk</td>}
        {paid ? <td className='font-bold text-orange-500 lg:text-lg'>0</td>: <td className='font-bold text-slate-500 lg:text-lg'>{reducePrices}Tk</td>}
       
        <td ><button onClick={handlePay} className='btn btn-sm btn-info'>Pay</button></td>
      </tr>

    
    </>
};

export default GarageInfoPayment;