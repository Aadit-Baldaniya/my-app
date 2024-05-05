import { faBackward, faForward } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { TOTAL_page } from "../pocedex.List/Helper";
import styles from "./button.module.css";
function Button(props) {
  const { page, setPage } = props;
  function pre() {
    if (page > 1) {
      setPage(page - 1);
    } else {
      setPage(TOTAL_page);
    }
  }

  function next() {
    if (page < TOTAL_page) {
      setPage(page + 1);
    } else {
      setPage(1);
    }
  }

  return (
    <div className={styles.container}>
      <div className={styles.pre}>
        <div className={styles.previ}>
          <button className={styles.btn} onClick={pre}>
            Previous
            <FontAwesomeIcon className={styles.icon} icon={faBackward} />
          </button>
        </div>
        <div className={styles.nextt}>
          {" "}
          <button className={styles.btn} onClick={next}>
            Next <FontAwesomeIcon className={styles.icon} icon={faForward} />
          </button>
        </div>
      </div>
    </div>
  );
}

export default Button;
