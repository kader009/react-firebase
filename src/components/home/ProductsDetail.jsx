import { useLoaderData } from 'react-router-dom';

const ProductsDetail = () => {
  const shoe = useLoaderData();
  const { brand, model, price } = shoe;
  
  return (
    <div className='grid justify-center items-center gap-4 mb-8'>
      <h1 className='text-blue-400 text-4xl font-bold'>{model}</h1>
      <h3 className='text-3xl text-pink-400 font-semi-bold'>{brand}</h3>
      <p className='text-2xl text-cyan-900'>{price}</p>
    </div>
  );
};

export default ProductsDetail;
