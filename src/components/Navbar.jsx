import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="flex flex-row gap-3 justify-center my-4">
      <NavLink className='btn btn-neutral' to="/">Home</NavLink>
      <NavLink className='btn btn-neutral' to="/users">users</NavLink>
      <NavLink className='btn btn-neutral' to="/users2">users2</NavLink>
      <NavLink className='btn btn-neutral' to="/signup">sign up</NavLink>
      <NavLink className='btn btn-neutral' to="/signin">Sign in</NavLink>
    </div>
  );
};

export default Navbar;
