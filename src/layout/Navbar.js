import React from "react";
import Search from "./Search";

const Navbar = () => {
  return (
    <nav className="navbar bg-dark">
      <h2>Blogs</h2>
      <Search></Search>
    </nav>
  );
};

export default Navbar;
