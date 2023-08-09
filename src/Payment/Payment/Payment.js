import { Elements } from '@stripe/react-stripe-js';
import React, { useEffect } from 'react';
import { useLoaderData } from 'react-router-dom';


const Payment = () => {
    const data=useLoaderData()
    console.log(data);
    const {serviceName,CustomerName,_id,providerName,price,CustomerEmail,phone}=data
   
const payment=()=>{
    const info={
        // total_amount: price,
        // cus_name: CustomerName,
        // cus_email:CustomerEmail,
        // phone:phone,
        // product_category:serviceName,
        product_id:_id

    }
    fetch('http://localhost:5000/payment',{
        method:'POST',
       
        headers:{'content-type':'application/json'},
        body:JSON.stringify(info)
    })
    .then(res=>res.json())
    .then(result=>{
        window.location.replace(result.url)
        console.log(result);
    })
}
    
    return (
        <div>
            <h1 className='text-center text-xl lg:text-7xl text-white my-20'>Welcome to Payment Section</h1>
            <div className="card w-96 bg-base-100 shadow-xl mx-auto">
  <div className="card-body">
    <h2 className="card-title">Hi,{CustomerName}</h2>
    <h4  >Booking ID:  {_id} </h4>
    <h4  >Payment For {serviceName} </h4>
    <h4  >Service Provider : {providerName} </h4>
   <button onClick={payment} className='btn btn-outline btn-info'>Pay</button>
    
  </div>
</div>
            
            

        </div>
    );
};

export default Payment;