import { createBrowserRouter } from 'react-router-dom';
import HomePage from '../pages/home';
import MainLayout from '../layout/MainLayout';
import Loginpage from '../pages/login';
import RegisterPage from '../pages/register';
import Dashboard from '../pages/Dashboard';
import DashboardLayout from '../layout/DashboardLayout';
import PrivateRoute from './private/PrivateRoute';
import ProductsDetail from '../components/home/ProductsDetail';
import AllProducts from '../pages/AllProducts';
import AddProducts from '../pages/AddProducts';
import EditProducts from '../pages/EditProducts';
import About from '../pages/About';
import EditProfile from '../pages/Prodfile/EditProfile';

const router = createBrowserRouter([
  {
    path: '/',
    element: <MainLayout />,
    children: [
      {
        path: '/',
        element: <HomePage />,
        loader: () => fetch('https://fire-base-backend.onrender.com/shoes'),
      },
      {
        path: '/products/:id',
        element: <ProductsDetail />,
        loader: ({ params }) =>
          fetch(`https://fire-base-backend.onrender.com/shoes/${params.id}`),
      },
      {
        path: '/about',
        element: <About />,
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
    path: 'dashboard',
    element: <DashboardLayout />,
    // errorElement: <ErrorPage />,
    children: [
      {
        path: '',
        element: (
          <PrivateRoute>
            <Dashboard />
          </PrivateRoute>
        ),
      },
      {
        path: 'profile/edit/:id',
        element: (
          <PrivateRoute>
            <EditProfile />
          </PrivateRoute>
        ),
        loader: ({ params }) =>
          fetch(`https://fire-base-backend.onrender.com/user/get/${params.id}`),
      },
      {
        path: 'dashboard/all-products',
        element: (
          <PrivateRoute>
            <AllProducts />
          </PrivateRoute>
        ),
      },
      {
        path: 'dashboard/add-products',
        element: (
          <PrivateRoute>
            <AddProducts />
          </PrivateRoute>
        ),
      },
      {
        path: 'dashboard/all-products/edit/:id',
        element: (
          <PrivateRoute>
            <EditProducts />
          </PrivateRoute>
        ),
        loader: ({ params }) =>
          fetch(`https://fire-base-backend.onrender.com/shoes/${params.id}`),
      },
    ],
  },
]);

export default router;
