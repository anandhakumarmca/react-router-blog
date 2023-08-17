import React from "react";
import { NavLink } from "react-router-dom";
import "../styles/Navigation.css";

const Navigation = () => {
  return (
    <nav>
      <ul>
        <li>
          <NavLink to="/" exact>
            All
          </NavLink>
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
      </ul>
    </nav>
  );
};

export default Navigation;
