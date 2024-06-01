import { useLoaderData } from 'react-router-dom';

const EditProfile = () => {
  const data = useLoaderData();
  console.log(data);

  const Handlesubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const email = form.email.value;
    const age = form.age.value;
    const mobile = form.mobile.value;
    const userData = { name, email, age, mobile };
    console.log(userData);

    fetch(`http://localhost:5000/user/${data?.email}`, {
      method: 'PATCH',
      headers: {
        'Content-type': 'application/json',
      },
      body: JSON.stringify(userData),
    })
      .then((res) => res.json())
      .then((data) => console.log(data));
  };

  return (
    <div>
      <h1>Edit Profile</h1>
      <form onSubmit={Handlesubmit} className="flex flex-col gap-y-5">
        <div>
          <label htmlFor="" className="flex flex-col">
            User Name
          </label>
          <input
            defaultValue={data?.name}
            className="py-2 px-1 bg-slate-50 w-full"
            type="text"
            name="name"
          />
        </div>
        <div>
          <label className="flex flex-col" htmlFor="">
            User Email
          </label>
          <input
            defaultValue={data?.email}
            className="py-2 px-1 bg-slate-50 w-full"
            type="email"
            name="email"
          />
        </div>
        <div>
          <label className="flex flex-col" htmlFor="">
            User Age
          </label>
          <input
            className="py-2 px-1 bg-slate-50 w-full"
            type="number"
            name="age"
          />
        </div>
        <div>
          <label className="flex flex-col" htmlFor="">
            User Mobile
          </label>
          <input
            className="py-2 px-1 bg-slate-50 w-full"
            type="number"
            name="mobile"
          />
        </div>
        <div className="text-center">
          <button className="w-full bg-black text-white rounded-md p-2">
            Update Now
          </button>
        </div>
      </form>
    </div>
  );
};

export default EditProfile;
