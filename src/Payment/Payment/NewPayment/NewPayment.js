import { useQuery } from '@tanstack/react-query';
import React, { useEffect, useState } from 'react';
import GarageInfoBanner from './GarageInfoBanner/GarageInfoBanner';
import UsePayment from '../../../hooks/UsePayment';
import GarageInfoPayment from './GarageInfoPayment/GarageInfoPayment';

const NewPayment = () => {
  const [garageGive,setGarageGive]=useState([]) 
  // const {data:garageGive=[],refetch}=useQuery({
    //     queryKey:[],
    //     queryFn: async ()=>{
    //         const res= await fetch('http://localhost:5000/garageGive')
    //         const data= res.json()
           
           
    //         return data
    //     }
    // })
    
    useEffect(()=>{
      fetch('http://localhost:5000/garageGive')
      .then(res=>res.json())
      .then(data=>{
        setGarageGive(data)
      })
    },[])
    const {payments}=UsePayment()
    console.log(payments);
    const {totalGarage,services,users,payment}=payments
    return (
        <div>
            

            <div>
                {payment && payment?.map(pay=><GarageInfoBanner
                pay={pay}
                totalGarage={totalGarage}
                services={services}
                users={users}
                
                >

                </GarageInfoBanner>)}
            </div>
            <div className='my-20'>
                <h1 className='my-8 text-center font-bold lg:text-5xl text-xl text-white'>Garage Payment Info System</h1>
            <div className="overflow-x-auto">
  <table className="table md:w-10/12 lg:w-10/12 mx-auto">
    {/* head */}
    <thead>
      <tr align="center">
        <th></th>
        <th>Garage Name</th>
        <th>Total  Payment</th>
        <th>Get a garage</th>
        <th></th>
      </tr>
    </thead>
    <tbody>
      { garageGive.map((pays,index)=><GarageInfoPayment
      pays={pays}
      index={index}
      >

      </GarageInfoPayment>)}
    </tbody>
  </table>
</div>
            </div>
        </div>
    );
};

export default NewPayment;