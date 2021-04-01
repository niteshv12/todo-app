import React from "react";
import { Link, NavLink } from "react-router-dom";
const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
      <div className="container">
        <Link className="navbar-brand" href="/">
          Recat User
        </Link>
        <div className="collapse navbar-collapse">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item">
              <NavLink className="nav-link" exact to="/">
                All
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" exact to="/complete">
                Complete
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" exact to="/pending">
                Pending
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;