import React from "react";

import styles from "./Card.module.css";

const card = (props) => {
  return <div className={styles.Card}>{props.children}</div>;
};

export default card;
