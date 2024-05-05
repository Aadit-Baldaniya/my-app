import React from "react";
import { pictuer } from "../../Code/Code";
import styles from "../styles.module.css";
function PokemonImg(props) {
  const { pokemon } = props;
  return (
    <div className={styles.PokemonImg}>
      <div className={styles.imgg}>
        <img src={pictuer(pokemon)} alt="" />
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Porro illo
          voluptatibus voluptatem ea accusantium, suscipit, iste dolor neque.
          {/* unde perspiciatis hic labore laboriosam! Dolore quia ea obcaecati eos */}
          {/* minus nesciunt quo maxime quibusdam maiores libero consectetur fuga
          magni alias voluptatibus aliquid, cumque eius ratione ipsa sunt
          reiciendis accusantium non! Quas. */}
        </p>
      </div>
    </div>
  );
}

export default PokemonImg;
