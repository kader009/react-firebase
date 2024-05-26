const Accordion = () => {
  return (
    <div className="my-20 px-8 w-3/4 mx-auto space-y-4">
      <h1 className="my-16 text-center font-bold text-3xl text-gray-800">
        Frequently Asked Questions!
      </h1>
      <div className="collapse collapse-arrow bg-gray-100 rounded-lg shadow-md">
        <input type="radio" name="accordion" id="accordion-1" defaultChecked />
        <label
          htmlFor="accordion-1"
          className="collapse-title text-xl font-medium cursor-pointer py-4 px-6"
        >
          How do I find the right shoe size?
        </label>
        <div className="collapse-content py-4 px-6">
          <p>
            Measure your feet and refer to our size chart. If you’re between
            sizes, consider the fit and style of the shoe.
          </p>
        </div>
      </div>
      <div className="collapse collapse-arrow bg-gray-100 rounded-lg shadow-md">
        <input type="radio" name="accordion" id="accordion-2" />
        <label
          htmlFor="accordion-2"
          className="collapse-title text-xl font-medium cursor-pointer py-4 px-6"
        >
          What is your return policy?
        </label>
        <div className="collapse-content py-4 px-6">
          <p>
            We accept returns within 30 days of purchase. Shoes must be unworn
            and in original packaging. Please refer to our return policy page
            for more details.
          </p>
        </div>
      </div>
      <div className="collapse collapse-arrow bg-gray-100 rounded-lg shadow-md">
        <input type="radio" name="accordion" id="accordion-3" />
        <label
          htmlFor="accordion-3"
          className="collapse-title text-xl font-medium cursor-pointer py-4 px-6"
        >
          Are your shoes made from sustainable materials?
        </label>
        <div className="collapse-content py-4 px-6">
          <p>
            Yes, we are committed to sustainability and use eco-friendly
            materials in many of our products. Check the product details for
            specific information.
          </p>
        </div>
      </div>
      <div className="collapse collapse-arrow bg-gray-100 rounded-lg shadow-md">
        <input type="radio" name="accordion" id="accordion-4" />
        <label
          htmlFor="accordion-4"
          className="collapse-title text-xl font-medium cursor-pointer py-4 px-6"
        >
          How do I care for my shoes?
        </label>
        <div className="collapse-content py-4 px-6">
          <p>
            To maintain your shoes, clean them regularly with appropriate
            products and store them in a cool, dry place. Refer to our shoe care
            guide for more tips.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Accordion;
