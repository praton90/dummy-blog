import React from "react";

import Nav from "../Nav/Nav";
import styles from "./Header.module.css";

const header = (props) => {
  return (
    <header>
      <div className={styles.Header}>
        <h1>React Blog</h1>
        <p>
          This is a dummy blog used to learn and practise some React concepts
        </p>
      </div>
      <Nav />
    </header>
  );
};

export default header;
