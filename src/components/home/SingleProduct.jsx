import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const SingleProduct = ({ shoe }) => {
  const { id, brand, model, color, size, price } = shoe;
  console.log(shoe);
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
          <button className="btn btn-primary">
            <Link to={`/products/${id}`}>See More</Link>
          </button>
        </div>
      </div>
    </div>
  );
};

SingleProduct.propTypes = {
  shoe: PropTypes.shape({
    id: PropTypes.number.isRequired,
    brand: PropTypes.string.isRequired,
    model: PropTypes.string.isRequired,
    color: PropTypes.string.isRequired,
    size: PropTypes.number.isRequired,
    price: PropTypes.number.isRequired,
  }).isRequired,
};

export default SingleProduct;
