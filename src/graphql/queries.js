import { gql } from "@apollo/client";

const GET_POKEMON = gql`
  query pokemon($id: ID, $_id: ID, $name: String) {
    pokemon(id: $id, _id: $_id, name: $name) {
      id
      _id
      name
      base_experience
      height
      is_default
      order
      weight
      location_area_encounters
      sprites {
        front_default
      }
    }
  }
`;

const GET_POKEMON_COMMENTS = gql`
  query getPokemonComments($pokemonId: ID!) {
    pokemonComments(pokemonId: $pokemonId) {
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

export { GET_POKEMON, GET_POKEMON_COMMENTS };
