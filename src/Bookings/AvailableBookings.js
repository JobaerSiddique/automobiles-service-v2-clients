import { format } from 'date-fns';
import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import BookingsCard from './BookingsCard';
import pat from '../images/service pattern.jpg'
import BookingModel from './BookingModal/BookingModel';
import { useQuery } from '@tanstack/react-query';
const AvailableBookings = ({selected,serviceId}) => {
   // const [bookings,setBookings]=useState([])
   // console.log('serviceId',serviceId)
   const date=format(selected,'PP')
   const [provider,setProvider]=useState({})
   const [booked,setBooked]=useState(null)
   
   const {data:bookings=[],refetch}=useQuery({
      queryKey:['bookings',date,provider.providername],
      queryFn:async()=>{
         const res = await fetch(`http://localhost:5000/bookings?date=${date}`,{
            headers:{
               authorizaion:`bearer ${localStorage.getItem('accessToken')}`
            }
         })
         const data = await res.json()
         return data
      }
      
   })
   
   
   // useEffect(()=>{
   //   fetch(`http://localhost:5000/bookings?date=${date}?provider=${provider.providername}`)
   //   .then(res=>res.json())
   //   .then(data=>{
   //      setBookings(data)
   //   })
   // },[date,provider.providername])

   useEffect(()=>{
      fetch(`https://taqwaa-services-v2-servers.vercel.app/garages/${serviceId}`)
      .then(res=>res.json())
      .then(data=>{
         console.log('id Data',data)
         setProvider(data)
      })
   },[serviceId])
    return (
        <div className='mt-10 '>
           <h1 className='text-center text-white font-bold text-xl lg:text-5xl'>Available Bookings on {format(selected,'PP')} </h1> 

           <div className='grid gap-16 m-8 justify-items-center md:grid-cols-2 lg:grid-cols-3' style={{backgroundImage:`url(${pat})`, backgroundRepeat:"no-repeat"}}>
           {bookings.map(booking=><BookingsCard 
           key={booking._id}
           booking={booking}
           setBooked={setBooked}
           provider={provider}
           >
        
           </BookingsCard>)}
           </div>
           {booked && <BookingModel refetch={refetch} booked={booked} setBooked={setBooked} provider={provider} selected={selected} ></BookingModel>}
        </div>
      
    );
};

export default AvailableBookings;