import React, { useEffect, useState } from 'react';
import GarageInfo from './GarageInfo';

const Garages = () => {
    const [garages,setGarages]=useState([])
   useEffect(()=>{
        fetch('https://taqwaa-services-v2-servers.vercel.app/garages')
        .then(res=>res.json())
        .then(data=>{
            console.log(data)
            setGarages(data)
        })
   },[])
    return (
        <div>
            
            <div  className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 justify-items-center bg-gradient-to-r from-slate-500 to-slate-800 p-8'>
                {
                    garages.map(garage=><GarageInfo
                        garage={garage}

                    ></GarageInfo>)
                }
            </div>
        </div>
    );
};

export default Garages;