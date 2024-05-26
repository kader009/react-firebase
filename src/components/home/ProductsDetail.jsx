import { useLoaderData } from 'react-router-dom';

const ProductsDetail = () => {
  const shoe = useLoaderData();
  const { brand, model, price } = shoe;

  return (
    <div className="grid justify-center items-center gap-4 my-24">
      <div className="card w-96 bg-base-100 shadow-xl image-full">
        <figure>
          <img
            src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg"
            alt="Shoes"
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title">Name: {brand}</h2>
          <p>Model: {model}</p>
          <p>Price: {price}</p>
        </div>
      </div>
    </div>
  );
};

export default ProductsDetail;
