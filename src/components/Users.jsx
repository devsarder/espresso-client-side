import { Link, useLoaderData } from "react-router-dom";

const Users = () => {
  const users = useLoaderData();
  console.log(users);
  return (
    <div>
      <h2 className="capitalize text-4xl underline font-semibold ">Users data table </h2>

      <div className="overflow-x-auto">
        <table className="table table-zebra">
          {/* head */}
          <thead>
            <tr>
              <th>id</th>
              <th>email</th>
              <th>Created At</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody className="mx-auto">
            {users.map((user) => (
              <tr className="bg-purple-400" key={user._id}>
                <td>{user._id}</td>
                <td>{user.email}</td>
                <td>{user.createdAt}</td>
                <td><Link className="btn btn-neutral">x</Link></td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Users;
