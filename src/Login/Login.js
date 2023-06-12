import React, { useContext, useState } from 'react';
import { useForm } from 'react-hook-form';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../Contexts/AuthContext/AuthProvider';
import login from '../images/login.jpg'
import glogo from '../images/google logo.png'
import useToken from '../hooks/UseToken';
import UseAdmin from '../hooks/UseAdmin';
import { toast } from 'react-toastify';
import Loading from '../Shared/Loading';
const Login = () => {
    const { register, formState: { errors }, handleSubmit } = useForm();
    const {signIn,loading,googleLogIn}=useContext(AuthContext)
    const navigate=useNavigate()
    const [loginToken,setLoginToken]=useState()
    const [token]=useToken(loginToken)
    const location= useLocation()
    const {user}=useContext(AuthContext)
    const [admin]=UseAdmin(user?.email)
    const [createEmail,setCreateEmail]=useState('')

  if(user && admin){
    let from = location.state?.from?.pathname || '/';
    return from
  }
    let from = location.state?.from?.pathname || "/garagesList" ||'/';
    if(token || admin){
      return navigate(from, { replace: true });
    }
  const handleLogin = (data) => {
    signIn(data.email,data.password)
    .then((result)=>{
      const user = result.user;
      console.log(user.email)
      setLoginToken(user?.email)
      
    })
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
      toast('Login sucessfully')
    }
    else if(data.acknowledged===true){
      setCreateEmail(email)
      toast.success('User create suceesfully')
    }
    
    
    
  })
}

  const handleGoogleLogIn=()=>{
    googleLogIn()
    .then((result)=>{
      const user=result.user;
      console.log('google',user)
      saveUser(user.displayName,user.email)
      setLoginToken(user?.email)
      
    })
  }
    if(loading){
      return <Loading/>
    }
    return (
        <div style={{backgroundImage:`url(${login})`,backgroundRepeat:'no-repeat',backgroundSize:'cover'}} className='flex justify-center items-center h-screen'>
            <div className="card w-96 glass shadow-2xl" >
  
  <div className="card-body">
    <h2 className='text-3xl text-center font-bold text-orange-500'  >Login</h2>
    <form onSubmit={handleSubmit(handleLogin)}>
    <div className="form-control w-full max-w-xs">
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
  {errors.email?.type ==='required' && <span className='text-red-500 mt-2'>{errors.email?.message}</span>}
</div>
    <div className="form-control w-full max-w-xs mt-5" >
  <label className="label">
    <span className="label-text font-bold">Password <span className='text-red-500 ml-1'>*</span></span>
  </label>
  <input 
  type="password" 
  placeholder="Enter Your Password" 
  {...register("password", { required:{
    value:true,
    message:"Password is required"
  }  })} 
  className="input input-bordered w-full " />
  {errors.password?.type ==='required' && <span className='text-red-500 mt-2'>{errors.password?.message}</span>}
</div>
<p className='mt-5 font-bold'>Have a new Here? <span className='text-orange-600'><Link to='/Register'>Please Register</Link></span></p>
<input type="submit" value="Login" className='btn btn-warning mt-10 w-full hover:scale-x-105' />
<div className="divider">OR</div>

    </form>
    <button  onClick={handleGoogleLogIn} className='btn glass  w-full hover:scale-x-95'><img width='40px' src={glogo} alt="" /><p>Contiune With Google</p></button>
  </div>
</div>
        </div>
    );
};

export default Login;