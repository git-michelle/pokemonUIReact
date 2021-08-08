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

const USER_SIGN_UP = gql`
  mutation signUp($username: String!, $password: String!) {
    signUp(username: $username, password: $password)
  }
`;

const USER_SIGN_IN = gql`
  mutation signIn($username: String!, $password: String!) {
    signIn(username: $username, password: $password)
  }
`;

export {
  CREATE_POKEMON_COMMENT,
  UPDATE_POKEMON_COMMENT,
  USER_SIGN_UP,
  USER_SIGN_IN,
};
