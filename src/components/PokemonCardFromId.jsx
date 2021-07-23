import React from "react";
import { useQuery } from "@apollo/client";
import PokemonCard from "./PokemonCard";
import { GET_POKEMON } from "../graphql/queries";

const PokemonCardFromId = ({ id }) => {
  const {
    data: pokemonData,
    loading: pokemonLoading,
    error: pokemonError,
  } = useQuery(GET_POKEMON, {
    variables: { id },
  });

  if (pokemonLoading) return <p>Loading...</p>;
  if (pokemonError)
    return <pre>There was an error: {pokemonError.message}</pre>;

  return (
    <div>
      <PokemonCard pokemon={pokemonData.pokemon} />
    </div>
  );
};

export default PokemonCardFromId;
