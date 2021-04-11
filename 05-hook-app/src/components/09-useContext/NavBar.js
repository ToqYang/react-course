import React from "react";
import { Link, NavLink } from "react-router-dom";

const NavBar = () => {
  return (
    <nav className="navbar navbar-expand-xs navbar-dark bg-dark">
      <div className="container-fluid">
        <a className="navbar-brand" href="#">
          useContext
        </a>
        <div className="d-flex">
          <ul className="navbar-nav d-flex flex-row">
            <li className="nav-item m-2">
              <NavLink activeClassName="active" className="nav-link" to="/">
                Home
              </NavLink>
            </li>
            <li className="nav-item m-2">
              <NavLink
                activeClassName="active"
                className="nav-link"
                to="/login"
              >
                Login
              </NavLink>
            </li>
            <li className="nav-item m-2">
              <NavLink
                activeClassName="active"
                className="nav-link"
                to="/about"
              >
                About
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
