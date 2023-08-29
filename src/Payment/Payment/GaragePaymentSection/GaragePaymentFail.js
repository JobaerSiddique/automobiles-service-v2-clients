import React from 'react';
import { useParams } from 'react-router-dom';

const GaragePaymentFail = () => {
    const {transId}=useParams()
    return (
        <div>
            <h1>{transId}</h1>
        </div>
    );
};

export default GaragePaymentFail;