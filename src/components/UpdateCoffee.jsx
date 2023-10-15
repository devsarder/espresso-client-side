import { useLoaderData } from "react-router-dom";

const UpdateCoffee = () => {
  const updateCoffee = useLoaderData();
  console.log(updateCoffee);

  const handleUpdateCoffee = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const chef = form.chef.value;
    const taste = form.taste.value;
    const supplier = form.supplier.value;
    const updatedCoffee = {
      name: name,
      taste: taste,
      supplier: supplier,
      chef: chef,
    };

    fetch(`http://localhost:5000/coffee/${updateCoffee._id}`, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(updatedCoffee),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        alert("coffee updated successfully");
      });
  };
  return (
    <div>
      <h2 className="capitalize text-4xl font-semibold my-5">
        Updated {updateCoffee.name}
      </h2>

      <div>
        <form
          onSubmit={handleUpdateCoffee}
          className="mx-auto space-y-2 max-w-5xl"
        >
          <input
            type="text"
            name="name"
            id="name"
            defaultValue={updateCoffee.name}
            className="bg-gray-200 p-2 rounded-md w-1/3"
          />
          <br />
          <input
            type="text"
            name="chef"
            id="chef"
            defaultValue={updateCoffee.chef}
            className="bg-gray-200 p-2 rounded-md w-1/3"
          />
          <br />
          <input
            type="text"
            name="taste"
            id="taste"
            defaultValue={updateCoffee.taste}
            className="bg-gray-200 p-2 rounded-md w-1/3"
          />
          <br />
          <input
            type="text"
            name="supplier"
            id="supplier"
            defaultValue={updateCoffee.supplier}
            className="bg-gray-200 p-2 rounded-md w-1/3"
          />
          <br />
          <input
            className="bg-gray-200 p-2 rounded-md w-1/4 btn btn-info"
            type="submit"
            value="Update Coffee"
          />
        </form>
      </div>
    </div>
  );
};

export default UpdateCoffee;
