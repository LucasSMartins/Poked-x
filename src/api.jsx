import { useState } from "react";

const PokemonGif = (pokemon) => {

 

  return (
    <img
      className="pokemon_gif"
      src={gif}
    />
  );
};


export { input_pokemon, PokemonGif };

// dados_pokemon.gif =
//   pokemonJason["sprites"]["versions"]["generation-v"]["black-white"][
//     "animated"
//   ]["front_default"];

// dados_pokemon.name = pokemonJason["forms"][0]["name"];
