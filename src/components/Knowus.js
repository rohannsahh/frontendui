import React from 'react';
import Header from './Header';
import Footer from './Footer';
import person1 from '../assets/schegenvisa.png';
import person2 from '../assets/canadavisa.png';
import facebook from '../assets/facebook.png';
import google from '../assets/google.png';
import twitter from '../assets/google.png';
import linkedin from '../assets/linkedin .png';
import youtube from '../assets/youtube.png';

const Knowus = () => {
  return (
    <div>
      <Header />
      <div className="container p-8 my-8 mx-auto flex flex-col items-center space-y-8 md:space-y-2 md:flex-row md:space-x-8 justify-center">
        <div className="text-center md:text-left md:flex-shrink-0">
          <div className="text-5xl flex flex-col p-5 m-2 font-semibold text-[#000080]">
            <span className="my-3">Meet</span>
            <span className="my-3">the</span>
            <span className="my-3">Team</span>
          </div>
        </div>
        <div className="flex flex-col items-center md:flex-row md:space-x-4">
          <div className="flex flex-col bg-white px-4 pt-4 pb-4 mx-2 rounded-lg shadow-md">
            <div className="m-2 p-2">
              <img src={person1} alt="image1" className="w-64 h-64 rounded-md shadow-md" />
            </div>
            <h2 className="text-xl mx-2 px-2 my-1 py-1 font-semibold text-center">Person 1</h2>
            <p className="text-lg mx-2 px-2 py-1 my-1 text-center">Description</p>
            <div className="flex bg-blue-700 rounded-full p-2 m-2 mx-auto mt-2">
              <a href="#test" className="mx-2">
                <img src={facebook} alt="Facebook" className="w-8 h-8" />
              </a>
              <a href="#test" className="mx-2">
                <img src={twitter} alt="Twitter" className="w-8 h-8" />
              </a>
              <a href="#test" className="mx-2">
                <img src={youtube} alt="YouTube" className="w-8 h-8" />
              </a>
              <a href="#test" className="mx-2">
                <img src={linkedin} alt="LinkedIn" className="w-8 h-8" />
              </a>
            </div>
          </div>
          <div className="flex flex-col bg-white px-4 pt-4 pb-4 mx-2 rounded-lg shadow-md">
            <div className="m-2 p-2">
              <img src={person2} alt="image2" className="w-64 h-64 rounded-md shadow-md" />
            </div>
            <h2 className="text-xl mx-2 px-2 my-1 py-1 font-semibold text-center">Person 2</h2>
            <p className="text-lg mx-2 px-2 py-1 my-1 text-center">Description</p>
            <div className="flex bg-blue-700 rounded-full p-2 m-2 mx-auto mt-2">
              <a href="#test" className="mx-2">
                <img src={facebook} alt="Facebook" className="w-8 h-8" />
              </a>
              <a href="#test" className="mx-2">
                <img src={twitter} alt="Twitter" className="w-8 h-8" />
              </a>
              <a href="#test" className="mx-2">
                <img src={youtube} alt="YouTube" className="w-8 h-8" />
              </a>
              <a href="#test" className="mx-2">
                <img src={linkedin} alt="LinkedIn" className="w-8 h-8" />
              </a>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Knowus;
