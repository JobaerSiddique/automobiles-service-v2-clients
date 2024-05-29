


import { useState } from 'react';
import { useEffect } from 'react';

const UseAdmin = (email) => {
   
    const [admin,setAdmin]=useState(false)
    const [adminLoading,setAdminLoading]=useState(true)
    useEffect(()=>{
        fetch(`https://taqwaa-services-v2-servers.vercel.app/user/admin/${email}`,)
        .then(res=>res.json())
        .then(data=>{
            setAdmin(data.isAdmin)
            setAdminLoading(false)
        })
    },[email])
    return [admin,adminLoading]
};

export default UseAdmin;