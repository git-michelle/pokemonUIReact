import React from "react";
import PokemonCardFromId from "../components/PokemonCardFromId";
import { useParams } from "react-router-dom";

const PokemonPage = ({ id }) => {
  const params = useParams();

  return (
    <div>
      <PokemonCardFromId id={params.id} />
      {/* Comments */}
    </div>
  );
};

export default PokemonPage;
