import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';

import DescriptionPart from './DescriptionPart';
import ExpertList from './ExpertList';
import Ourservice from './Ourservice';
import Bookings from '../../Bookings/Bookings';


const Garage = () => {
    const data=useLoaderData()
    const {_id,img,providername,experts,location,phone,description,services
    }=data
    
    return (
       <div>
         <div className="hero " style={{ backgroundImage: `url(${img})` }}>
  <div className="hero-overlay bg-opacity-60"></div>
  <div className="hero-content text-center text-neutral-content">
    <div className="max-w-md">
   <h1 className="font-bold text-3xl w-full" > {providername}
 </h1>
      <p className="mb-5">{location}</p>
      <p className="mb-5">{phone}</p>
      <Link to='/garagesList' className="btn btn-primary">Back GarageList</Link>
    </div>
  </div>
</div>
<DescriptionPart
description={description}
img={img}
></DescriptionPart>
<ExpertList
experts={experts}

></ExpertList>
<Ourservice
services={services}

></Ourservice>
<Bookings serviceId={_id}>
  
</Bookings>
      
       </div>
    );
};

export default Garage;