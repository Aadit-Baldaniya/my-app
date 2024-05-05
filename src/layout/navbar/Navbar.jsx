import React from "react";
import navbar from "./navbar.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHouse } from "@fortawesome/free-solid-svg-icons";
import { getSinglePokemon } from "../../components/Code/Code";
function Navbar(props) {
  const { query, setQuery, setSearch } = props;

  function change(e) {
    setQuery(e.target.value);
  }

  function click() {
    getSinglePokemon(query).then((data) => {
      setSearch(data);
    });
  }
  return (
    <>
      <div className={navbar.container}>
        <div className={navbar.pocedex}>𝓹𝓸𝓬𝓮𝓭𝓮𝔁</div>
        <div className={navbar.input}>
          <input
            onChange={change}
            value={query}
            type="text"
            placeholder="Number"
          />
        </div>

        <button onClick={click} className={navbar.button}>
          <FontAwesomeIcon className={navbar.icon} icon={faHouse} />
        </button>
      </div>
    </>
  );
}

export default Navbar;
