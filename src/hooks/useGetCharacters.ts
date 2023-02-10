import { gql, useQuery, QueryResult } from '@apollo/client'

export const GET_CHARACTERS = gql`
  query Characters($page: Int!){
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

export interface IFilterPage {
  page: number;
}

export interface Info {
  next: number
  pages: number
  prev: number
}

export interface ICharactersResult {
  id: number,
  image: string,
  name: string,
  species: string,
  status: string,
  type: string,
}

export interface IGetCharactersResponse {
  results: ICharactersResult[],
  info: Info
}

export interface IGetCharacters {
  characters: IGetCharactersResponse,

}

export type useGetCharactersResult = {
  variables: {
    page: number
  }
}

export const useGetCharacters = ({
  variables
}: useGetCharactersResult): QueryResult<IGetCharacters> =>
  useQuery<IGetCharacters>(GET_CHARACTERS, {
    variables,
  })

export default useGetCharacters;
