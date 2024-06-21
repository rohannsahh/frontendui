import jwtDecode from 'jwt-decode';

// Function to check if the token is expired
export const isTokenExpired = (token) => {
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

// Function to remove the token
export const removeToken = () => {
  localStorage.removeItem('accessToken');
};
