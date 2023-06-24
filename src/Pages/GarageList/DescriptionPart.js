import React from 'react';

const DescriptionPart = ({description,img}) => {
    return (
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-20 mt-20 px-5'>
           
           <div className='text-white'>
            <h1 className='text-xl lg:text-5xl text-center font-bold'>About </h1>
                <p className='text-justify mt-5'>{description}</p>
           </div>
           <div>
                <img src={img} width="600px" height="400px" alt="" />
           </div>
        </div>
    );
};

export default DescriptionPart;