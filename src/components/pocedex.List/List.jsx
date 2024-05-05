import React from "react";
import styles from "./styles.module.css";
import { name, number, pictuer } from "../Code/Code";
import Tag from "../tag/Tag";
import { useNavigate } from "react-router-dom";
function List(props) {
  const { pokemon } = props;
  const navigat = useNavigate();
  function goto() {
    navigat(`PokemonClick/${pokemon.name}`);
  }

  return (
    <div onClick={goto} className={styles.container}>
      <div className={styles.img}>
        <img src={pictuer(pokemon)} alt="" />
      </div>
      <div className={styles.innerpara}>
        <p className={styles.number}>{number(pokemon.id)}</p>
        <p className={styles.name}>{name(pokemon.name)}</p>
      </div>
      <div className={styles.type}>
        <p>
          {pokemon.types.map((value, index) => {
            return <Tag type={value.type.name} key={index} />;
          })}
        </p>
      </div>
    </div>
  );
}

export default List;
