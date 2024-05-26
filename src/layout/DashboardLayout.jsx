import { useState } from 'react';
import { Link, Outlet } from 'react-router-dom';

const DashboardLayout = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <div className='min-h-screen flex flex-col md:flex-row'>
      <div className={`fixed inset-y-0 left-0 z-30 w-64 bg-gray-300 p-4 transform ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full'} md:translate-x-0 transition-transform duration-200 ease-in-out`}>
        <ul className='space-y-4 text-center'>
          <li className='border border-black p-4 text w-full rounded'>
            <Link to={''} onClick={() => setIsSidebarOpen(false)}>Dashboard</Link>
          </li>
          <li className='border border-black p-4 text w-full rounded'>
            <Link to={'dashboard/all-products'} onClick={() => setIsSidebarOpen(false)}>All Products</Link>
          </li>
          <li className='border border-black p-4 text w-full rounded'>
            <Link to={'dashboard/add-products'} onClick={() => setIsSidebarOpen(false)}>Add Products</Link>
          </li>
          <li className='border border-black p-4 text w-full rounded'>
            <Link to={'/'} onClick={() => setIsSidebarOpen(false)}>Home</Link>
          </li>
        </ul>
      </div>

      <div className='flex-1 p-4 md:ml-64'>
        <div className='md:hidden flex justify-end p-2'>
          <button onClick={toggleSidebar} className='text-gray-500 focus:outline-none'>
            <svg className='w-6 h-6' fill='none' stroke='currentColor' viewBox='0 0 24 24' xmlns='http://www.w3.org/2000/svg'>
              <path strokeLinecap='round' strokeLinejoin='round' strokeWidth='2' d={isSidebarOpen ? 'M6 18L18 6M6 6l12 12' : 'M4 6h16M4 12h16m-7 6h7'}></path>
            </svg>
          </button>
        </div>
        <Outlet />
      </div>
    </div>
  );
};

export default DashboardLayout;
