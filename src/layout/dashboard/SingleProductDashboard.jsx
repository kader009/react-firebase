/* eslint-disable react/prop-types */
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';

const SingleProductDashboard = ({ shoe, handleupdate }) => {
  const { _id, brand, model, color, size, price } = shoe;

  const handleDelete = async () => {
    const userConfirmed = window.confirm(
      'Are you sure you want to delete this product?'
    );
    if (!userConfirmed) {
      return;
    }

    try {
      const response = await fetch(`http://localhost:5000/shoes/${_id}`, {
        method: 'DELETE',
      });

      if (response.ok) {
        const data = await response.json();
        console.log(data);
        handleupdate(_id);
        toast.success('Product deleted successfully!');
      } else {
        console.error('Failed to delete product');
        toast.error('Failed to delete product.');
      }
    } catch (error) {
      console.error('An error occurred:', error);
      toast.error('An error occurred while deleting the product.');
    }
  };

  return (
    <>
      <div className="card w-96 bg-base-100 shadow-xl">
        {/* <ToastContainer /> */}
        <figure>
          <img
            className="rounded-md"
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
              <Link to={`/products/${_id}`}>See Details</Link>
            </button>
            <button className="btn btn-success text-white">
              <Link to={`edit/${_id}`}>Edit</Link>
            </button>
            <button onClick={handleDelete} className="btn bg-error text-white">
              Delete
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default SingleProductDashboard;
