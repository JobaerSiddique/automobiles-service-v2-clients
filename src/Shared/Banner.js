import React from 'react';
import img from '../images/image1.png'
import './Banner.css'
const Banner = () => {
  return (
    <div className="carousel w-full rounded-3xl " >
  <div id="slide1" className="carousel-item relative w-full">
    <div className='w-full img-gradient'>
    <img src={img} className="w-full " />
    </div>
    <div className="absolute  transform -translate-y-1/2 lg:left-20  right-5 top-2/4 lg:1/4 p-4">
      <h2 className='text-orange-600 font-bold text-xl lg:text-5xl  ' >REPARING TRULY <br />PERSONALIZED</h2>
      <p className=' text-white text-justify lg:mt-11'data-aos="fade-left"
     data-aos-anchor="#example-anchor"
     data-aos-offset="500"
     data-aos-duration="3000">A car service is a health check with routine maintenance for your vehicle which assesses <br />  everything from your engine’s fluid levels to the general wear and tear of your car.</p>
     <button className='btn  btn-primary mt-5'>Get Started</button>
    </div>

  </div> 
  
 
  
</div>
  );
};

export default Banner;