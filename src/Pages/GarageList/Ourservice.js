import React from 'react';

const Ourservice = ({services}) => {
    return (
        <div className='mt-40'>
            <h1 className='font-bold text-xl lg:text-5xl text-center'>Our Services</h1>
            <div className='grid justify-items-center grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-20 mt-10 bg-base-300 p-5'>
                {services.map(ser=><div data-aos="zoom-out-left" data-aos-duration="3000" ser={ser} className="card card-compact w-96 bg-base-100 shadow-xl">
  <figure><img width="120px" src={ser.img} alt="Shoes" /></figure>
  <div className="card-body">
    <h2 className="text-center font-bold text-xl">{ser.name}</h2>
    
  </div>
</div>)}
            </div>
        </div>
    );
};

export default Ourservice;