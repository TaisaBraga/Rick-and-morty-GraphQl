import { ApolloError } from "@apollo/client";
import { createContext, ReactNode, useCallback, useContext, useMemo, useState } from "react"
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
  handlePaginationClick: any,
  clickToLoading: boolean
}

const inicialStates = {
  charactersResultData: undefined,
  charactersResultLoading: false,
  charactersResultError: undefined,
  charactersResultRefetch: () => { },
  charactersResultFetchMore: () => { },
  handlePaginationClick: () => { },
  clickToLoading: false
};

export const CharacterResultContext = createContext<ICharacterResultRequest>(inicialStates);

export const useCharactersResultContext = () => useContext(CharacterResultContext);

export const CharactersResultProvider = ({ children }: CharacterResultContextProps) => {

  const [clickToLoading, setClickToLoading] = useState<boolean>(false);

  const {
    data: charactersResultData,
    loading: charactersResultLoading,
    error: charactersResultError,
    refetch: charactersResultRefetch,
    fetchMore: charactersResultFetchMore
  } = useGetCharacters({ variables: { page: 1 } });

  const handlePaginationClick = () => {
    setClickToLoading(true)
    charactersResultFetchMore({
      variables: { page: charactersResultData?.characters.info.next },
      updateQuery: (prevResult: { characters: { results: any; }; }, { fetchMoreResult }: any) => {
        setClickToLoading(false)
        fetchMoreResult.characters.results = [
          ...prevResult.characters.results,
          ...fetchMoreResult.characters.results
        ]
        return fetchMoreResult;
      },
    })
  };

  const values = useMemo(
    () => ({
      charactersResultData,
      charactersResultLoading,
      charactersResultError,
      charactersResultRefetch,
      charactersResultFetchMore,
      clickToLoading,
      handlePaginationClick
    }), [
    charactersResultData,
    charactersResultLoading,
    charactersResultError,
    charactersResultRefetch,
    charactersResultFetchMore,
    clickToLoading,
    handlePaginationClick
  ])
  return (
    <CharacterResultContext.Provider value={values}>
      {children}
    </CharacterResultContext.Provider>
  )
}