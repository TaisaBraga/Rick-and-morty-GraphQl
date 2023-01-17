import { gql } from '@apollo/client'

export type Info = {
  next: number
  pages: number
  prev: number
}

export type Character = {
  results: object[]
  id: number,
  image: string,
  name: string,
  species: string,
  status: string,
  type: string,
  info: Info,
}

export const GET_CHARACTERS = gql`
  query Characters($page: Int){
    characters(page: $page){
      results{
        id
        image,
        name,
        species,
        status,
        type,
      },
      info {
        next,
        pages,
        prev,
      }
    }
  }
`
