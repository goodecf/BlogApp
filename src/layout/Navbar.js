import React from "react";
import Search from "./Search";
import { Link } from "react-router-dom";

const Navbar = ({ posts }) => {
  return (
    <nav className="navbar bg-dark">
      <Link to="/">
        <h2>Blogs</h2>
      </Link>
      <Search></Search>
      <ul>
        <Link to="/about">
          <li>About</li>
        </Link>
      </ul>
    </nav>
  );
};

export default Navbar;
