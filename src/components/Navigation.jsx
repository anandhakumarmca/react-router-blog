import React from "react";
import { NavLink } from "react-router-dom";
import "../styles/Navigation.css";

// Navigation component for the blog
const Navigation = () => {
  return (
    <nav>
      <ul>
        <li>
          <NavLink to="/">All</NavLink>
        </li>
        <li>
          <NavLink to="/fullstack">Full Stack Development</NavLink>
        </li>
        <li>
          <NavLink to="/datascience">Data Science</NavLink>
        </li>
        <li>
          <NavLink to="/cybersecurity">Cyber Security</NavLink>
        </li>
        <li>
          <NavLink to="/career">Career</NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;
