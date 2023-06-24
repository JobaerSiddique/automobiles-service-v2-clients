import React from 'react';
import loading from '../images/loading.png'
const Loading = () => {
    return (
        <div>
            <div className='flex items-center justify-center h-screen'>
               <div className='w-40 h-40 rounded-full animate-pulse'> <img  src={loading} alt="" /></div>
            </div>
        </div>
    );
};

export default Loading;