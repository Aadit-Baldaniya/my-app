import React from "react";
import List from "../pocedex.List/List";
import styles from "./search.module.css";
function Searched(props) {
  const { pokemon, setQuery, setSearch } = props;
  function Back() {
    setQuery("");
    setSearch(null);
  }
  return (
    <div className={styles.container}>
      <div className={styles.list}>
        <List pokemon={pokemon} />
      </div>{" "}
      <div className={styles.button}>
        <button className={styles.btn} onClick={Back}>
          Back
        </button>
      </div>
    </div>
  );
}

export default Searched;
