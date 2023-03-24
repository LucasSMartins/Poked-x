import "./App.css";
import pokedex from "../src/assets/pokedexIMG/pokedex.png";
import { useState } from "react";

// import { input_pokemon, PokemonGif } from "./api";

function App() {
  const [gif, setGif] = useState("");
  const [name, setName] = useState("");
  const [id, setId] = useState("");

  const request_api = async (pokemon) => {
    const pokemon_info = await fetch(
      `https://pokeapi.co/api/v2/pokemon/${pokemon}`
    );
    const pokemonJason = await pokemon_info.json();

    setGif(
      pokemonJason["sprites"]["versions"]["generation-v"]["black-white"][
        "animated"
      ]["front_default"]
    );

    setName(pokemonJason["forms"][0]["name"]);
    setId(pokemonJason["id"]);
  };

  const input_pokemon = (pokemon) => request_api(pokemon.toLowerCase());

  const menosUm = () => {
    id > 1 ? setId((state) => state - 1) : id;
    request_api(id - 1);
  };

  const maisUm = () => {
    setId((state) => state + 1);
    request_api(id + 1);
  };

  return (
    <main className="main_containe">
      <img className="pokemon_gif" src={gif} />
      <img className="pokedex_img" src={pokedex} />
      <span className="pokemon_name">
        #{id} {name}
      </span>

      <form className="form_search">
        <input
          className="input_search"
          type="search"
          placeholder="Buscar Pokemón"
          required
          onChange={(event) => input_pokemon(event.target.value)}
        />
      </form>
      <div className="btn-container">
        <button className="btn" onClick={menosUm}>
          Anterior
        </button>

        <button className="btn" onClick={maisUm}>
          Próximo
        </button>
      </div>
    </main>
  );
}

export default App;
