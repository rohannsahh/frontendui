import {BrowserRouter as Router } from 'react-router-dom';
import AppRoutes from './routes/AppRoutes';
import { GoogleOAuthProvider } from '@react-oauth/google';
function App() {
  // const clientId = process.env.GOOGLE_CLIENT_ID;
  
  const clientId = "1005773874556-85vl84kh29ru4avjdf2tgjblr27a3aa1.apps.googleusercontent.com";

  if (!clientId) {
    console.error('GOOGLE_CLIENT_ID is not set in the environment variables');
    // You might want to render an error message or fallback UI here
    return <div>Error: Google Client ID is not configured</div>;
  }

  return (
    <GoogleOAuthProvider clientId={clientId}>
    <Router >
      <AppRoutes/>
    </Router>
    </GoogleOAuthProvider>
  );
}

export default App;
