import React, { useEffect, useState } from 'react';
import GarageInfo from './GarageInfo';

const Garages = () => {
    const [garages,setGarages]=useState([])
   useEffect(()=>{
        fetch('http://localhost:5000/garages')
        .then(res=>res.json())
        .then(data=>{
            console.log(data)
            setGarages(data)
        })
   },[])
    return (
        <div>
            
            <div   className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-20 justify-items-center'>
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