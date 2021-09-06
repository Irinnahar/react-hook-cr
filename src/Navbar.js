import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <ul className="navbar-nav">
        <li className="nav-item active">
          <Link className="nav-link" to="/">
            Task Manager Crud
          </Link>
        </li>
        <li className="nav-item active">
          <Link className="nav-link" to="/hook-crud">
            Hook Crud
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
