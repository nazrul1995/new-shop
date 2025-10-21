import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import AppRoutes from './routes/AppRoutes.jsx';
import router from './routes/AppRoutes.jsx';
import { RouterProvider } from 'react-router';
import AuthProvider from './components/Provider/AuthProvider.jsx';


createRoot(document.getElementById('root')).render(
  <StrictMode>
        <AuthProvider>
          <RouterProvider router={router} />,
        </AuthProvider>
  </StrictMode>,
)
