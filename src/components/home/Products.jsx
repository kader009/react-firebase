import PropTypes from 'prop-types';
import SingleProduct from './SingleProduct';

const Products = ({ data }) => {
  return (
    <div>
      <h1 className="my-8 text-2xl font-bold text-center">Our Products</h1>

      <div className="flex gap-4 flex-wrap px-6 justify-center items-center ">
        {data?.slice(0, 3)?.map((shoe) => (
          <SingleProduct key={shoe._id} shoe={shoe} />
        ))}
      </div>
    </div>
  );
};

Products.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      brand: PropTypes.string.isRequired,
      model: PropTypes.string.isRequired,
      color: PropTypes.string.isRequired,
      size: PropTypes.number.isRequired,
      price: PropTypes.number.isRequired,
    })
  ).isRequired,
};

export default Products;
