import React from 'react';
import background from "../assets/loginbackground.webp"


const SignUp= () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen " style={{background: "linear-gradient(rgba(0, 0, 128, 1), rgba(0, 0, 61, 1))", 
    }}>
         <div
        className="absolute inset-0 bg-cover bg-center opacity-50"
        style={{ backgroundImage: `url(${background})`, opacity:0.08 }}      ></div>
      <h2 className="text-2xl font-bold text-center text-white mb-5">SchengenEase</h2>
      <h3 className="text-3xl font-semibold text-center text-white mb-10">Sign up</h3>
      <div className="bg-white p-8 rounded-lg shadow-lg max-w-md w-full  ">
        <div className="flex justify-center mb-6">
          <button className="flex items-center justify-center bg-blue-100 text-blue-700 p-2 rounded-md mx-2 w-1/2">
            <img src={require("../assets/google.png")} alt="Google" className="w-6 h-6 mr-3" />
            Google
          </button>
          
        </div>
        <p className="text-center text-gray-500 mb-3">Or</p>
        <form>
          <div className="mb-4">
            <label className="block text-gray-700 mb-2" htmlFor="name">Name</label>
            <input className="w-full p-2 border border-gray-300 rounded-md" type="text" id="name" placeholder="Name" />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 mb-2" htmlFor="email">Email</label>
            <input className="w-full p-2 border border-gray-300 rounded-md" type="email" id="email" placeholder="Email" />
          </div>
          <div className="mb-6">
            <label className="block text-gray-700 mb-2" htmlFor="password">Password</label>
            <input className="w-full p-2 border border-gray-300 rounded-md" type="password" id="password" placeholder="Enter your password" />
          </div>
          <button className="w-full bg-blue-700 text-white p-2 rounded-md font-semibold" type="submit">Create account</button>
        </form>
      </div>
    </div>
  );
};

export default SignUp;
