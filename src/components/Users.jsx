import { useState } from "react";
import { useLoaderData } from "react-router-dom";

const Users = () => {
  const users = useLoaderData();

  const [loggedUsers, setLoggedUsers] = useState(users);
  const handleDelete = (id) => {
    fetch(`http://localhost:5000/users/${id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        const remaining = users.filter((user) => user._id !== id);
        setLoggedUsers(remaining);
      });
  };

  return (
    <div>
      <h2 className="capitalize text-4xl underline font-semibold ">
        Users data table{" "}
      </h2>

      <div className="overflow-x-auto">
        <table className="table table-zebra">
          {/* head */}
          <thead>
            <tr>
              <th>id</th>
              <th>email</th>
              <th>Created At</th>
              <th>Last signIn At</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody className="mx-auto">
            {loggedUsers.map((user) => (
              <tr className="bg-purple-400" key={user._id}>
                <td>{user._id}</td>
                <td>{user.email}</td>
                <td>{user.createdAt}</td>
                <td>{user.lastSignInAt}</td>
                <td>
                  <button
                    onClick={() => handleDelete(user._id)}
                    className="btn btn-neutral"
                  >
                    x
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Users;
