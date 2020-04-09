import React from "react";

import styles from "./Nav.module.css";
import { NavLink } from "react-router-dom";

const nav = (props) => {
  return (
    <nav className={styles.Nav}>
      <ul>
        <li>
          <NavLink to="/">Home</NavLink>
        </li>
        <li>
          <NavLink to="/about">About this</NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default nav;
