import React, { useState } from 'react';
import background from "../assets/loginbackground.webp"
import showPasswordIcon from '../assets/show-password.png';
import hidePasswordIcon from '../assets/hide.png';
import { jwtDecode } from 'jwt-decode';
import { GoogleLogin } from '@react-oauth/google';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const SignUp= () => {
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const toggleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const handleGoogleSignUp = async (credentialResponse) => {
    const decoded = jwtDecode(credentialResponse.credential);
    console.log('decode value'+ decoded)
    const { name, email } = decoded;

    try {
      // Call your backend API to create a new user
      const signUpResponse = await axios.post('http://localhost:5000/api/users/signup', { name, email, googleAuth: true });
      
      if (signUpResponse.data.success) {
        // If signup is successful, automatically log the user in
        const loginResponse = await axios.post('http://localhost:5000/api/users/login', { email, googleAuth: true });
        
        if (loginResponse.data.success) {
          // Store the token in localStorage or a secure storage method
          localStorage.setItem('token', loginResponse.data.token);
          
          // Redirect to dashboard
          navigate('/dashboard');
        }
      }
    } catch (error) {
      console.error('Error during Google Sign Up:', error);
      // Handle error (e.g., show error message to user)
    }
  };

  const handleManualSignUp = async (e) => {
    e.preventDefault();
    try {
      // Call your backend API to create a new user
      const signUpResponse = await axios.post('http://localhost:5000/api/users/signup', { name, email, password });
      
      if (signUpResponse.data.success) {
        // If signup is successful, automatically log the user in
        const loginResponse = await axios.post('http://localhost:5000/api/users/login', { email, password });
        
        if (loginResponse.data.success) {
          // Store the token in localStorage or a secure storage method
          localStorage.setItem('token', loginResponse.data.token);
          
          // Redirect to dashboard
          navigate('/dashboard');
        }
      }
      
    } catch (error) {
      console.error('Error during manual Sign Up:', error);
      // Handle error (e.g., show error message to user)
    }
  };


  return (
    <div className="flex flex-col items-center justify-center min-h-screen " style={{background: "linear-gradient(rgba(0, 0, 128, 1), rgba(0, 0, 61, 1))", 
    }}>
         <div
        className="absolute inset-0 bg-cover bg-center opacity-50"
        style={{ backgroundImage: `url(${background})`, opacity:0.08 }}      ></div>
      <h2 className="text-2xl font-bold text-center text-white mb-5">SchengenEase</h2>
      <h3 className="text-3xl font-semibold text-center text-white mb-9">Sign up</h3>
      <div className="relative z-10 bg-white p-5 rounded-xl shadow-lg max-w-md w-full  ">
        <div className='m-4'>
        <div className="flex justify-center mb-3">
          {/* <button className="flex items-center justify-center bg-blue-100 text-blue-700 p-2 font-semibold rounded-md mx-2 w-1/2">
            <img src={require("../assets/google.png")} alt="Google" className="w-6 h-6 mr-2" />
            Google
          </button> */}
<GoogleLogin
  onSuccess={handleGoogleSignUp}
  onError={() => {
    console.log('Google Login Failed');
  }}
  uxMode="redirect"
  redirectUri="http://localhost:3000/signup"
/>
        </div>
        <p className="text-center text-gray-600 mb-1">Or</p>
        <form onSubmit={handleManualSignUp}>
          <div className="mb-4">
            <label className="block text-black mb-2" htmlFor="name">Name</label>
            <input className="w-full p-2 border border-gray-300 rounded-md" type="text" id="name"  value={name}
                onChange={(e) => setName(e.target.value)} placeholder="Name" />
          </div>
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
          className="w-full p-3 border rounded-lg focus:outline-none mb-2 focus:border-blue-500"
          placeholder="Enter your password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        /> 

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
          <button className="w-full bg-blue-700 text-white p-2 rounded-md font-semibold" type="submit">Create account</button>
        </form>
        <div className="text-center mt-6">
          <p className="text-black">Already Have An Account? <a href="/Login" className="text-blue-900">Login</a></p>
        </div>
        </div>
        
      </div>
    </div>
  );
};

export default SignUp;
