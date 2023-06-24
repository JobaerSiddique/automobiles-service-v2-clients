import React from 'react';

const ExpertList = ({experts}) => {
    return (
        <div>
            <h1 className='mt-20 font-bold text-xl lg:text-5xl text-center text-white'>Our Experts</h1>
            <div className='grid justify-items-center grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-20 mt-11 px-5'>
            {experts.map(ex=><div ex={ex} className="card card-compact w-96 bg-base-100 shadow-xl">
  <figure><img src={ex.img} alt="Shoes" /></figure>
  <div className="card-body">
    <h2 className="text-center font-semibold text-xl">{ex.name}</h2>
   
   
  </div>
</div>)}
        </div>
        </div>
    );
};

export default ExpertList;