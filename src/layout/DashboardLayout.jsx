import { Link, Outlet } from 'react-router-dom';

const DashboardLayout = () => {
  return (
    <div className='grid grid-cols-12'>
      <div className='col-span-2 bg-gray-300 min-h-screen p-12 '>
      <ul className='space-y-4 text-center'>
        <li className='border border-black p-4 text w-full rounded'><Link to={''}>Dashboard</Link></li>
        <li className='border border-black p-4 text w-full rounded'><Link to={'dashboard/all-products'}>All Products</Link></li>
        <li className='border border-black p-4 text w-full rounded'><Link to={'dashboard/add-products'}>Add Products</Link></li>
        <li className='border border-black p-4 text w-full rounded'><Link to={'/'}>Home</Link></li>
      </ul>
      </div>
      <div className='col-span-10 p-20'><Outlet/></div>
    </div>
  );
};

export default DashboardLayout;
