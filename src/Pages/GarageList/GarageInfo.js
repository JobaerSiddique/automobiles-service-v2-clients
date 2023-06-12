import React from 'react';
import { Link } from 'react-router-dom';


const GarageInfo = ({garage}) => {
    const {providername,img,_id}=garage


   
    return (
        <div >
           <div className="card w-96 bg-base-100 shadow-xl">
  <figure className="px-10 pt-10">
    <img src={img} alt="Shoes" className="rounded-xl" />
  </figure>
  <div className="card-body items-center text-center">
    <h2 className="card-title">{providername}</h2>
    
  <Link to={`/garage/${_id}`} className='w-full btn btn-primary'>Go to {providername}</Link>

  </div>
</div>
        </div>
    );
};

export default GarageInfo;