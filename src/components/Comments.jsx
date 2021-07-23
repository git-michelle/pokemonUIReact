import React from "react";
// import { useQuery } from "@apollo/client";
// import { GET_POKEMON } from "../graphql/queries";

const Comments = ({ id }) => {
  const { loading, error, data } = useQuery(GET_POKEMON_COMMENTS);
  return <div></div>;
};

export default Comments;
