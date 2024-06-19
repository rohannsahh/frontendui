import React from 'react';
import facebook from '../assets/facebook.png'
import linkedin from '../assets/linkedin .png'
import youtube from '../assets/youtube.png'
import twitter from '../assets/twitter .png'
import { Link } from 'react-router-dom';



const CallToAction = () => {
  return (
    <div className="flex flex-col md:flex-row items-center justify-between bg-[#1F3B4D] w-full  md:w-3/4 my-5 mx-auto rounded-lg lg:pt-0 lg:pb-0 lg:pr-0 lg:pl-4 p-4">
      <div className="flex-1 lg:m-4 lg:px-5 lg:py-3 text-white">
        <p className="text-lg sm:text-xl">Need help?</p>
        <p className="text-lg sm:text-xl">Love travelling, and not the planning? Let SchengenEase be your guide to hassle-free journeys. Let's have a quick chat!</p>
        <div className="text-lg sm:text-xl mt-4 container bg-gray-800 w-full sm:w-max rounded-lg p-3 my-2">
  <p className="m-1 text-center sm:text-left">Subscribe to NewsLetter</p>
  <div className="flex flex-col sm:flex-row items-center">
    <label htmlFor="email" className="font-semibold mx-2">Email:</label>
    <input type="email" id="email" name="email" placeholder="Enter your email" className="w-full sm:w-auto px-4 mx-2 my-2 sm:my-0 py-1 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-900" />
    <button className="bg-[#04043C] w-full sm:w-auto mx-2 sm:mx-3 rounded-lg p-2">Subscribe</button>
  </div>
</div>

      </div>
      
      <div className="bg-[#04043C] rounded-l-full rounded-r-lg flex items-center h-full w-full md:w-1/3">
        <button 
          onClick={() => {}} 
          className="flex items-center justify-center text-white text-xl font-semibold rounded-full px-6 py-5 lg:py-24 w-full"
        >
          Talk to our experts ➔
        </button>
      </div>
    </div>
  );
};

const Footer = () => {
  return (
    <footer className="bg-[#000080] text-white p-4">
      <CallToAction />
      <div className="flex flex-col md:flex-row text-lg justify-center md:justify-between mx-auto max-w-7xl">
        <div className="flex flex-col items-center md:items-start m-6 whitespace-nowrap text-center md:text-left">
          <h2 className="text-lg font-bold mb-3">PRODUCTS</h2>
          <p className="m-1">Visa</p>
          <p className="m-1">Insurance</p>
        </div>
        <div className="flex flex-col items-center md:items-start m-6 text-lg whitespace-nowrap text-center md:text-left">
          <h2 className="text-lg font-bold mb-3">USEFUL LINKS</h2>
          <p className="m-1">About us</p>
          <p className="m-1">Blogs</p>
          <p className="m-1">External policy</p>
          <Link to={'/offers'}><p className="m-1">Offers</p></Link>
        </div>
        <div className="flex flex-col items-center md:items-start m-6 text-lg whitespace-nowrap text-center md:text-left">
          <h2 className="text-lg font-bold mb-3">OTHERS</h2>
          <p className="m-1">Privacy</p>
          <p className="m-1">Terms</p>
          <p className="m-1">Cancellation</p>
          <p className="m-1">Cookies</p>
        </div>
        <div className="flex flex-col items-center md:items-end m-4 w-full text-lg md:w-2/3 text-center md:text-right">
          <button className="bg-white text-[#000080] font-bold py-2 px-4 rounded-lg mt-4">SchengenEase</button>
          <p className="mt-3">12083-9473-2093</p>
          <p className="mt-3">support@schengenease.com</p>
          <p className="mt-3">123 Wanderlust Avenue, Visa Valley, Europe</p>
          <p className="mt-3">©2024- SE Technology Private Limited</p>
        </div>
      </div>
      <div className="flex justify-center lg:justify-start max-w-7xl mx-auto mt-4">
        <a href="#test" className="mx-2">
          <img src={facebook} alt="Facebook" className="w-8 h-8"/>
        </a>
        <a href="#test" className="mx-2">
          <img src={twitter} alt="Twitter" className="w-8 h-8"/>
        </a>
        <a href="#test" className="mx-2">
          <img src={youtube} alt="YouTube" className="w-8 h-8"/>
        </a>
        <a href="#test" className="mx-2">
          <img src={linkedin} alt="LinkedIn" className="w-8 h-8"/>
        </a>
      </div>
    </footer>
  );
};

export default Footer;

