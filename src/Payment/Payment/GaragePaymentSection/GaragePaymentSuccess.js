import React from 'react';
import { useParams } from 'react-router-dom';

const GaragePaymentSuccess = () => {
   const {transId}=useParams()
   console.log(transId);
    return (
        <div>
            <h1>garage Sucees : {transId}</h1>
        </div>
    );
};

export default GaragePaymentSuccess;