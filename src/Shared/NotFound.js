import React from 'react';
import Lottie from "lottie-react";
import data from '../notfound.json'
const NotFound = () => {
    return (
        <div>
             <Lottie animationData={data} loop={true} />
        </div>
    );
};

export default NotFound;