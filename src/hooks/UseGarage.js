import { useEffect, useState } from "react"


const useGarage = (email)=>{
    const [garage,setGarage]=useState(false)
    const [garageLoading,setGarageLoading]=useState(true)
    useEffect(()=>{
        if(email){
            fetch(`https://taqwaa-services-v2-servers.vercel.app/user/admin/garage/${email}`)
        .then(res=>res.json())
        .then(data=>{
            console.log('garage',data.isGarage);
            setGarage(data.isGarage)
            setGarageLoading(false)
        })
        }
    },[email])
    return [garage,garageLoading]
}

export default useGarage;