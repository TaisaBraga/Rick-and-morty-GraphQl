import { ApolloError } from "@apollo/client";
import { createContext, ReactNode, useContext, useMemo } from "react"
import useGetCharacters, { IGetCharacters } from "../../hooks/useGetCharacters";

type CharacterResultContextProps = {
  children: ReactNode
};

export interface ICharacterResultRequest {
  charactersResultData: IGetCharacters | undefined,
  charactersResultLoading: boolean,
  charactersResultError: ApolloError | undefined,
  charactersResultRefetch: () => void,
  charactersResultFetchMore: any,
}

const inicialStates = {
  charactersResultData: undefined,
  charactersResultLoading: false,
  charactersResultError: undefined,
  charactersResultRefetch: () => { },
  charactersResultFetchMore: () => { },
};

export const CharacterResultContext = createContext<ICharacterResultRequest>(inicialStates);

export const useCharactersResultContext = () => useContext(CharacterResultContext);

export const CharactersResultProvider = ({ children }: CharacterResultContextProps) => {

  const {
    data: charactersResultData,
    loading: charactersResultLoading,
    error: charactersResultError,
    refetch: charactersResultRefetch,
    fetchMore: charactersResultFetchMore
  } = useGetCharacters({ variables: { page: 1 } });


  const values = useMemo(
    () => ({
      charactersResultData,
      charactersResultLoading,
      charactersResultError,
      charactersResultRefetch,
      charactersResultFetchMore
    }), [
    charactersResultData,
    charactersResultLoading,
    charactersResultError,
    charactersResultRefetch,
    charactersResultFetchMore
  ])
  return (
    <CharacterResultContext.Provider value={values}>
      {children}
    </CharacterResultContext.Provider>
  )
}