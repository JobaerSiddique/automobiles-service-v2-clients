import { useQuery } from '@tanstack/react-query';
import React, { useEffect } from 'react';

const UsePayment = () => {
    const {data:payments={},refetch}=useQuery({
        queryKey:[],
        queryFn: async ()=>{
            const res= await fetch('http://localhost:5000/allpayment')
            const data= res.json()
           
           console.log('payment',data);
            return data
        }
    })
    useEffect(()=>{
        refetch()
    },[])

   
    return {payments}

    
    
    
       
    
};

export default UsePayment;