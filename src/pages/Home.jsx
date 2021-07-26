import React from "react";
import PokemonCardFromId from "../components/PokemonCardFromId";
import PokemonSearchBar from "../components/PokemonSearchBar";

const Home = () => {
  return (
    <div>
      <h1>Howdy</h1>
      <PokemonSearchBar />
      <PokemonCardFromId id={1} />
    </div>
  );
};

export default Home;
