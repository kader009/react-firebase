import { useLoaderData } from 'react-router-dom';
import { toast } from 'react-toastify';

const EditProducts = () => {
  const shoe = useLoaderData();
  const { id, brand, model, color, size, price } = shoe;

  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = e.target;
    let id = form.id.value;
    const brand = form.brand.value;
    const model = form.model.value;
    const color = form.color.value;
    let size = form.size.value;
    let price = form.price.value;

    size = Number(size);
    price = Number(price);

    if (isNaN(id) || isNaN(size) || isNaN(price)) {
      console.error('Invalid input: size and price must be numbers.');
      return;
    }

    const inputData = { id, brand, model, color, size, price };
    console.log(inputData);

    const userConfirmed = window.confirm('Do you want to Update?');
    if (!userConfirmed) {
      return;
    }

    try {
      const response = await fetch(`http://localhost:3000/shoes/${id}`, {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(inputData),
      });

      if (response.ok) {
        const data = await response.json();
        console.log(data);
        toast.success('Product updated successfully!');
        form.reset();
      } else {
        console.error('Failed to edit product');
        toast.error('Failed to edit product.');
      }
    } catch (error) {
      console.error('An error occurred:', error);
      toast.error('An error occurred while adding the product.');
    }
  };

  return (
    <div>
      <h1 className="text-4xl text-center font-bold capitalize">
        Edit products
      </h1>

      <div className="my-16">
        <form onSubmit={handleSubmit} className="space-y-2">
          <div>
            <input
              className="bg-gray-100 border border-black rounded-lg p-4 w-full"
              type="text"
              name="brand"
              placeholder="Brand"
              defaultValue={brand}
            />
          </div>
          <div>
            <input
              className="bg-gray-100 border border-black rounded-lg p-4 w-full"
              type="text"
              name="model"
              placeholder="Model"
              defaultValue={model}
            />
          </div>
          <div>
            <input
              className="bg-gray-100 border border-black rounded-lg p-4 w-full"
              type="text"
              name="color"
              placeholder="Color"
              defaultValue={color}
            />
          </div>
          <div>
            <input
              className="bg-gray-100 border border-black rounded-lg p-4 w-full"
              type="number"
              name="size"
              placeholder="Size"
              defaultValue={size}
            />
          </div>
          <div>
            <input
              className="bg-gray-100 border border-black rounded-lg p-4 w-full"
              type="number"
              name="price"
              placeholder="Price"
              defaultValue={price}
            />
          </div>
          <div>
            <input
              className="bg-gray-100 border border-black rounded-lg p-4 w-full"
              type="text"
              name="id"
              placeholder="ID"
              defaultValue={id}
              disabled
            />
          </div>
          <div>
            <input className="w-full btn" type="submit" value="Edit Products" />
          </div>
        </form>
      </div>
    </div>
  );
};

export default EditProducts;
