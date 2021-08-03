import React from "react";
// import PokemonCardFromId from "../components/PokemonCardFromId";
import { useParams } from "react-router-dom";
import Comments from "../components/Comments";
import { GET_POKEMON } from "../graphql/queries";
import { useQuery } from "@apollo/client";
import PokemonCard from "../components/PokemonCard";

const PokemonPage = () => {
  const { id } = useParams();
  // get pokemon to pass to child component
  const { data, loading, error } = useQuery(GET_POKEMON, { variables: { id } });

  console.log("id is ", id);
  if (loading) return <p>Loading...</p>;

  if (error) return <pre>{JSON.stringify(error.message, null, 3)}</pre>;

  console.log("data is ", data);

  return (
    <div>
      <PokemonCard pokemon={data.pokemon} />
      {/* Comments */}
      <Comments id={data.pokemon._id} />
    </div>
  );
};

export default PokemonPage;
