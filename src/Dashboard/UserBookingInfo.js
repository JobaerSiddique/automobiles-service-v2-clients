import React from 'react';
import { Link } from 'react-router-dom';


const UserBookingInfo = ({book,index,handleDeleteService}) => {
   const {_id,CustomerName,serviceName,slot,date,providerName,price,paid}=book
   console.log(_id)
  
    return (
        <>
        <tr>
        <th className='text-center'>{index+1}</th>
        <td className='text-center'>{CustomerName}</td>
       
        <td className='text-center font-bold'>{serviceName}</td>
        <td className='text-center  font-bold'>{slot}</td>
        <td className='text-center'>{date}</td>
        <td className='text-center  font-bold'>{providerName}</td>
        <td className='text-center  font-bold'>{price}</td>
       {
         paid? <td className='text-center text-green-600 font-bold'>Paid</td>:<td className='text-center text-red-600  font-bold'>Pending</td>
       }
      
       {
         paid? <td><button disabled className='btn btn-sm  btn-outline btn-info'>pay</button></td>: <td><label  className="btn btn-sm  btn-outline btn-info">
 <Link to={`/payment/${_id}`}
 >Pay</Link>
</label></td>
       }
     {
      paid?<th><label disabled onClick={()=>handleDeleteService(_id)} className="btn btn-sm btn-circle btn-outline">
      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" /></svg>
    </label></th>:<th><label onClick={()=>handleDeleteService(_id)} className="btn btn-sm btn-circle btn-outline">
      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" /></svg>
    </label></th>
     }


      </tr>

       </>
    );
};

export default UserBookingInfo;