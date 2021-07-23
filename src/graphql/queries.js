import { gql } from "@apollo/client";

const GET_POKEMON = gql`
  query pokemon($id: ID, $name: String) {
    pokemon(id: $id, name: $name) {
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

export { GET_POKEMON };
