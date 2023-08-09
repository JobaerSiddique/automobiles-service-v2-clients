import React from 'react';
import { useParams } from 'react-router-dom';

const PaymentSuccess = () => {
    const {transId}=useParams()
    console.log(transId);
    return (
        <div>
            <h1 className='text-white'>Payment Successfully done by id:{transId}</h1>
        </div>
    );
};

export default PaymentSuccess;