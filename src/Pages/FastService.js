import React from 'react';
import fast from '../images/fast.png'
const FastService = () => {
    return (
        <div className='mt-10 lg:mt-20  '  >
            <div className="hero  bg-[conic-gradient(at_top,_var(--tw-gradient-stops))] from-gray-900 via-gray-100 to-gray-900 rounded-3xl">
  <div className="hero-content flex-col lg:flex-row justify-center">
    <img src={fast} className=" rounded-lg shadow-2xl p-5"  />
    <div>
      <div className='ml-5' >
      <h1 className="text-5xl font-bold ">FAST SERVICE PROCESS</h1>
      <p className='mt-5 font-semibold'>Aptent euismod ultricies interdum vivamus scelerisque lito <br /> lacus lacus malesuada tempus tincidunt ante.</p>
    <div >
    <ul className="steps steps-vertical mt-10">
  <li className="step step-primary "><h3 className='font-semibold'>GET A QUOTE</h3> <br /><span>Tell us what your car needs or ask for a diagnostic.</span></li>
  <li className="step step-primary mt-5"><h3 className='font-semibold'>GET A QUOTE</h3> <br /><span>Tell us what your car needs or ask for a diagnostic.</span></li>
  <li className="step step-primary mt-5"><h3 className='font-semibold'>GET A QUOTE</h3> <br /><span>Tell us what your car needs or ask for a diagnostic.</span></li>
  
</ul>
    </div>
      
      </div>
      <button className="btn btn-primary mt-8">Get Started</button>
    </div>
  </div>
</div>
        </div>
    );
};

export default FastService;