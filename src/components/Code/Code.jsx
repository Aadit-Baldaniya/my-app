import { page_size } from "../pocedex.List/Helper";

export function pokemonList(page) {
  const limit = page_size;
  const offset = (page - 1) * limit;

  const aadi = fetch(
    `https://pokeapi.co/api/v2/pokemon?offset=${offset}&&limit=${limit}`
  )
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      const result = data.results;

      const promise = [];
      for (const name of result) {
        const panding = fetch(name.url)
          .then((response) => {
            return response.json();
          })
          .then((data) => {
            return data;
          });
        promise.push(panding);
      }
      return Promise.all(promise);
    })
    .catch((error) => {
      return error;
    });
  return aadi;
}

// export function imga(pokemon) {
//   return pokemon.sprites.other["official - artwork"].front_default;
// }
export function pictuer(pokemon) {
  return pokemon?.sprites.other["official-artwork"].front_default;
}

export function number(id) {
  return "@" + id.toString().padStart(4, "*");
}
export function name(str) {
  return str[0].toUpperCase() + str.slice(1);
}
export async function getSinglePokemon(query) {
  const aadi = await fetch(`http://pokeapi.co/api/v2/pokemon/${query}`);
  const data = aadi.json();
  return data;
}

export function type(pokemonn) {
  return pokemonn.types.map((value) => {
    return <p>{value.type.name}</p>;
  });
}
