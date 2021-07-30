import React from "react";
import PokemonCardFromId from "../components/PokemonCardFromId";
import { useParams } from "react-router-dom";
import Comments from "../components/Comments";

const PokemonPage = ({ id }) => {
  const params = useParams();

  return (
    <div>
      <PokemonCardFromId id={params.id} />
      {/* Comments */}
      <Comments />
    </div>
  );
};

export default PokemonPage;
