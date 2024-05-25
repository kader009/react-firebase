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
        <p>{price}</p>
        <p>{color}</p>
        <p>{size}</p>
        <div className="card-actions justify-end">
          <button className="btn btn-secondary">
            <Link to={`/products/${id}`}>See More</Link>
          </button>
          <button className="btn btn-success">
            <Link to={`/products/${id}`}>Edit</Link>
          </button>
          <button onClick={handleDelete} className="btn bg-red-700 text-white">
            Delete
          </button>
        </div>
      </div>
    </div>
  );
};

// SingleProductDashboard.propTypes = {
//   shoe: PropTypes.shape({
//     id: PropTypes.number.isRequired,
//     brand: PropTypes.string.isRequired,
//     model: PropTypes.string.isRequired,
//     color: PropTypes.string.isRequired,
//     size: PropTypes.number.isRequired,
//     price: PropTypes.number.isRequired,
//   }).isRequired,
// };

export default SingleProductDashboard;
