/* eslint-disable react/prop-types */
// import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const SingleProductDashboard = ({ shoe, handleupdate }) => {
  const { id, brand, model, color, size, price } = shoe;

  const handleDelete = async () => {
    await fetch(`http://localhost:3000/shoes/${id}`, {
      method: 'DELETE',
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        handleupdate(id)
      });
  };

  return (
    <div className="card w-96 bg-base-100 shadow-xl">
      <figure>
        <img
          src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg"
          alt="Shoes"
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title">
          {brand} {model}
        </h2>
        <p>$ {price}</p>
        <p>{color}</p>
        <p>{size}</p>
        <div className="card-actions justify-end">
          <button className="btn btn-primary">
            <Link to={`/products/${id}`}>See Details</Link>
          </button>
          <button className="btn btn-success text-white">
            <Link to={`edit/${id}`}>Edit</Link>
          </button>
          <button onClick={handleDelete} className="btn bg-error text-white">
            Delete
          </button>
        </div>
      </div>
    </div>
  );
};



export default SingleProductDashboard;
