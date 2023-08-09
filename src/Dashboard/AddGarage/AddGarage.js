import React from 'react';
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';
import './AddGarage.css'

const AddGarage = () => {
  
    const { register,formState: { errors }, handleSubmit,} =useForm()
    const onSubmit = (data) => {
       
        const garageInfo=[
           {
            email:data.email,
            providername:data.providername,
            phone:data.phone,
            location:data.location,
            description:data.garage,
            img:data.img,
            services:[
                {
                    img:data.img1,
                    name:data.name1,
                },
                {
                    img:data.img2,
                    name:data.name2,
                },
                {
                    img:data.img3,
                    name:data.name3,
                },
                {
                    img:data.img4,
                    name:data.name4,
                }
            ],
            experts:[
                {
                    img:data.eximg1,
                    name:data.exname1,
                },
                {
                    img:data.eximg2,
                    name:data.exname2,
                },
                {
                    img:data.eximg3,
                    name:data.exname3,
                },
                {
                    img:data.eximg4,
                    name:data.exname4,
                }
            ]
           }
        ]
        fetch('http://localhost:5000/garages',{
            method:'post',
            headers:{
                'content-type':'application/json'
            },
            body:JSON.stringify(garageInfo)
        })
        .then(res=>res.json())
        .then(data=>{
           if(data.acknowledged === true){
            toast.success("Succesfully Added New Garage")
            
           }
           data.reset()
        })
        console.log(garageInfo);
        
    }
    return (
        <div className='garage bg-fixed'>
            <h1 className='text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-center text-5xl my-5 font-bold'>New Provider Agreement</h1>

            <div className='mx-auto flex justify-center my-10'>
            <div className="card w-10/12 glass shadow-xl">
  <div className="card-body">
   <form onSubmit={handleSubmit(onSubmit)}>
        <div className='grid gap-20 md:grid-cols-2 lg:grid-cols-3 grid-cols-1 justify-center'>
            <div>
    <div className="form-control w-full ">
  <label className="label">
    <span className="label-text flex justify-center font-semibold"><span className='text-red-600 text-xl mr-2'>*</span > Email</span>
  </label>
  <input 
  type="email" 
  placeholder="Email Please" 
  {...register("email", { required:{
    value:true,
    message:"Please enter Email"
  }  })}
  className="input input-bordered input-info w-full" />
  {errors.email?.type === "required" && <span className='text-red-600 font-semibold mt-2'>{errors.email?.message}</span>}
</div>
    <div className="form-control w-full ">
  <label className="label">
    <span className="label-text flex justify-center font-semibold"><span className='text-red-600 text-xl mr-2'>*</span> Provider Name</span>
  </label>
  <input 
  type="text" 
  placeholder="Enter Garage Name" 
  {...register("providername", { required:{
    value:true,
    message:"Please enter Provider Name Must"
  }  })}
  className="input input-bordered input-info w-full" />
  {errors.providername?.type === "required" && <span className='text-red-600 font-semibold mt-2'>{errors.providername?.message}</span>}
</div>
    
    <div className="form-control w-full ">
  <label className="label">
    <span className="label-text flex justify-center font-semibold"><span className='text-red-600 text-xl mr-2'>*</span> Phone</span>
  </label>
  <input 
  type="number" 
  placeholder="Email Please" 
  {...register("phone", { required:{
    value:true,
    message:"Please enter valid Phone Number Must"
  },maxLength:{
    value:11,
    message:'please Enter 11 Digits Must'
  }   })}
  className="input input-bordered input-info w-full" />
  {errors.phone?.type === "required" && <span className='text-red-600 font-semibold mt-2'>{errors.phone?.message}</span>}
  {errors.phone?.type === "maxLength" && <span className='text-red-600 font-semibold mt-2'>{errors.phone?.message}</span>}
</div>
    <div className="form-control w-full ">
  <label className="label">
    <span className="label-text flex justify-center font-semibold"><span className='text-red-600 text-xl mr-2'>*</span> Location</span>
  </label>
  <input 
  type="text" 
  placeholder="Enter Your Location" 
  {...register("location", { required:{
    value:true,
    message:"Your Location please "
  } })}
  className="input input-bordered input-info w-full" />
  {errors.location?.type === "required" && <span className='text-red-600 font-semibold mt-2'>{errors.location?.message}</span>}
  
</div>
    <div className="form-control w-full ">
  <label className="label">
    <span className="label-text flex justify-center font-semibold"><span className='text-red-600 text-xl mr-2'>*</span>About Garage</span>
  </label>
  <textarea 
  className="textarea textarea-info" 
  placeholder="About Your Garage "
  {...register("garage", { required:{
    value:true,
    message:"Please write About Your Garage"
  }  })}
  >

  </textarea>
  {errors.garage?.type === "required" && <span className='text-red-600 font-semibold mt-2'>{errors.garage?.message}</span>}
</div>
    <div className="form-control w-full ">
  <label className="label">
    <span className="label-text flex justify-center font-semibold"><span className='text-red-600 text-xl mr-2'>*</span> Main Image</span>
  </label>
  <input 
  type="text" 
  placeholder="Please Image " 
  {...register("img", { required:{
    value:true,
    message:"Please enter image"
  }  })}
  className="input input-bordered input-info w-full" />
  {errors.img?.type === "required" && <span className='text-red-600 font-semibold mt-2'>{errors.img?.message}</span>}
</div>
            </div>
            <div>
            <div className="form-control w-full ">
  <label className="label">
    <span className="label-text flex justify-center font-semibold"><span className='text-red-600 text-xl mr-2'>*</span > Service Name 1 </span>
  </label>
  <input 
  type="text" 
  placeholder="Enter service name 1" 
  {...register("name1", { required:{
    value:false,
    message:"Please enter Email"
  }  })}
  className="input input-bordered input-info w-full" />
  
</div>
            <div className="form-control w-full ">
  <label className="label">
    <span className="label-text flex justify-center font-semibold"><span className='text-red-600 text-xl mr-2'>*</span > Service Image 1 </span>
  </label>
  <input 
  type="text" 
  placeholder="Enter service image 1" 
  {...register("img1", { required:{
    value:false,
    message:"Please enter Email"
  }  })}
  className="input input-bordered input-info w-full" />
  
</div>
            <div className="form-control w-full ">
  <label className="label">
    <span className="label-text flex justify-center font-semibold"><span className='text-red-600 text-xl mr-2'>*</span > Service Name 2 </span>
  </label>
  <input 
  type="text" 
  placeholder="Enter service name 2" 
  {...register("name2", { required:{
    value:false,
    message:"Please enter Email"
  }  })}
  className="input input-bordered input-info w-full" />
  
</div>
            <div className="form-control w-full ">
  <label className="label">
    <span className="label-text flex justify-center font-semibold"><span className='text-red-600 text-xl mr-2'>*</span > Service Image 2 </span>
  </label>
  <input 
  type="text" 
  placeholder="Enter service image 2" 
  {...register("img2", { required:{
    value:false,
    message:"Please enter Email"
  }  })}
  className="input input-bordered input-info w-full" />
  
</div>
            <div className="form-control w-full ">
  <label className="label">
    <span className="label-text flex justify-center font-semibold"><span className='text-red-600 text-xl mr-2'>*</span > Service Name 3 </span>
  </label>
  <input 
  type="text" 
  placeholder="Enter service name 3" 
  {...register("name3", { required:{
    value:false,
    message:"Please enter Email"
  }  })}
  className="input input-bordered input-info w-full" />
  
</div>
            <div className="form-control w-full ">
  <label className="label">
    <span className="label-text flex justify-center font-semibold"><span className='text-red-600 text-xl mr-2'>*</span > Service Image 3 </span>
  </label>
  <input 
  type="text" 
  placeholder="Enter service image 3" 
  {...register("img3", { required:{
    value:false,
    message:"Please enter Email"
  }  })}
  className="input input-bordered input-info w-full" />
  
</div>
            <div className="form-control w-full ">
  <label className="label">
    <span className="label-text flex justify-center font-semibold"><span className='text-red-600 text-xl mr-2'>*</span > Service Name 4 </span>
  </label>
  <input 
  type="text" 
  placeholder="Enter service name 4" 
  {...register("name4", { required:{
    value:false,
    message:"Please enter Email"
  }  })}
  className="input input-bordered input-info w-full" />
  
</div>
            <div className="form-control w-full ">
  <label className="label">
    <span className="label-text flex justify-center font-semibold"><span className='text-red-600 text-xl mr-2'>*</span > Service Image 4 </span>
  </label>
  <input 
  type="text" 
  placeholder="Enter service image 4" 
  {...register("img4", { required:{
    value:false,
    message:"Please enter Email"
  }  })}
  className="input input-bordered input-info w-full" />
  
</div>
            </div>
            <div>
            <div className="form-control w-full ">
  <label className="label">
    <span className="label-text flex justify-center font-semibold"><span className='text-red-600 text-xl mr-2'>*</span > Experts Name 1 </span>
  </label>
  <input 
  type="text" 
  placeholder="Enter expert name 1" 
  {...register("exname1", { required:{
    value:false,
    message:"Please enter Email"
  }  })}
  className="input input-bordered input-info w-full" />
  
</div>
            <div className="form-control w-full ">
  <label className="label">
    <span className="label-text flex justify-center font-semibold"><span className='text-red-600 text-xl mr-2'>*</span > Experts Image 1 </span>
  </label>
  <input 
  type="text" 
  placeholder="Enter expert image 1" 
  {...register("eximg1", { required:{
    value:false,
    message:"Please enter Email"
  }  })}
  className="input input-bordered input-info w-full" />
  
</div>
            <div className="form-control w-full ">
  <label className="label">
    <span className="label-text flex justify-center font-semibold"><span className='text-red-600 text-xl mr-2'>*</span > Experts Name 2 </span>
  </label>
  <input 
  type="text" 
  placeholder="Enter expert name 2" 
  {...register("exname2", { required:{
    value:false,
    message:"Please enter Email"
  }  })}
  className="input input-bordered input-info w-full" />
  
</div>
            <div className="form-control w-full ">
  <label className="label">
    <span className="label-text flex justify-center font-semibold"><span className='text-red-600 text-xl mr-2'>*</span > Experts Image 2 </span>
  </label>
  <input 
  type="text" 
  placeholder="Enter expert image 2" 
  {...register("eximg2", { required:{
    value:false,
    message:"Please enter Email"
  }  })}
  className="input input-bordered input-info w-full" />
  
</div>
            <div className="form-control w-full ">
  <label className="label">
    <span className="label-text flex justify-center font-semibold"><span className='text-red-600 text-xl mr-2'>*</span > Experts Name 3 </span>
  </label>
  <input 
  type="text" 
  placeholder="Enter expert name 3" 
  {...register("exname3", { required:{
    value:false,
    message:"Please enter Email"
  }  })}
  className="input input-bordered input-info w-full" />
  
</div>
            <div className="form-control w-full ">
  <label className="label">
    <span className="label-text flex justify-center font-semibold"><span className='text-red-600 text-xl mr-2'>*</span > Experts Image 3 </span>
  </label>
  <input 
  type="text" 
  placeholder="Enter expert image 3" 
  {...register("eximg3", { required:{
    value:false,
    message:"Please enter Email"
  }  })}
  className="input input-bordered input-info w-full" />
  
</div>
            <div className="form-control w-full ">
  <label className="label">
    <span className="label-text flex justify-center font-semibold"><span className='text-red-600 text-xl mr-2'>*</span > Experts Name 4 </span>
  </label>
  <input 
  type="text" 
  placeholder="Enter expert name 4" 
  {...register("exname4", { required:{
    value:false,
    message:"Please enter Email"
  }  })}
  className="input input-bordered input-info w-full" />
  
</div>
            <div className="form-control w-full ">
  <label className="label">
    <span className="label-text flex justify-center font-semibold"><span className='text-red-600 text-xl mr-2'>*</span > Experts Image 4 </span>
  </label>
  <input 
  type="text" 
  placeholder="Enter expert image 4" 
  {...register("eximg4", { required:{
    value:false,
    message:"Please enter Email"
  }  })}
  className="input input-bordered input-info w-full" />
  
</div>
            </div>
        </div>
        <input className='btn btn-outline btn-info mt-20 w-full' type="submit" value='Add a garage' />
   </form>
  </div>
</div>
            </div>
        </div>
    );
};

export default AddGarage;