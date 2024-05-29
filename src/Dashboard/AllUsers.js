import { useQuery } from '@tanstack/react-query';

import React from 'react';
import { Flip, toast } from 'react-toastify';
import Loading from '../Shared/Loading';

const AllUsers = () => {
   

    const {data:users=[],refetch,isLoading}=useQuery({
        queryKey:['users'],
        queryFn: async ()=> {
            const res = await fetch('https://taqwaa-services-v2-servers.vercel.app/user',{
                headers:{
                    authorizaion:`bearer ${localStorage.getItem('accessToken')}`
                 }
            })
            const data = await res.json()
            return data
        }
        
    })

    const delUser= id=>{
        const processd = window.confirm("are you want to Delete This user?")
        if(processd){
            fetch(`https://taqwaa-services-v2-servers.vercel.app/user/${id}`,{
            method:"DELETE",
            headers:{
              authorizaion:`bearer ${localStorage.getItem('accessToken')}`
           }
        })
        .then(res=>res.json())
        .then(data=>{
           
            if(data.deletedCount > 0){
                toast.success('Users Delete Successfully',{
                    position: "top-center",
                    autoClose: 1200,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "dark",
                    transition:Flip
                })
                refetch()
            }
        })
        }
    }

    const handleMakeAdmin = id=>{
        fetch(`http://localhost:5000/user/admin/${id}`,{
            method:"PUT",
            headers:{
              authorizaion:`bearer ${localStorage.getItem('accessToken')}`
           }
        })
        .then(res=>res.json())
        .then(data=>{
            if(data.modifiedCount > 0){
                toast.success('Users Making Admin Successfully',{
                    position: "top-center",
                    autoClose: 1200,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "dark",
                    transition:Flip
                })
                refetch()
            }
        })
    }
    const handleMakeGarage = id=>{
        fetch(`http://localhost:5000/user/admin/garage/${id}`,{
            method:"PUT",
            headers:{
              authorizaion:`bearer ${localStorage.getItem('accessToken')}`
           }
        })
        .then(res=>res.json())
        .then(data=>{
           
            if(data.deletedCount >0){
                toast.success('Users Making Garage Successfully',{
                    position: "top-center",
                    autoClose: 1200,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "dark",
                    transition:Flip
                })
                refetch()
            }
        })
    }

    if(isLoading){
        return <Loading/>
    }
    return (
        <div>
            <h1 className='text-xl lg:text-3xl font-bold text-white mt-8 '>All Users : {users.length}</h1>
            
            <div className="overflow-x-auto mt-7 flex justify-center">
  <table className="table w-5/6  ">
    
    <thead >
      <tr className='hover  '>
        <th></th>
        <th>Name</th>
        <th>Email</th>
        <th>Admin Request</th>
        <th>Garage  Request</th>
        <th></th>
      </tr>
    </thead>
    <tbody>
     
      {users.map((user,index)=><tr key={user._id} className="hover">
        <th>{index+1}</th>
        <td>{user.name}</td>
        <td>{user.email}</td>
        <td>{user.role !=='Admin' && <button onClick={()=>handleMakeAdmin(user._id)} className='btn btn-xs btn-secondary'>Make Admin</button>}</td>
        <td>{user.role !== 'Garage' && <button className='btn btn-xs btn-success' onClick={()=> handleMakeGarage(user._id)}>Make Garage</button>}</td>
        <th><button onClick={()=>delUser(user._id)} className="btn btn-xs btn-circle btn-outline">
  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" /></svg>
</button></th>
      </tr>)}
     
      
    </tbody>
  </table>
</div>
        </div>
    );
};

export default AllUsers;