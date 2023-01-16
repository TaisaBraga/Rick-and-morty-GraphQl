import { gql } from '@apollo/client'

export type Character = {
  results: object[]
  id: number,
  image: string,
  name: string,
  species: string,
  status: string,
  type: string,
}

export const GET_CHARACTERS = gql`
  query{
    characters{
      results{
        id
        image
        name,
        species,
        status,
        type
      }
    }
  }
`
