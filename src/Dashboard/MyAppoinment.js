import React from 'react';
import { useContext } from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { AuthContext } from '../Contexts/AuthContext/AuthProvider';
import UserBookingInfo from './UserBookingInfo';
import { useQuery } from '@tanstack/react-query';
import { Flip, toast } from 'react-toastify';

const MyAppoinment = () => {
    // const [booking,setBooking]=useState([])
    const {user}=useContext(AuthContext)
   
    // useEffect(()=>{
    //     fetch(`http://localhost:5000/booked?email=${user.email}`)
    //     .then(res=>res.json())
    //     .then(data=>{
    //         console.log(data)
    //         setBooking(data)
    //     })
    // },[user.email])
  const {data:booking=[],refetch}=useQuery({
    queryKey:['booking',user?.email],
  queryFn:async()=>{
    const res= await fetch(`http://localhost:5000/booked?email=${user.email}`,{
      headers:{
        authorizaion:`bearer ${localStorage.getItem('accessToken')}`
     }
    })
    const data=await res.json();
    return data
  }
  })

  const handleDeleteService = id =>{
    const process = window.confirm('Are You want to delete this service?')
    if(process){
      fetch(`http://localhost:5000/booked/${id}`,{
        method:'DELETE'
      })
      .then(res=>res.json())
      .then(data=>{
        console.log("delete",data)
        if(data.deletedCount>0){
          toast.success('Service booking cancel Successfully',{
            position: "top-center",
            autoClose: 1500,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            transition:Flip,
            theme: "dark",
          })
          refetch()
        }
      })
    }
  }
    
    return (
        <div className='md:mt-20'>
            <h1 className='text-center font-bold text-xl lg:text-5xl mt-4 '>Welcome to <span className='text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600'>Taqwaa Service</span> </h1>

            <h3 className='font-semibold text-xl lg:text-2xl mt-5 p-4'>My service Bookings: {booking.length}</h3>

         
            <div className="overflow-x-auto">
  <table className="table w-full">
    {/* head */}
    <thead>
      <tr>
        <th className='text-center'></th>
        <th className='text-center'>Customer Name</th>
        <th className='text-center'>Service Name</th>
        <th className='text-center'>Booking Slots</th>
        <th className='text-center'>Date</th>
        <th className='text-center'>Provider Name</th>
        <th className='text-center' >Tk</th>
        <th className='text-center'></th>
      </tr>
    </thead>
    <tbody>
       {booking.map((book,index)=><UserBookingInfo
       key={book._id}
       book={book}
       index={index}
       
       handleDeleteService={handleDeleteService}
       ></UserBookingInfo>)}
    </tbody>
  </table>
</div>
            

            {/* {booking.map(book=><UserBookingInfo
            key={book._id}
            book={book}
            >

            </UserBookingInfo>)} */}
        </div>
    );
};

export default MyAppoinment;