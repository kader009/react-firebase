import { useEffect, useState } from 'react';
import SingleProductDashboard from '../layout/dashboard/SingleProductDashboard';

const AllProducts = () => {
  const [products, SetProducts] = useState([]); 

  useEffect(() => {
    fetch(`http://localhost:5000/shoes`)
      .then((res) => res.json())
      .then((data) => SetProducts(data));
  }, []);

  const handleupdate = (id) => {
    SetProducts(products.filter((product) => product._id !== id));
  };

  return (
    <div>
      <h1 className="flex justify-center items-center text-2xl mt-8 text-slate-900 font-bold capitalize">
        All Products list
      </h1>

      <div className="my-12 flex justify-center flex-wrap items-center gap-3">
        {products.map((shoe) => (
          <SingleProductDashboard
            key={shoe._id}
            shoe={shoe}
            handleupdate={handleupdate}
          />
        ))}
      </div>
    </div>
  );
};

export default AllProducts;
