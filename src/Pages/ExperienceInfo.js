import React from 'react';
import img from '../images/experienceinfo.png'
import { IoIosCheckmarkCircleOutline } from "react-icons/io";

const ExperienceInfo = () => {
    return (
        <div className="hero  bg-gradient-to-r from-slate-900 via-purple-900 to-slate-900 lg:mt-40  shadow-2xl mt-10 text-white">
  <div className="hero-content flex-col lg:flex-row-reverse ">
    <img data-aos="fade-right"   src={img} className=" rounded-xl shadow-2xl"  />
    <div   className='mt-5 p-5'>
      <h1  className="text-2xl lg:text-5xl font-bold">WE'RE MORE EXPERIENCE <br />AUTOMOBILE SERVICE</h1>
      <p  className="py-2 font-bold text-2xl lg:text-3xl mt-5">Our Experience </p>
      <div className='mt-5'>
      <p 
      className='flex'   ><IoIosCheckmarkCircleOutline className='mt-1 text-orange-600 font-bold'/><span className='ml-5 text-base font-semibold'>Our toll-free call centers are available</span></p>
      <p   className='flex mt-3' ><IoIosCheckmarkCircleOutline className='mt-1 text-orange-600 font-bold'/><span className='ml-5 text-base font-semibold'>Industry leading warranty</span></p>
      <p   className='flex mt-3' ><IoIosCheckmarkCircleOutline className='mt-1 text-orange-600 font-bold'/><span className='ml-5 text-base font-semibold'>Our toll-free call centers are available</span></p>
      </div>
      <button className="btn  mt-8 w-full bg-orange-600 border-none">Get Started</button>
    </div>
  </div>
</div>
// data-aos="fade-right"
// data-aos-offset="400"
// data-aos-easing="ease-in-sine"
// data-aos="fade-left"
//      data-aos-offset="300"
//      data-aos-easing="ease-in-sine"
//      data-aos="fade-up-right"
//      data-aos="fade-right"
//      data-aos-offset="300"
//      data-aos-easing="ease-in-sine"
//      data-aos="fade-right"
//      data-aos-offset="350"
//      data-aos-easing="ease-in-sine"
//      data-aos="fade-right"
//      data-aos-offset="400"
//      data-aos-easing="ease-in-sine"
    );
};

export default ExperienceInfo;