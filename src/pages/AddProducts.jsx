import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const AddProducts = () => {

  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = e.target;
    const id = form.id.value;
    const brand = form.brand.value;
    const model = form.model.value;
    const color = form.color.value;
    const size = Number(form.size.value);
    const price = Number(form.price.value);

    if (isNaN(size) || isNaN(price)) {
      console.error('Invalid input: Size and price must be numbers.');
      return;
    }

    const inputData = { id, brand, model, color, size, price };
    console.log(inputData);

    const userConfirmed = window.confirm('Do you want To Add Products?');
    if (!userConfirmed) {
      return;
    }

    try {
      const response = await fetch(`http://localhost:3000/shoes`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(inputData),
      });

      if (response.ok) {
        const data = await response.json();
        console.log(data);
        toast.success('Product added successfully!');
        form.reset();
      } else {
        console.error('Failed to add product');
        toast.error('Failed to add product.');
      }
    } catch (error) {
      console.error('An error occurred:', error);
      toast.error('An error occurred while adding the product.');
    }
  };

  return (
    <div>
      <h1 className="text-4xl text-center font-bold capitalize">
        add products
      </h1>

      <div className="my-16">
        <form onSubmit={handleSubmit} className="space-y-2">
          <div>
            <input
              className="bg-gray-100 border border-black rounded-lg p-4 w-full"
              type="text"
              name="brand"
              placeholder="Brand"
              required
            />
          </div>
          <div>
            <input
              className="bg-gray-100 border border-black rounded-lg p-4 w-full"
              type="text"
              name="model"
              placeholder="Model"
              required
            />
          </div>
          <div>
            <input
              className="bg-gray-100 border border-black rounded-lg p-4 w-full"
              type="text"
              name="color"
              placeholder="Color"
              required
            />
          </div>
          <div>
            <input
              className="bg-gray-100 border border-black rounded-lg p-4 w-full"
              type="number"
              name="size"
              placeholder="Size"
              required
            />
          </div>
          <div>
            <input
              className="bg-gray-100 border border-black rounded-lg p-4 w-full"
              type="number"
              name="price"
              placeholder="Price"
              required
            />
          </div>
          <div>
            <input
              className="bg-gray-100 border border-black rounded-lg p-4 w-full"
              type="text"
              name="id"
              placeholder="ID"
              required
            />
          </div>
          <div>
            <input className="w-full btn" type="submit" value="Add Products" />
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddProducts;
