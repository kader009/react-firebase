import { createBrowserRouter } from 'react-router-dom';
import HomePage from '../pages/home';
import MainLayout from '../layout/MainLayout';
import Loginpage from '../pages/login';
import RegisterPage from '../pages/register';
import Dashboard from '../pages/Dashboard';
import DashboardLayout from '../layout/DashboardLayout';

const router = createBrowserRouter([
  {
    path: '/',
    element: <MainLayout />,
    children: [
      {
        path: '/',
        element: <HomePage />,
      },
      {
        path: '/',
        element: <HomePage />,
      },
      {
        path: '/login',
        element: <Loginpage />,
      },
      {
        path: '/register',
        element: <RegisterPage />,
      },
    ],
  },
  {
    path: "dashboard",
    element: <DashboardLayout />,
    // errorElement: <ErrorPage />,
    children: [
      {
        path: "",
        element: (
          // <PrivateRoute>
            <Dashboard />
          // </PrivateRoute>
        ),
      },
    ],
  },
]);

export default router;
