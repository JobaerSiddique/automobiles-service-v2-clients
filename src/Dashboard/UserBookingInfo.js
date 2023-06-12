import React from 'react';


const UserBookingInfo = ({book,index,handleDeleteService}) => {
   const {_id,CustomerName,serviceName,slot,date,providerName,price}=book
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
     <th><label onClick={()=>handleDeleteService(_id)} className="btn btn-sm btn-circle btn-outline">
  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" /></svg>
</label></th>


      </tr>

       </>
    );
};

export default UserBookingInfo;