import { Link } from "react-router-dom";
import Swal from "sweetalert2";

/* eslint-disable react/prop-types */
const CoffeeCard = ({ coffee, coffees, setCoffees }) => {
  const { _id, name, supplier, taste, chef } = coffee;
  // delete coffee
  const handleDelete = (_id) => {
    console.log(_id);
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`http://localhost:5000/coffee/${_id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.deletedCount > 0) {
              Swal.fire("Deleted!", "Your file has been deleted.", "success");
            }
            const remaining = coffees.filter((cof) => cof._id !== _id);

            setCoffees(remaining);
            console.log(data);
          });
      }
    });
  };

  return (
    <div className=" bg-gray-200 text-left p-4 rounded-md flex justify-between items-center">
      <div>
        <h2>Name:{name}</h2>
        <p>chef:{chef}</p>
        <p>supplier:{supplier}</p>
        <p>taste:{taste}</p>
      </div>
      <div>
        <div className="btn-group space-y-2 btn-group-vertical">
          <button className="btn btn-active">View</button>
          <Link to={`/updateCoffee/${_id}`}>
            <button className="btn">Edit</button>
          </Link>
          <button onClick={() => handleDelete(_id)} className="btn">
            X
          </button>
        </div>
      </div>
    </div>
  );
};

export default CoffeeCard;
