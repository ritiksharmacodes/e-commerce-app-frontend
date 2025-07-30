import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { GoogleOAuthProvider } from '@react-oauth/google';
import './index.css'
import App from './App.jsx'
import environmentVars from './conf.js';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <GoogleOAuthProvider clientId={environmentVars.google_oauth_2_client_id}>
      <App />
    </GoogleOAuthProvider>
  </StrictMode>,
)
