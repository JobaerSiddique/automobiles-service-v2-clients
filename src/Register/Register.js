import React, { useContext, useState } from 'react';
import { useForm } from 'react-hook-form';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../Contexts/AuthContext/AuthProvider';
import login from '../images/login.jpg'
import glogo from '../images/google logo.png'
import { toast } from 'react-toastify';
import useToken from '../hooks/UseToken';
import Loading from '../Shared/Loading';

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
        <div style={{backgroundImage:`url(${login})`,backgroundRepeat:'no-repeat',backgroundSize:'cover'}} className='bg-fixed flex justify-center items-center h-screen'>

<div className="hero  ">
  <div className="hero-content flex-col lg:flex-row-reverse">
    <div className="text-center lg:text-left">
     <img className='ml-5' src='' alt="" />
    </div>
    
    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
      
      <div className="card-body ">
      
    <h2 className='text-3xl text-center font-bold text-orange-500' data-aos="fade-down"  data-aos-duration="2000">Register</h2>
    <form onSubmit={handleSubmit(handleSignUp)}>
    <div className="form-control w-full max-w-xs"  data-aos="fade-down-left" data-aos-duration="2500">
  <label className="label">
    <span className="label-text font-bold">Name <span className='text-red-500 ml-1'>*</span></span>
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
    <div className="form-control w-full max-w-xs mt-2" data-aos="fade-right" data-aos-duration="2500">
  <label className="label">
    <span className="label-text font-bold">Email <span className='text-red-500 ml-1'>*</span></span>
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
    <div className="form-control w-full max-w-xs mt-2" data-aos="fade-left" data-aos-duration="3000">
  <label className="label">
    <span className="label-text font-bold">Password <span className='text-red-500  ml-1'>*</span></span>
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
    <div className="form-control w-full max-w-xs mt-2" data-aos="fade-left" data-aos-duration="3000">
  <label className="label">
    <span className="label-text font-bold">Image <span className='text-red-500 ml-1'>*</span></span>
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
<p className='mt-2 font-bold'>Already Have an Account? <span className='text-orange-600'><Link to='/login'>Please login</Link></span></p>
<div className='flex justify-center items-center '>
<input type="checkbox" onClick={()=> setAgree(!agree)} className="checkbox checkbox-success mt-2" id='terms' />
<label className={`ps-2 ${agree? '':'text-red-500 font-bold'} ml-2` } htmlFor="terms"><small>Accept Taqwaa service Terms and conditions</small></label>
</div>
<input disabled={!agree}  type="submit" value="Sign UP" className='btn btn-primary mt-10 w-full hover:scale-x-105' />  
<div className="divider">OR</div>

    </form>
    <button  onClick={handleGoogleLogIn} className='btn glass  w-full hover:scale-x-95'><img width='40px' src={glogo} alt="" /><p className='text-black'>Contiune With Google</p></button>
  
        
      </div>
    </div>
  </div>
</div>
            {/* <div className="card w-96  max-w-sm  glass shadow-2xl"  data-aos="fade-up">
  
  <div className="card-body">
    <h2 className='text-3xl text-center font-bold text-orange-500' data-aos="fade-down"  data-aos-duration="2000">Register</h2>
    <form onSubmit={handleSubmit(handleSignUp)}>
    <div className="form-control w-full max-w-xs"  data-aos="fade-down-left" data-aos-duration="2500">
  <label className="label">
    <span className="label-text font-bold">Name <span className='text-red-500 ml-1'>*</span></span>
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
    <div className="form-control w-full max-w-xs mt-2" data-aos="fade-right" data-aos-duration="2500">
  <label className="label">
    <span className="label-text font-bold">Email <span className='text-red-500 ml-1'>*</span></span>
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
    <div className="form-control w-full max-w-xs mt-2" data-aos="fade-left" data-aos-duration="3000">
  <label className="label">
    <span className="label-text font-bold">Password <span className='text-red-500  ml-1'>*</span></span>
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
    <div className="form-control w-full max-w-xs mt-2" data-aos="fade-left" data-aos-duration="3000">
  <label className="label">
    <span className="label-text font-bold">Image <span className='text-red-500 ml-1'>*</span></span>
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
<p className='mt-2 font-bold'>Already Have an Account? <span className='text-orange-600'><Link to='/login'>Please login</Link></span></p>
<div className='flex justify-center items-center '>
<input type="checkbox" onClick={()=> setAgree(!agree)} className="checkbox checkbox-success mt-2" id='terms' />
<label className={`ps-2 ${agree? '':'text-red-500 font-bold'} ml-2` } htmlFor="terms"><small>Accept Taqwaa service Terms and conditions</small></label>
</div>
<input disabled={!agree}  type="submit" value="Sign UP" className='btn glass mt-10 w-full hover:scale-x-105' />  
<div className="divider">OR</div>

    </form>
    <button  onClick={handleGoogleLogIn} className='btn glass  w-full hover:scale-x-95'><img width='40px' src={glogo} alt="" /><p>Contiune With Google</p></button>
  </div>
</div> */}
        </div>
    );
};

export default Register;