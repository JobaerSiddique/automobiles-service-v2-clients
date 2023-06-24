import React from 'react';
import footer from '../images/loading.png'
const Footer = () => {
    return (
       <div className='bg-gradient-to-r from-blue-700 via-blue-800 to-gray-900'>  
        <footer className="footer grid justify-items-center  p-10 text-base-content mt-10  text-white ">
  <div className='grid justify-items-center'>
    <img src={footer} width="120px" alt="" />
    <p className='text-center'>Taqwaa Service Provider<br/>Providing reliable tech since 1992</p>
  </div> 
  <div>
    <span className="footer-title">Services</span> 
    <a className="link link-hover">Branding</a> 
    <a className="link link-hover">Design</a> 
    <a className="link link-hover">Marketing</a> 
    <a className="link link-hover">Advertisement</a>
  </div> 
  <div>
    <span className="footer-title">Company</span> 
    <a className="link link-hover">About us</a> 
    <a className="link link-hover">Contact</a> 
    <a className="link link-hover">Jobs</a> 
    <a className="link link-hover">Press kit</a>
  </div> 
  <div>
    <span className="footer-title">Legal</span> 
    <a className="link link-hover">Terms of use</a> 
    <a className="link link-hover">Privacy policy</a> 
    <a className="link link-hover">Cookie policy</a>
  </div>
  
</footer>
<h1 className='text-center font-bold overflow-auto text-transparent bg-clip-text bg-[conic-gradient(at_right,_var(--tw-gradient-stops))] from-orange-300 via-green-500 to-lime-100 p-2'>Copyrights &copy; 2023 All Rights Reserved Munshi Jobaer Siddique & Md. Khorshed Alam</h1>
       </div>
    );
};

export default Footer;