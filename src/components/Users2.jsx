import { useQuery } from "@tanstack/react-query";

const Users2 = () => {
  const {
    isPending,
    isError,
    data: loggedUsers,
  } = useQuery({
    queryKey: ["users"],
    queryFn: async () => {
      const response = await fetch("http://localhost:5000/users");
      return response.json();
    },
  });
  if (isPending) {
    return <p>data is loading</p>;
  }
  if (isError) {
    return (
      <div className="alert alert-error">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="stroke-current shrink-0 h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>
        <span>Error! Task failed successfully.</span>
      </div>
    );
  }
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
            {loggedUsers?.map((user) => (
              <tr className="bg-purple-400" key={user._id}>
                <td>{user._id}</td>
                <td>{user.email}</td>
                <td>{user.createdAt}</td>
                <td>{user.lastSignInAt}</td>
                <td>
                  {/* <button
                    onClick={() => handleDelete(user._id)}
                    className="btn btn-neutral"
                  >
                    x
                  </button> */}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Users2;
