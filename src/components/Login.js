import React from 'react';
import background from "../assets/loginbackground.webp"
import {useNavigate} from "react-router-dom"

const Login = () => {
  const navigate = useNavigate();

 const handleClick=()=>{
  navigate('/visaSelection')
 }

  return (
    <div className="flex flex-col items-center justify-center min-h-screen  relative" style={{background: "linear-gradient(rgba(0, 0, 128, 1), rgba(0, 0, 61, 1))"
    }}>
      <div
        className="absolute inset-0 bg-cover bg-center opacity-50"
        style={{ backgroundImage: `url(${background})`, opacity:0.08 }}      ></div>
      <div className="relative z-10 text-center ">
        <h2 className="text-2xl font-bold text-white mb-5">SchengenEase</h2>
        <h3 className="text-3xl font-semibold text-white mb-10">Login</h3>
      </div>
      <div className="relative z-10 bg-white p-8 rounded-lg shadow-lg max-w-md w-full ">
        <div className="flex justify-center mb-6">
          <button className="flex items-center justify-center bg-blue-100 text-blue-700 p-2 rounded-md mx-2 w-1/2">
            <img src={require("../assets/google.png")} alt="Google" className="w-6 h-6 mr-2" />
            Google
          </button>
         
        </div>
        <p className="text-center text-gray-500 mb-6">Or</p>
        <form>
          <div className="mb-4">
            <label className="block text-gray-700 mb-2" htmlFor="email">Email</label>
            <input className="w-full p-2 border border-gray-300 rounded-md" type="email" id="email" placeholder="Email" />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 mb-2" htmlFor="password">Password</label>
            <input className="w-full p-2 border border-gray-300 rounded-md" type="password" id="password" placeholder="Enter your password" />
          </div>
          <div className="flex justify-between items-center mb-6">
            <button className="text-blue-700">Forgot?</button>
          </div>
          <button className="w-full bg-blue-700 text-white p-2 rounded-md font-semibold" type="submit" onClick={handleClick}>Login now</button>
        </form>
        <div className="text-center mt-6">
          <p className="text-gray-600">Don't Have An Account? <a href="/signup" className="text-blue-700">Sign Up</a></p>
        </div>
      </div>
    </div>
  );
};

export default Login;
