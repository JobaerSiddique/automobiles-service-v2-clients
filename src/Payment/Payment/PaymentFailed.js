import React from 'react';
import { useParams } from 'react-router-dom';

const PaymentFailed = () => {
    const {transId} = useParams()
    return (
        <div>
            <h1 className='text-center text-white text-2xl my-10 lg:text-5xl'>Payment Failed : {transId}</h1>
        </div>
    );
};

export default PaymentFailed;