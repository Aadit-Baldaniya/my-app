import React from "react";
import styles from "./tag.module.css";
function Tag(props) {
  const { type } = props;
  const typeClassName = `type-${type.toLowerCase()}`;
  return (
    <div className={styles.main}>
      <div className={`${styles.tag} ${styles[typeClassName]}`}>
        {type.charAt(0).toUpperCase() + type.slice(1)}
      </div>
    </div>
  );
}

export default Tag;
