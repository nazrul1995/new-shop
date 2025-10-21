import { createBrowserRouter, Outlet } from 'react-router';
import HomeLayouts from '../components/Layouts/HomeLayouts';
import Home from '../pages/Home/Home';
import Register from '../pages/Register/Register';
import Login from '../pages/Login/Login';

const router = createBrowserRouter([
  {
    path: "/",
    Component: HomeLayouts,
    children: [
      {
        index: true,
        Component: Home,
      },
      {
        path: "/register",
        Component: Register,
      },
      {
        path: "/login",
        Component:Login,
      },
    ]
  },
  {
    path: "/*",
    element: <h2>Eroror</h2>
  },
]);
export default router;

