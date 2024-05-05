import React from "react";
import { name, number } from "../../Code/Code";
import styles from "../styles.module.css";
function Title(props) {
  const { pokemonn } = props;
  if (!pokemonn) return null;
  return (
    <div className={styles.title}>
      <div className={styles.inner}>
        <p>{number(pokemonn?.id)}</p>
        <p>[ {name(pokemonn?.name)} ]</p>
      </div>
    </div>
  );
}

export default Title;
