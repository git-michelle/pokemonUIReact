import React, { useEffect, useRef } from "react";
import { useLazyQuery } from "@apollo/client";
import { GET_POKEMON } from "../graphql/queries";
import { useHistory } from "react-router-dom";

const PokemonSearchBar = () => {
  const history = useHistory();
  const inputRef = useRef(null);

  const [loadPokemon, { called, data, loading, error }] =
    useLazyQuery(GET_POKEMON);

  useEffect(() => {
    if (!data) return;

    console.log("the data ", data);
    console.log("the history ", history);

    history.push(`/pokemon/${data.pokemon.id}`);
  }, [data]);

  const searchPokemon = () => {
    console.log("input ref current val ", inputRef.current.value);
    loadPokemon({
      variables: {
        name: inputRef.current.value,
      },
    });
  };

  const searchInputChange = (event) => {
    if (event.key === "Enter" || event.keyCode === 13) {
      searchPokemon();
    }
  };

  return (
    <div>
      <input
        placeholder={"Enter pokemon name"}
        ref={inputRef}
        onKeyUp={searchInputChange}
      />
      <button onClick={searchPokemon}>Catch 'em!</button>
    </div>
  );
};

export default PokemonSearchBar;
