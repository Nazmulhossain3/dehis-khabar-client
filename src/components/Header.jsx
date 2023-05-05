import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "./Provider/AuthProvider";
import { NavLink } from "react-router-dom";

const Header = () => {
  const { user, logOut } = useContext(AuthContext);

  const handleLogout = () => {
    logOut();
  };

  return (
    <div className="navbar bg-gray-400 bg-opacity-5 ">
      <div className="flex-1">
        <a className="btn btn-ghost normal-case text-xl">Deshi Khabar</a>
      </div>
      <div className="flex-none gap-2 text-xl">
        <div className="mr-80 flex md:flex-row flex-col gap-8">
          <NavLink
            className={({ isActive }) => (isActive ? "text-green-500" : "")}
            to="/"
          >
            Home
          </NavLink>
          <NavLink
            className={({ isActive }) => (isActive ? "text-green-500" : "")}
            to="/login"
          >
            Login
          </NavLink>
          <NavLink
            className={({ isActive }) => (isActive ? "text-green-500" : "")}
            to="blog"
          >
            Blog
          </NavLink>
          <NavLink
            className={({ isActive }) => (isActive ? "text-green-500" : "")}
            to="/register"
          >
            {" "}
            Register
          </NavLink>
        </div>

        <div className="dropdown dropdown-end">
          <label tabIndex={0} className="">
            {user ? (
              <div className="w-10 rounded-full">
                <img
                  title={user.displayName}
                  className="rounded-full"
                  src={user?.photoURL}
                />
              </div>
            ) : (
              <Link to="/login">
                <button className="btn btn-sm">Login</button>
              </Link>
            )}
          </label>
          <ul
            
            className="mt-3 p-2 shadow menu menu-compact dropdown-content bg-base-100 rounded-box "
          >
            <li>
              {logOut ? (
                <span>
                  <button onClick={handleLogout}>Logout</button>
                </span>
              ) : (
                ""
              )}
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Header;
