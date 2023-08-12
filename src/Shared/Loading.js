import React from 'react';
import data from '../loading.json'
import Lottie from "lottie-react"
const Loading = () => {
    return (
        <div>
            <div className='flex items-center justify-center h-screen'>
            <Lottie animationData={data} loop={true} />
          
            </div>
            
        </div>
    );
};

export default Loading;