import './assets/css/core.css'
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { GoogleOAuthProvider } from '@react-oauth/google'; // Import GoogleOAuthProvider

// Replace 'YOUR_GOOGLE_CLIENT_ID' with your actual Google OAuth Client ID
const clientId = 'YOUR_GOOGLE_CLIENT_ID';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <GoogleOAuthProvider clientId={clientId}>  {/* Wrap your app in GoogleOAuthProvider */}
    <App />
  </GoogleOAuthProvider>
);
