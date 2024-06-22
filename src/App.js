import {BrowserRouter as Router } from 'react-router-dom';
import AppRoutes from './routes/AppRoutes';
import { GoogleOAuthProvider } from '@react-oauth/google';
function App() {
  const clientId = process.env.REACT_APP_API_KEY;

  return (
    <GoogleOAuthProvider clientId={clientId}>
    <Router >
      <AppRoutes/>
    </Router>
    </GoogleOAuthProvider>
  );
}

export default App;
