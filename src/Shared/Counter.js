import React, { useState } from 'react';
import CountUp from 'react-countup';
import ScrollTrigger from 'react-scroll-trigger';

const Counter = () => {
    const [countOn,setCountOn]=useState(false)
    return (
       <div  className='-mt-12 '   >
         <div data-aos="fade-up"
       data-aos-duration="2000" className="card w-[80%] h-auto bg-gradient-to-r from-indigo-500 to-blue-500 shadow-xl mx-auto grid gap-10 grid-cols-1 lg:grid-cols-3 p-5 ">
  <div>
      <ScrollTrigger onEnter={()=>setCountOn(true)} onExit={()=> setCountOn(false)}>
     <h1 className='text-black font-bold text-xl text-center lg:text-2xl'> {countOn &&  <CountUp start={0} end={100} duration={3} delay={1}></CountUp>}+</h1>
     <h1 className='text-black font-bold text-xl text-center lg:text-2xl'>Happy Clients</h1>
      </ScrollTrigger>
  </div>
  <div>
  <ScrollTrigger onEnter={()=>setCountOn(true)} onExit={()=> setCountOn(false)}>
     <h1 className='text-black font-bold text-xl text-center lg:text-2xl'> {countOn &&  <CountUp start={0} end={50} duration={3} delay={1}></CountUp>}+</h1>
     <h1 className='text-black font-bold text-xl text-center lg:text-2xl'>Happy Services</h1>
      </ScrollTrigger>
  </div>
  <div>
  <ScrollTrigger onEnter={()=>setCountOn(true)} onExit={()=> setCountOn(false)}>
     <h1 className='text-black font-bold text-xl text-center lg:text-2xl'> {countOn &&  <CountUp start={0} end={8} duration={3} delay={1}></CountUp>}+</h1>
     <h1 className='text-black font-bold text-xl text-center lg:text-2xl'>Years of Experience</h1>
      </ScrollTrigger>
  </div>
</div>
       </div>
    );
};

export default Counter;