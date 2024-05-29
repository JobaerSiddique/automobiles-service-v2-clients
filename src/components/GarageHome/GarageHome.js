


import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../Contexts/AuthContext/AuthProvider';
import GarageHomeInfo from './GarageHomeInfo';

const GarageHome = () => {
   const {user} =useContext(AuthContext)
   console.log('user',user.email);
   const [garages,setGarages]=useState([])

   useEffect(()=>{
    fetch(`https://taqwaa-services-v2-servers.vercel.app/garages?email=${user?.email}`)
    .then(res=>res.json())
    .then(data=>{
        console.log('garage data',data);
        setGarages(data)
    })
   },[user?.email])
    
   
    return (
        <div>
           {
            garages.map(garage=><GarageHomeInfo
            key={garage._id}
            garage={garage}
            >
            </GarageHomeInfo>)
           }
           
        </div>
    );
};

export default GarageHome;