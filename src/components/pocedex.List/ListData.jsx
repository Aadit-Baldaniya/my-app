import React, { useEffect, useState } from "react";
import List from "./List";
import styles from "./styles.module.css";
import { pokemonList } from "../Code/Code";
import Button from "../button/Button";
function ListData() {
  const [pokemon, setPokemon] = useState(null);
  const [page, setPage] = useState(1);

  useEffect(() => {
    pokemonList(page).then((data) => {
      setPokemon(data);
    });
  }, [page]);

  return (
    <>
      <div className={styles.Container}>
        {pokemon?.map((pokemon) => {
          return <List key={pokemon} pokemon={pokemon} />;
        })}
      </div>
      <Button page={page} setPage={setPage} />
    </>
  );
}

export default ListData;
