import { useQuery } from '@tanstack/react-query';
import React from 'react';
import { toast } from 'react-toastify';
import Loading from '../Shared/Loading';

const AllGarages = () => {
    
    const{data:garages=[],refetch,isLoading}=useQuery({
        queryKey:['garages'],
        queryFn: async ()=>{
            const res = await fetch('https://taqwaa-services-v2-servers.vercel.app/garages',{
              
            })
            const data = await res.json()
            return data;
        }
    })

    const handleDeleteGarage = id =>{
      const confirmDelete = window.confirm('Are You Want to This is Provider')
      if(confirmDelete){
        fetch(`https://taqwaa-services-v2-servers.vercel.app/garages/${id}`,{
        method:"DELETE"
      })
      .then(res=>res.json())
      .then(data=>{
        console.log(data)
        if(data.deletedCount>0){
          toast.success("Provider Delete Successfully")
          refetch()
        }

      })
      }
    }

    if(isLoading){
        return <Loading/>
    }
    return (
        <div>
            <h1 className='text-center text-xl font-semibold lg:text-5xl font-bold mt-5  text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600'>Garages Managements</h1>
            <h1  className=' text-xl text-white  font-[1rem] p-4 font-semibold lg:text-2xl font-bold mt-5'>Total Sign In Garages : {garages.length}</h1>


            <div className="overflow-x-auto">
  <table className="table w-10/12 mx-auto my-10">
   
    <thead >
      <tr className='bg-gradient-to-r from-gray-700 via-gray-900 to-black text-white'>
        <th></th>
        <th className='text-center text-purple-600 font-bold'>Garage Name</th>
        <th className='text-center text-purple-600 font-bold'>Phone</th>
        <th className='text-center text-purple-600 font-bold'>Garage Photo</th>
        <th></th>
      </tr>
    </thead>
    <tbody>

        {garages.map((gar,index)=> <tr key={gar._id}>
        <th className='text-center font-bold'>{index+1}</th>
        <td className='text-center font-bold'>{gar.providername}</td>
        <td className='text-center font-bold'>{gar.phone}</td>
        <td className='text-center font-bold'>
          <div className="flex items-center space-x-3">
            <div className="avatar">
              <div className="mask mask-squircle w-14 h-14 ">
                <img src={gar.img} alt="Avatar Tailwind CSS Component" />
              </div>
            </div>
            </div>
            </td>
            <th ><button onClick={()=>handleDeleteGarage(gar._id)} className="btn btn-circle btn-sm btn-outline ">
  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" /></svg>
</button></th>
      </tr>)}
    </tbody>
  </table>
</div>
        </div>
    );
};

export default AllGarages;