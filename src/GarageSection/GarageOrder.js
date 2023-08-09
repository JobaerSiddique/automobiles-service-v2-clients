import { useQuery } from '@tanstack/react-query';
import React, { useEffect, useState } from 'react';
import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid} from 'recharts';
import {
  

    Tooltip,
    Legend
  } from "recharts";
  import { AiTwotoneDelete } from 'react-icons/ai'
import { Flip, toast } from 'react-toastify';
const GarageOrder = ({providerName}) => {
   console.log('providerName',providerName);
  //  const [orders,setOrder]=useState([])
  //  useEffect(()=>{
  //   fetch(`http://localhost:5000/garageOrder?providerName=${providerName}`)
  //   .then(res=>res.json())
  //   .then(data=>{
  //       setOrder(data);
  //       console.log(data);
  //   })
  //  },[providerName])

   const {data:orders=[],refetch}=useQuery({
    queryKey:['orders',providerName],
    queryFn: async ()=>{
      const res = await fetch(`http://localhost:5000/garageOrder?providerName=${providerName}`)
      const data = await res.json()
      return data
     
    }
   })

 
   
   

   
   const colors = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', 'red', 'pink'];
  
   const getPath = (x, y, width, height) => {
    return `M${x},${y + height}C${x + width / 3},${y + height} ${x + width / 2},${y + height / 3}
    ${x + width / 2}, ${y}
    C${x + width / 2},${y + height / 3} ${x + (2 * width) / 3},${y + height} ${x + width}, ${y + height}
    Z`;
  };

   const TriangleBar = (props) => {
    const { fill, x, y, width, height } = props;
  
    return <path d={getPath(x, y, width, height)} stroke="none" fill={fill} />;
  };
  const handleDeleteService = id =>{
    const process = window.confirm('Are You want to delete this service?')
    if(process){
      fetch(`http://localhost:5000/booked/${id}`,{
        method:'DELETE'
      })
      .then(res=>res.json())
      .then(data=>{
        console.log("delete",data)
        if(data.deletedCount>0){
          toast.success('Service booking cancel Successfully',{
            position: "top-center",
            autoClose: 1500,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            transition:Flip,
            theme: "dark",
          })
          refetch()
        }
      })
    }
  }

    return (
        <div>
           <h1 className='text-white font-semibold lg:text-5xl text-xl text-center mt-10'>Orders Info By Customers</h1>
           <div className='grid gap-5 lg:grid-cols-2 grid-cols-1 justify-items-center'>
            <div className='bg-white flex justify-center my-20 py-5'>
            <BarChart
      width={500}
      height={300}
      data={orders}
      margin={{
        top: 20,
        right: 30,
        left: 20,
        bottom: 5,
      }}
    >
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="date" />
      <YAxis />
      <Bar dataKey="price" fill="#8884d8" shape={<TriangleBar />} label={{ position: 'top' }}>
     
        {orders.map((entry, index) => (
          <Cell key={`cell-${index}`} fill={colors[index % 20]} />
        ))}
      </Bar>
    </BarChart>
            </div>
           <div className='bg-white my-20 '>
           <BarChart
      width={500}
      height={300}
      data={orders}
      margin={{
        top: 5,
        right: 30,
        left: 20,
        bottom: 5
      }}
    >
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="name" />
      <YAxis />
      <Tooltip />
      <Legend />
      <Bar dataKey="price" fill="#ffdf00" />
      <Bar dataKey="date" fill="#82ca9d" />
    </BarChart>
           </div>
           </div>
<div>
    <h1 className='text-white text-center my-10 text-2xl lg:text-7xl'>Order Table</h1>
    <div className="overflow-x-auto flex justify-center my-20">
  <table className="table table-compact w-5/6">
    <thead>
      <tr align="center">
        <th></th> 
        <th>Customer Name</th> 
        <th>Date</th> 
        <th>Slots</th> 
        <th>Service Name</th> 
        <th>Phone</th> 
        <th>Registration Number</th>
        <th>Price</th>
        <th>payment Status</th>
        <th>Service Cancel</th>
      </tr>
    </thead> 
    <tbody>
        {
            orders.map((odr,index)=> <tr align="center" className='py-5'>
                <th>{index+1}</th> 
                <td>{odr.CustomerName}</td> 
                <td>{odr.date}</td> 
                <td><small>{odr.slot}</small></td> 
                <td>{odr.serviceName}</td> 
                <td>{odr.Phone}</td> 
                <td>{odr.RegistrationNo}</td>
                <td>{odr.price}</td>
                {
                  odr?.paid? <td><p className='text-green-600 font-semibold'>Paid</p></td>:<td><p className='text-red-600 font-semibold'>Pending</p></td>
                }
                {
                  odr?.paid?<td><button disabled className="btn btn-square btn-outline btn-sm">
                  <AiTwotoneDelete className='w-full'/>
  </button></td>:<td ><button onClick={()=>handleDeleteService(odr._id)} className="btn btn-square btn-outline btn-sm">
                <AiTwotoneDelete className='w-full'/>
</button></td>
                }
              </tr>)
        }
     
      </tbody>
  </table>
</div>
</div>
        </div>
    );
};

export default GarageOrder;