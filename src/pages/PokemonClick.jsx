import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getSinglePokemon } from "../components/Code/Code";
import Title from "../components/PokemonUrl/title/Title";
import PokemonImg from "../components/PokemonUrl/PokemonImg/PokemonImg";
import styles from "../components/PokemonUrl/styles.module.css";
import Rowdata from "../components/PokemonUrl/type/Rowdata";
function PokemonClick() {
  const [pokemonn, setPokemonn] = useState(null);

  const peram = useParams();
  useEffect(() => {
    getSinglePokemon(peram.id).then((data) => {
      setPokemonn(data);
    });
  }, [peram.id]);
  return (
    <>
      <div className={styles.name}>
        <Title pokemonn={pokemonn} />
        <PokemonImg pokemon={pokemonn} />
        <Rowdata pokemonn={pokemonn} />
      </div>
    </>
  );
}

export default PokemonClick;
