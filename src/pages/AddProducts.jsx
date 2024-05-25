const AddProducts = () => {
  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = e.target;
    let id = form.id.value;
    const brand = form.brand.value;
    const model = form.model.value;
    const color = form.color.value;
    let size = form.size.value;
    let price = form.price.value;

    // id = Number(id);
    size = Number(size);
    price = Number(price);

    // Check for valid conversions
    if (isNaN(id) || isNaN(size) || isNaN(price)) {
        console.error("Invalid input: ID, size, and price must be numbers.");
        return;
    }

    const inputData = { id, brand, model, color, size, price };
    console.log(inputData);

    await fetch(`http://localhost:3000/shoes`, {
      method: 'POST',
      headers: {
        'Content-type': 'application/json',
      },
      body: JSON.stringify(inputData),
    })
      .then((res) => res.json())
      .then((data) => console.log(data));
      form.reset()
  };

  return (
    <div>
      <h1 className="text-5xl text-center font-bold capitalize">
        add products page
      </h1>

      <div className="my-16">
        <form onSubmit={handleSubmit} className="space-y-2">
          <div>
            <input
              className="bg-gray-100 border border-black rounded-lg p-4 w-full"
              type="text"
              name="brand"
              placeholder="Brand"
            />
          </div>
          <div>
            <input
              className="bg-gray-100 border border-black rounded-lg p-4 w-full"
              type="text"
              name="model"
              placeholder="Model"
            />
          </div>
          <div>
            <input
              className="bg-gray-100 border border-black rounded-lg p-4 w-full"
              type="text"
              name="color"
              placeholder="Color"
            />
          </div>
          <div>
            <input
              className="bg-gray-100 border border-black rounded-lg p-4 w-full"
              type="number"
              name="size"
              placeholder="Size"
            />
          </div>
          <div>
            <input
              className="bg-gray-100 border border-black rounded-lg p-4 w-full"
              type="number"
              name="price"
              placeholder="Price"
            />
          </div>
          <div>
            <input
              className="bg-gray-100 border border-black rounded-lg p-4 w-full"
              type="text"
              name="id"
              placeholder="ID"
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
