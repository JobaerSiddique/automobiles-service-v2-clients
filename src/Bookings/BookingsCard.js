import React from 'react';
import { HiCurrencyBangladeshi } from 'react-icons/hi';
const BookingsCard = ({booking,setBooked}) => {
 
   const {name,slots,price}=booking
   
    return (
        <div className='mt-10' >
           <div className="card w-96 bg-base-100 shadow-xl">
  <div className="card-body ">
    <h2 className=" text-center text-cyan-500 font-bold text-xl lg:text-2xl">{name}</h2>
    <p className='text-center font-semibold mt-2'>{slots.length > 0? slots[0]:'Try Another Day'}</p>
    <p className='text-center font-semibold mt-2'>{slots.length} {slots.length>1?  'Spaces Availables':'Space Availabes'}</p>

    <p className='text-center font-bold text-xl flex justify-center align-center  text-orange-500 mt-2'>Price :  <HiCurrencyBangladeshi className='mt-1 '/>{price} </p>
    <label htmlFor="booking-modal" 
    className="btn  btn-primary mt-4"
    disabled={slots.length===0}
    onClick={()=>setBooked(booking)}
    
    >Booking Service</label>
    
  </div>
</div>
        </div>
    );
};

export default BookingsCard;