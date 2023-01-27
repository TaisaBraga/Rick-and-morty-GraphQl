import { gql, LazyQueryResult, OperationVariables, useLazyQuery, useQuery, QueryResult } from '@apollo/client'
import { ApolloError } from 'apollo-server';

export const GET_CHARACTERS = gql`
  query Characters($page: IFilterPage){
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

export interface ICharacter {
  results: object[]
  id: number,
  image: string,
  name: string,
  species: string,
  status: string,
  type: string,
  info: Info,
}

export interface IGetCharacters {
  characters: { result: ICharacter[] }

}

// export type Characters = (
//   page: IFilterPage
// ) => Promise<LazyQueryResult<IGetCharacters, OperationVariables>>

// export type useGetCharactersResult = {
//   characters: Characters;
//   loading: boolean;
//   error: null | ApolloError;
//   data: IGetCharacters | null | undefined;
// }

export type useGetCharactersResult = {
  variables: {
    page?: number
  }
}

export const useGetCharacters = ({
  variables
}: useGetCharactersResult): QueryResult<IGetCharacters> =>
  useQuery<IGetCharacters>(GET_CHARACTERS, {
    variables
  })
// export const useGetCharacters = () => {
//   const [getQuery, { data, loading, error, fetchMore, refetch }] = useLazyQuery<IGetCharacters>(GET_CHARACTERS);

//   const getCharactersResult = async (
//     page: IFilterPage
//   ) => {
//     return await getQuery({
//       variables: { page },
//     });
//   };
//   return { getCharactersResult, data, loading, error, fetchMore, refetch }
// }

export default useGetCharacters;
