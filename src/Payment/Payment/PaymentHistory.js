import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../Contexts/AuthContext/AuthProvider';
import './PaymentHistory.css'
const PaymentHistory = () => {
   const {user}=useContext(AuthContext)
    const [history,setHistory]=useState([])
   useEffect(()=>{
        fetch(`https://taqwaa-services-v2-servers.vercel.app/booked?email=${user?.email}`,{
            headers:{
                authorizaion:`bearer ${localStorage.getItem('accessToken')}`
             }
        })
        .then(res=>res.json())
        .then(data=>{
            console.log(data);
            setHistory(data.filter(his=>his.paid === true))
        })
   },[user?.email])
    return (
        <div >
            <h1 className='text-center text-yellow-500 font-extralight text-5xl mt-10 motion-safe:animate-bounce'>Hello, {user?.displayName}</h1>
          <h1 className='text-white font-bold text-3xl'>Total Payment :{history.length}</h1>
            <div className="overflow-x-auto my-20 flex justify-center  ">
  <table className="table bg-transparent w-5/6 ">
    <thead>
      <tr align="center" className='font-bold text-fuchsia-700'>
        <th></th> 
        <th>Customer Name</th> 
        <th>Service Provider</th> 
        <th>Service name</th> 
        <th>Slot Time</th> 
        <th>date</th> 
        <th>transaction Time</th>
        <th>transaction Id</th>
      </tr>
    </thead> 
    <tbody align="center">
    {
            history.map((histo,index)=> <tr key={histo._id} className='font-bold'>
                <th>{index+1}</th> 
                <td>{histo.CustomerName}</td> 
                <td>{histo.providerName}</td> 
                <td>{histo.serviceName}</td> 
                <td>{histo.slot}</td> 
                <td>{histo.date}</td> 
                <td>{histo.createdAt}</td>
                <td>{histo.transactionId}</td>
              </tr>)
        }
      
     
    </tbody> 
    
  </table>
</div>
        </div>
    );
};

export default PaymentHistory;