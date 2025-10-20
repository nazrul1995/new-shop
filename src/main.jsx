import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import AppRoutes from './routes/AppRoutes.jsx';
import router from './routes/AppRoutes.jsx';
import { RouterProvider } from 'react-router';


createRoot(document.getElementById('root')).render(
  <StrictMode>
        <RouterProvider router={router} />,
  </StrictMode>,
)
