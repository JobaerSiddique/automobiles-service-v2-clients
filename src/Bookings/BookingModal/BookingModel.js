import React from 'react';
import { useContext } from 'react';
import { AuthContext } from '../../Contexts/AuthContext/AuthProvider';
import { format } from 'date-fns';
import { Flip, toast } from 'react-toastify';

const BookingModel = ({booked,provider,selected,setBooked,refetch}) => {
    const {user}=useContext(AuthContext)
    const {name,slots,price}=booked
    console.log('booked',booked)
    
    const date=format(selected,'PP')
  const{providername}=provider
const handleBooking =  e=>{
  e.preventDefault()
  
  const form =e.target;
  const name=form.name.value;
  const email=form.email.value
  const price=(form.price.value);
  const date=form.date.value
  const slot=form.slot.value
  const serviceName=booked.name;
  const providerName=provider.providername
  const phone=form.phone.value
  const Registration=form.reg.value
  const bookings={
    CustomerName:name,
    CustomerEmail:email,
    price:parseInt(price),
    date:date,
    slot:slot,
    serviceName:serviceName,
    providerName:providerName,
    Phone:phone,
    RegistrationNo:Registration,

  }
 fetch('https://taqwaa-services-v2-servers.vercel.app/booked',{
    method:'post',
    headers:{'content-type':'application/json'},
    body:JSON.stringify(bookings)
    })
    .then(res=>res.json())
    .then(data=>{
      if(data.acknowledged){
        toast.success(`Successfully booked ${serviceName} service at ${slot}`,{
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
        setBooked(null)
        refetch()
      }
      else{
        toast.error(data.message)
      }
    })
  
  
}  
  
  return (
        <div >
            <input type="checkbox" id="booking-modal" className="modal-toggle" />
<div className="modal">
  <div className="modal-box">
  <label htmlFor="booking-modal" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
  <h3 className="font-bold text-lg text-center">{providername}</h3>
    <h3 className="font-bold text-lg text-center">Service : {name}</h3>
    <form onSubmit={handleBooking} action="" className='grid justify-items-center'>
    <div className="form-control w-full ">
  <label className="label">
    <span className="label-text">Customer Name</span>
  </label>
  <input 
  type="text" 
  placeholder="Name"
  value={user.displayName}
  disabled
  name='name'
  className="input input-bordered w-full " />
  
</div>
    <div className="form-control w-full mt-3 ">
  <label className="label">
    <span className="label-text">Customer Email</span>
  </label>
  <input 
  type="text" 
  placeholder="Type here"
  value={user.email}
  name='email'
  disabled
  className="input input-bordered w-full " />
  
</div>
    <div className="form-control w-full mt-3">
  <label className="label">
    <span className="label-text">Booking Slot</span>
  </label>
  <select name='slot' className="select w-full select-bordered">
   {slots.map((slot,index)=><option key={index}  value={slot} slot={slot}>
    {slot}
   </option>)}
 
</select>
  
</div>
<div className="form-control w-full ">
  <label className="label">
    <span className="label-text">Price</span>
  </label>
  <input 
  type="text" 
  placeholder="Type here"
  value={price}
  name='price'
  disabled
  className="input input-bordered w-full " />
  
</div>
<div className="form-control w-full ">
  <label className="label">
    <span className="label-text">Date</span>
  </label>
  <input 
  type="text" 
  placeholder="Type here"
  value={date}
  name='date'
  disabled
  className="input input-bordered w-full " />
  
</div>
<div className="form-control w-full ">
  <label className="label">
    <span className="label-text">Phone</span>
  </label>
  <input 
  type="number" 
  placeholder="Type here"
  name='phone'
  className="input input-bordered w-full " />
</div>
<div className="form-control w-full ">
  <label className="label">
    <span className="label-text">Automobile Regis No</span>
  </label>
  <input 
  type="text" 
  placeholder="Type here"
  name='reg'
  className="input input-bordered w-full " />
</div>
{slots.length === 0? <button disabled><input disabled className='btn btn-primary w-full mt-5' type="submit" value="Service Booking" /></button> :<input className='btn btn-primary w-full mt-5' type="submit" value="Service Booking" />}
    </form>
    
  </div>
</div>
        </div>
    );
};

export default BookingModel;