import React from 'react';
import { useParams } from 'react-router-dom';
import data from '../../payment success.json'
import Lottie from "lottie-react";
const PaymentSuccess = () => {
    const {transId}=useParams()
    console.log(transId);
    return (
        <div className='w-8/12 mx-auto'>
             <span className='w-[80%]'><Lottie animationData={data} loop={true} /></span>
            <h1 className=' text-center lg:text-4xl font-bold text-yellow-500'>Payment Successfully done by id: <span className=' bg-clip-text bg-transparent bg-gradient-to-r from-indigo-400 to-cyan-400'>{transId}</span></h1>
           
        </div>
    );
};

export default PaymentSuccess;