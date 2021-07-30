import { gql } from "@apollo/client";

const CREATE_POKEMON_COMMENT = gql`
  mutation createPokemonComment(
    $pokemonId: ID!
    $author: String
    $text: String!
  ) {
    createComment(pokemonId: $pokemonId, author: $author, text: $text) {
      id
      pokemonId
      author
      text
      upvotes
      downvotes
      createdAt
      updatedAt
    }
  }
`;

const UPDATE_POKEMON_COMMENT = gql`
  mutation updatePokemonComment(
    $pokemonId: ID!
    $commentId: ID!
    $text: String!
    $author: String
    $upvotes: Int
    $downvotes: Int
  ) {
    updateComment(
      pokemonId: $pokemonId
      commentId: $commentId
      text: $text
      author: $author
      upvotes: $upvotes
      downvotes: $downvotes
    ) {
      id
      pokemonId
      author
      upvotes
      downvotes
      text
      createdAt
      updatedAt
    }
  }
`;

export { CREATE_POKEMON_COMMENT, UPDATE_POKEMON_COMMENT };
