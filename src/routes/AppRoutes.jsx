import { createBrowserRouter, Outlet } from 'react-router';
import HomeLayouts from '../components/Layouts/HomeLayouts';
import Home from '../pages/Home/Home';

const router = createBrowserRouter([
  {
    path: "/",
    Component: HomeLayouts,
    children:[
      {
        index: true,
        Component:Home,
      }
    ]
  },
  {
    path: "/register",
    element: <h2>Registration</h2>
  },
  {
    path: "/*",
    element: <h2>Eroror</h2>
  },
]);
export default router;

