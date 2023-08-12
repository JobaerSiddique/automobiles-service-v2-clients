import React, { useContext, useState } from 'react';
import { useForm } from 'react-hook-form';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../Contexts/AuthContext/AuthProvider';

import glogo from '../images/google logo.png'
import { toast } from 'react-toastify';
import useToken from '../hooks/UseToken';
import Loading from '../Shared/Loading';
import data from '../data2.json'
import Lottie from "lottie-react";

const Register = () => {
    const { register, formState: { errors }, handleSubmit } = useForm();
    const [agree,setAgree]=useState(false)
    const { createUser,loading,googleLogIn, updateUser}=useContext(AuthContext)
    const [createEmail,setCreateEmail]=useState('')
    const navigate=useNavigate()
  const imageKey= "ad9aaab69e80177d144a35a09e0ba92d"
  const [token]=useToken(createEmail)
  const [signError,setError]=useState('')

  if(token){
    navigate('/')
  }
  console.log(imageKey)
    const handleSignUp = (data) => {
        createUser(data.email,data.password)
        .then((result)=>{
          setError('')  
          const user=result.user;
            console.log(user)
            const image= data.file[0]
         
            const formData = new FormData();
            formData.append("image",image);
            const url=`https://api.imgbb.com/1/upload?expiration=600&key=${imageKey}`
            fetch(url,{
              method:'POST',
              body: formData,
            })
            .then(res=>res.json())
            .then(result=>{
              const imageHost=result.data.url
              const userInfo={
                displayName:data.name,
                photoURL: imageHost
            }
            updateUser(userInfo)
            .then(()=>{
                saveUser(data.name,data.email)
            })
            })
          
        })
        .catch((error) => {
          const errorCode = error.code;
           setError(error.message)
          // ..
        });
    };

    const saveUser=(name,email)=>{
      const users={
        name:name,
        email:email
      }
      fetch('http://localhost:5000/user',{
      method:'post',
      headers:{
        'content-type':'application/json'
      },
      body:JSON.stringify(users)
      })
      .then(res=>res.json())
      .then(data=>{
        console.log(data)
        if(data.acknowledged===false ){
          toast('done')
        }
        else if(data.acknowledged===true){
          setCreateEmail(email)
          toast('Account Create Successfully')
        }
        
      })
    }

    
    const handleGoogleLogIn=()=>{
        googleLogIn()
        .then((result)=>{
          const user=result.user;
          console.log('google',user)
          
         
          saveUser(user.displayName,user.email)
          setCreateEmail(user.email)
         
          console.log('saveuser',user.email,user.displayName)
      //    if(!user?.email){
      //     // toast.success('Login Successfully',{
      //     //   position:"bottom-center"
      //     const email=user.email
      //     const googleUser ={
      //       name:user.displayName,
      //       email:user.email
      //     }
      //     console.log(googleUser)
      //     fetch('http://localhost:5000/user',{
      // method:'POST',
      // headers:{
      //   'content-type':'application/json'
      // },
      // body:JSON.stringify(googleUser)
      // })
      // .then(res=>res.json())
      // .then(data=>{
      //   console.log(data)
      //   setCreateEmail(email)
      //   toast('user create Suceesfully',{
      //     position:'top-center'
      //   })
      // })
      //     // })
      //    }
      //    else{
      //     toast.success('Login Successfully',{
      //         position:"bottom-center"})
      // //     const email=user.email
      // //     const googleUser ={
      // //       name:user.displayName,
      // //       email:user.email
      // //     }
      // //     console.log(googleUser)
      // //     fetch('http://localhost:5000/user',{
      // // method:'post',
      // // headers:{
      // //   'content-type':'application/json'
      // // },
      // // body:JSON.stringify(googleUser)
      // // })
      // // .then(res=>res.json())
      // // .then(data=>{
      // //   console.log(data)
      // //   setCreateEmail(email)
      // //   toast('user create Suceesfully',{
      // //     position:'top-center'
      // //   })
      // // })
      //    }
        })
      }

      if(loading){
        return <Loading/>
      }
    return (
      <>
        

<div className="hero min-h-screen ">
  <div className="hero-content flex-col lg:flex-row-reverse gap-10">
  <Lottie animationData={data} loop={true} />
    <div className='w-[80%]'>
       <div className="card glass w-full flex-shrink-1  shadow-2xl ">
      
      <div className="card-body w-full  ">
      
    <h2 className='text-4xl text-center font-bold text-cyan-500' data-aos="fade-down"  data-aos-duration="2000">Register</h2>
    <form onSubmit={handleSubmit(handleSignUp)}>
    <div className="form-control w-full "  >
  <label className="label">
    <span className="label-text text-white font-bold">Name <span className='text-red-500 ml-1'>*</span></span>
  </label>
  <input 
  type="text" 
  placeholder="Enter Your Name" 
  {...register("name", { required:{
    value:true,
    message:"Name is required"
  }  })} 
  className="input input-bordered w-full " />
  {errors.name?.type ==='required' && <span className='text-red-500 font-semibold  mt-2'>{errors.name?.message}</span>}
</div>
    <div className="form-control w-full mt-2" >
  <label className="label">
    <span className="label-text text-white font-bold">Email <span className='text-red-500 ml-1'>*</span></span>
  </label>
  <input 
  type="email" 
  placeholder="Enter Your Email" 
  {...register("email", { required:{
    value:true,
    message:"Email Address is required"
  }  })} 
  className="input input-bordered w-full " />
  {errors.email?.type ==='required' && <span className='text-red-500 font-semibold mt-2'>{errors.email?.message}</span>}
</div>
    <div className="form-control w-full  mt-2">
  <label className="label">
    <span className="label-text text-white font-bold">Password <span className='text-red-500  ml-1'>*</span></span>
  </label>
  <input 
  type="password" 
  placeholder="Enter Your Password" 
  {...register("password", { required:{
    value:true,
    message:"Password is required"
  }  })} 
  className="input input-bordered w-full " />
  {errors.password?.type ==='required' && <span className='text-red-500 font-semibold  mt-2'>{errors.password?.message}</span>}
</div>
    <div className="form-control w-full  mt-2">
  <label className="label">
    <span className="label-text text-white font-bold">Image <span className='text-red-500 ml-1'>*</span></span>
  </label>
  <input 
  type="file" 
  placeholder="Enter Your Photo" 
  {...register("file", { required:{
    value:true,
    message:"Image is required"
  }  })} 
  className="input input-bordered w-full " />
  {errors.image?.type ==='required' && <span className='text-red-500 font-semibold  mt-2'>{errors.image?.message}</span>}
</div>
{signError && <p>{signError}</p>}
<p className='my-4 font-bold'>Already Have an Account?  <span className='text-orange-600 ml-2'><Link to='/login'>Please login</Link></span></p>
<div className='flex  items-center mt-2 '>
<input type="checkbox" onClick={()=> setAgree(!agree)} className="checkbox checkbox-warning mt-2" id='terms' />
<label className={`ps-2 ${agree? '':'text-red-500 font-bold'} ml-2 mt-2 ` } htmlFor="terms">Accept Taqwaa service Terms and conditions</label>
</div>
<input disabled={!agree}  type="submit" value="Sign UP" className='btn btn-primary mt-10 w-full hover:scale-x-105' />  
<div className="divider">OR</div>

    </form>
    <button  onClick={handleGoogleLogIn} className='btn glass  w-full hover:scale-x-95'><img width='40px' src={glogo} alt="" /><p className='text-black'>Contiune With Google</p></button>
  
        
      </div>
    </div>
    </div>
  </div>
</div>

</>
    );
};

export default Register;