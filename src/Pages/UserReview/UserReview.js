import React, { useState } from 'react';
import { Navigation,Autoplay, Pagination, } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Rating } from '@smastrom/react-rating'
import '@smastrom/react-rating/style.css'
import './UserReview.css'
// Import Swiper styles
import 'swiper/css';

import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { useQuery } from '@tanstack/react-query';
const UserReview = () => {
    const{data:ratings=[],refetch}=useQuery({
        queryKey:['rating'],
        queryFn: async ()=>{
            const res = await fetch('https://taqwaa-services-v2-servers.vercel.app/rating')
            const data= await res.json()
            return data
        }
    })
    
    return (
        <>
        <div className='mx-auto text-center my-10 md:w-3/12 mt-20 '>
            <p className='text-orange-500 my-2'>... What Our Clients Say ...</p>
            <h1 className='uppercase text-slate-300 border-y-4 py-5 md:text-4xl'>Testimonials</h1>

            
        </div>
        <Swiper  spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper container rounded-3xl shadow-black">
        {
            ratings.map(rating=><SwiperSlide >
  <div className='flex flex-col items-center mx-24 my-16'>
  <Rating
  
  style={{ maxWidth: 180 }}
  value={rating.rating}
  readOnly
/>
<h1 className='py-8 text-xl font-bold'>{rating.customerName}</h1>
<h1 className='my-5'>Service Provider : {rating.providerName}</h1>
<p>{rating.descrip}</p>

  </div>
            </SwiperSlide>)
        }
        
      </Swiper>
     
        </>
    );
};

export default UserReview;