import React from 'react';
import { useLoaderData } from 'react-router-dom';

const SingleGaragepay = () => {
    const data=useLoaderData()
   const {_id,price,GarageName}=data
    
   const handlePays=()=>{

    const info={
        garageName:GarageName,
        price:price,
        id:_id
    }
    fetch('http://localhost:5000/garagePay',{
        method:"post",
        headers:{'content-type':'application/json'},
        body:JSON.stringify(info)
    })
    .then(res=>res.json())
    .then((result)=>{
        
        window.location.replace(result.url)
    })
   }
   return (
        <div>
            <div className="card w-96 bg-base-100 shadow-xl mx-auto my-20">
  <div className="card-body">
    <h2 className="card-title">{GarageName}</h2>
    <p>Pay: {price}Tk</p>
    <button onClick={handlePays} className='btn btn-warning'>Pay Now</button>
  </div>
</div>
        </div>
    );
};

export default SingleGaragepay;