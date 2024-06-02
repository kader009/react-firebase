// import React from 'react';
import { useLoaderData } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const EditProducts = () => {
  const shoe = useLoaderData();
  const { _id, brand, model, color, size, price } = shoe;
  
  const handleSubmit = async (e) => {
    const token = localStorage.getItem('token')
    e.preventDefault();
    const form = e.target;
    const brand = form.brand.value;
    const model = form.model.value;
    const color = form.color.value;
    const size = Number(form.size.value);
    const price = Number(form.price.value);

    if (isNaN(size) || isNaN(price)) {
      toast.error('Size and price must be valid numbers.');
      return;
    }

    const inputData = { _id, brand, model, color, size, price };
    console.log(inputData);

    const userConfirmed = window.confirm('Do you want to update this product?');
    if (!userConfirmed) {
      return;
    }

    try {
      const response = await fetch(`http:// localhost:5000/shoes/${shoe._id}`, {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json',
          authorization: `Bearer ${token}`
        },
        body: JSON.stringify(inputData),
      });

      if (response.ok) {
        const data = await response.json();
        console.log(data);
        toast.success('Product updated successfully!');
        form.reset();
      } else {
        toast.error('Failed to update product.');
      }
    } catch (error) {
      toast.error('An error occurred while updating the product.');
    }
  };

  return (
    <div className="max-w-3xl mx-auto p-6 bg-white shadow-md rounded-lg">
      <ToastContainer />
      <h1 className="text-4xl text-center font-bold capitalize mb-8">
        Edit Products
      </h1>

      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="flex flex-col">
          <label htmlFor="brand" className="mb-1 font-semibold">
            Brand
          </label>
          <input
            className="bg-gray-100 border border-gray-300 rounded-lg p-4 w-full focus:outline-none focus:border-blue-500"
            type="text"
            name="brand"
            placeholder="Brand"
            defaultValue={brand}
            required
          />
        </div>
        <div className="flex flex-col">
          <label htmlFor="model" className="mb-1 font-semibold">
            Model
          </label>
          <input
            className="bg-gray-100 border border-gray-300 rounded-lg p-4 w-full focus:outline-none focus:border-blue-500"
            type="text"
            name="model"
            placeholder="Model"
            defaultValue={model}
            required
          />
        </div>
        <div className="flex flex-col">
          <label htmlFor="color" className="mb-1 font-semibold">
            Color
          </label>
          <input
            className="bg-gray-100 border border-gray-300 rounded-lg p-4 w-full focus:outline-none focus:border-blue-500"
            type="text"
            name="color"
            placeholder="Color"
            defaultValue={color}
            required
          />
        </div>
        <div className="flex flex-col">
          <label htmlFor="size" className="mb-1 font-semibold">
            Size
          </label>
          <input
            className="bg-gray-100 border border-gray-300 rounded-lg p-4 w-full focus:outline-none focus:border-blue-500"
            type="number"
            name="size"
            placeholder="Size"
            defaultValue={size}
            required
          />
        </div>
        <div className="flex flex-col">
          <label htmlFor="price" className="mb-1 font-semibold">
            Price
          </label>
          <input
            className="bg-gray-100 border border-gray-300 rounded-lg p-4 w-full focus:outline-none focus:border-blue-500"
            type="number"
            name="price"
            placeholder="Price"
            defaultValue={price}
            required
          />
        </div>
        
        <div>
          <button
            type="submit"
            className="w-full bg-primary text-white p-4 rounded-lg hover:bg-blue-600 transition-colors duration-200"
          >
            Edit Products
          </button>
        </div>
      </form>
    </div>
  );
};

export default EditProducts;
