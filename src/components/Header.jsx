import React from "react";
import { NavLink } from "react-router-dom";
import "../styles/Header.css";

// Header component for the blog
const Header = () => {
  return (
    <header className="my-blog-header">
      <NavLink to="/" className="blog-title">
        My Blog
      </NavLink>
    </header>
  );
};

export default Header;
