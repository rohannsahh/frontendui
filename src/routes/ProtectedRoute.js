import React from 'react';
import { Navigate } from 'react-router-dom';
import {jwtDecode} from 'jwt-decode';

const isTokenExpired = (token) => {
  if (!token) {
    return true;
  }

  try {
    const decoded = jwtDecode(token);
    const currentTime = Date.now() / 1000; // Current time in seconds

    return decoded.exp < currentTime;
  } catch (error) {
    console.error('Error decoding token:', error);
    return true;
  }
};

const removeToken = () => {
  localStorage.removeItem('accessToken');
};

const ProtectedRoute = ({ children, requireAuth }) => {
  const token = localStorage.getItem('accessToken');

  if (requireAuth) {
    // If the route requires authentication and the token is missing or expired, redirect to login
    if (!token || isTokenExpired(token)) {
      removeToken();
      return <Navigate to="/login" />;
    }
  } else {
    // If the route does not require authentication (e.g., login/signup) and the token is valid, redirect to dashboard
    if (token && !isTokenExpired(token)) {
      return <Navigate to="/dashboard" />;
    }
  }

  // If the conditions above are not met, render the children components
  return children;
};

export default ProtectedRoute;
