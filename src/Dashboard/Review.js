import React, { useContext, useEffect } from 'react';
import { AuthContext } from '../Contexts/AuthContext/AuthProvider';
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';
import data from '../data.json'
import Lottie from "lottie-react";
const Review = () => {
    const {user}=useContext(AuthContext) 
    const {register,formState: { errors },handleSubmit,} = useForm()

    const onSubmit = (data) => {
        console.log(data)
        const dataInfo=
            {
              customerName:data.customerName,
            providerName:data.providerName,
        rating:data.rating,
            descrip:data.description
              
            
            }
          
    
    console.log(dataInfo);
        fetch('https://taqwaa-services-v2-servers.vercel.app/ratings',{
            method:"post",
            headers:{
                'content-type':'application/json'
            },
            body:JSON.stringify(dataInfo)
            
        })
        .then(res=>res.json())
            .then(data=>{
                console.log(data)
                if(data.acknowledged === true){
                    toast.success("Thanks for Review")
                   
                }
                
            })
    }
    return (
        <div>
            <h1 className='text-center text-5xl font-bold my-10 text-white'>Reviews</h1>

            <div>
           
            </div>
            <div className="hero  bg-base-200 mb-20 rounded-lg shadow-xl">
  <div className="hero-content flex-col lg:flex-row-reverse">
 <div className='grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-2 justify-items-center '>
 <div>
  <Lottie animationData={data} loop={true} />
  </div>
    <div className="card w-full   bg-base-100 shadow-xl my-10">
  <div className="card-body">
        <h1 className='text-center text-2xl font-semibold mb-20 text-orange-500 shadow-2xl'>Please Rating Our Service Provider</h1>
        <form  onSubmit={handleSubmit(onSubmit)} >
        <div className="form-control  w-full ">
  <label className="label">
   
    <span className="label-text-alt">Customer Name</span>
  </label>
  <input type="text" 
  disabled
  value={user?.displayName}
  placeholder="customer name" 
  {...register("customerName", { required: true })}
  className="input input-bordered w-full " />
  
</div>
        <div className="form-control w-full mt-3 ">
  <label className="label">
   
    <span className="label-text-alt">Service Provider</span>
  </label>
  <input type="text" 
  
  placeholder="Please Service Provider Name" 
  {...register("providerName", { required: true })}
  className="input input-bordered w-full " />
  
</div>
        <div className="form-control w-full mt-3 ">
  <label className="label">
   
    <span className="label-text-alt">Ratings</span>
  </label>
  <input type="number" 
  
  placeholder="Please Rating [0-5]" 
  {...register("rating", { required: true,maxLength: {
    value:1,
    message:'Please Enter only one number 0-5'
  } })}
  className="input input-bordered w-full " />
  {errors?.rating === 'maxLength'  && <span className='text-red-600 my-2'>{errors?.rating.message}</span>}
  
</div>
        <div className="form-control w-full mt-3 ">
  <label className="label">
   
    <span className="label-text-alt">About Your Service</span>
  </label>
  <textarea placeholder="Please write your servicing" 
  {...register("description",{ required: {
    value:true,
    message:"Please Fill this form"
  } })}
  className="textarea textarea-bordered textarea-lg w-full " >
 {errors.description&& <span className='text-red-600 my-2'>{errors?.description.message}</span>}
  </textarea>

  
</div>

<input type="submit" value="Review Submit" className='btn btn-outline btn-info w-full  my-10' name="" id="" />
        </form>
  </div>
</div>
 </div>
  </div>
</div>
        </div>
    );
};

export default Review;