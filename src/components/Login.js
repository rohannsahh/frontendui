import React, { useState } from 'react';
import background from "../assets/loginbackground.webp"
import {useNavigate} from "react-router-dom"
import showPasswordIcon from '../assets/show-password.png';
import hidePasswordIcon from '../assets/hide.png';

const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState('');

  const toggleShowPassword = () => {
    setShowPassword(!showPassword);
  };
//  const handleClick=()=>{
//   navigate('/dashboard')
//  }
const handleLogin = async (event) => {
  event.preventDefault();
  setError('');

  try {
    const response = await fetch('http://localhost:5000/api/users/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ email, password }),
    });

    if (!response.ok) {
      throw new Error('Login failed');
    }

    const data = await response.json();
    const token = data.token;

    // Store the token in localStorage
    localStorage.setItem('accessToken', token);

    // Redirect to the dashboard
    navigate('/dashboard');
  } catch (error) {
    setError('Invalid email or password');
  }
};


  return (
    <div className="flex flex-col items-center justify-center min-h-screen  relative" style={{background: "linear-gradient(rgba(0, 0, 128, 1), rgba(0, 0, 61, 1))"
    }}>
      <div
        className="absolute inset-0 bg-cover bg-center opacity-50"
        style={{ backgroundImage: `url(${background})`, opacity:0.08 }}      ></div>
      <div className="relative  text-center ">
        <h2 className="text-2xl font-bold text-white mb-6">SchengenEase</h2>
        <h3 className="text-3xl font-semibold text-white mb-11">Login</h3>
      </div>
      <div className="relative z-10 bg-white p-5 rounded-xl shadow-lg max-w-md w-full ">
        <div className='m-7'>
        <div className="flex justify-center mb-3">
          <button className="flex items-center justify-center bg-blue-100 text-blue-700 p-2 font-semibold rounded-md mx-2 w-1/2">
            <img src={require("../assets/google.png")} alt="Google" className="w-6 h-6 mr-2" />
            Google
          </button>
         
        </div>
        <p className="text-center text-gray-600 mb-1">Or</p>
        <form onSubmit={handleLogin}>
          <div className="mb-4">
            <label className="block text-black mb-2" htmlFor="email">Email</label>
            <input className="w-full p-2 border border-gray-300 rounded-md" type="email" id="email" 
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Email" />
          </div>
          
          <div className="mb-4">
      <label className="block text-black mb-2" htmlFor="password">Password</label>
      <div className="relative">
        <input
          type={showPassword ? 'text' : 'password'}
          id="password"
          className="w-full p-3 border rounded-lg focus:outline-none focus:border-blue-500"
          placeholder="Enter your password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        /> <button className="text-blue-800 flex justify-end mx-2  mb-3">Forgot?</button>

          <button
        type="button"
        className="absolute right-3 top-3"
        onClick={toggleShowPassword}
      >
        {showPassword ? (
          <img src={showPasswordIcon} alt="Show Password" className="h-7 w-7" />
        ) : (
          <img src={hidePasswordIcon} alt="Hide Password" className="h-6 w-6" />
        )}
      </button>
      </div>
    </div>
          
          <button className="w-full bg-blue-700 text-white p-2 rounded-md font-semibold" type="submit" >Login now</button>
        </form>
        {error && <p className="text-red-500 mt-4">{error}</p>}
        <div className="text-center mt-6">
          <p className="text-black">Don't Have An Account? <a href="/signup" className="text-blue-900">Sign Up</a></p>
        </div>
        </div>
       
      </div>
    </div>
  );
};

export default Login;
