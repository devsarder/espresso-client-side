import Swal from "sweetalert2";

const AddCoffee = () => {
  const handleAddCoffee = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const chef = form.chef.value;
    const supplier = form.supplier.value;
    const taste = form.taste.value;
    const newCoffee = { name, supplier, taste, chef };
    console.log(newCoffee);

    fetch("http://localhost:5000/coffee", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(newCoffee),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.insertedId) {
          Swal.fire({
            title: "success!",
            text: "coffee added successfully",
            icon: "success",
            confirmButtonText: "done",
          });
        }
        console.log(data);
        form.reset();
      });
  };
  return (
    <div className="bg-[#F4F3F0] p-10 max-w-5xl mx-auto">
      <div>
        <h3 className="text-4xl my-2">Add New Coffee</h3>
        <p className="text-gray-400">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod
          architecto nemo laudantium pariatur sunt, amet exercitationem quam
          earum dignissimos a esse, enim totam assumenda reiciendis numquam
          molestiae, ea nihil blanditiis! Mollitia sint eius provident sed et
          dignissimos dolore, voluptatibus quibusdam enim magni nostrum
          consectetur incidunt!
        </p>
      </div>
      {/* file container */}
      <form onSubmit={handleAddCoffee} className="grid lg:grid-cols-2 gap-3">
        <div className="form-control ">
          <label className="label">
            <span className="label-text">Name</span>
          </label>
          <label className="input-group">
            <input
              type="text"
              placeholder="name"
              name="name"
              className="input w-full input-bordered"
            />
          </label>
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Chef</span>
          </label>
          <label className="input-group">
            <input
              type="text"
              name="chef"
              placeholder="chef"
              className="input w-full input-bordered"
            />
          </label>
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Supplier</span>
          </label>
          <label className="input-group">
            <input
              type="text"
              name="supplier"
              placeholder="Enter coffee supplier"
              className="input w-full input-bordered"
            />
          </label>
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Taste</span>
          </label>
          <label className="input-group">
            <input
              type="text"
              name="taste"
              placeholder="Enter coffee taste"
              className="input w-full input-bordered"
            />
          </label>
        </div>
        <input
          className="w-ful font-semibold text-xl btn  col-span-2 py-2 rounded-md bg-[#D2B48C]"
          type="submit"
          value="Add Coffee"
        />
      </form>
    </div>
  );
};

export default AddCoffee;
