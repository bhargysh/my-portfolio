import React from "react";
import { Link } from "react-router-dom";

export const Navbar = () => {
  return (
    <nav>
      <Link to="/">Home</Link>
      {/* <a href="/projects/">Take me there!</a> */}
      <Link to="/projects/">Projects</Link>
      <Link to="/contact/">Contact</Link>
    </nav>
  );
};
