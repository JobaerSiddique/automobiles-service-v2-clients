import React from 'react';
import { useState } from 'react';
import BookingBanner from './BookingBanner/BookingBanner';
import AvailableBookings from './AvailableBookings';

const Bookings = ({serviceId}) => {
    const [selected,setSelected]=useState(new Date())
    return (
        <div>
            <h1 className='text-center text-xl lg:text-5xl underline font-bold mt-20 text-white'>Booking Section</h1>
           <BookingBanner  selected={selected} setSelected={setSelected}/>
           <AvailableBookings serviceId={serviceId} selected={selected}></AvailableBookings>
        </div>
    );
};

export default Bookings;