import { ICharactersResult } from '../../hooks/useGetCharacters';
import { useCharactersResultContext } from '../context/CardContext';
import { Card } from '../molecules/Card';

export const CardsList = () => {
  const { charactersResultData } = useCharactersResultContext();
  return (
    <>
      {charactersResultData?.characters.results.map((item: ICharactersResult) => (
        <div key={item.id}>
          <Card
            image={item.image}
            name={item.name}
            species={item.species}
            status={item.status}
            type={item.type === "" ? "Unknown" : item.type}
          />
        </div>
      ))}
    </>
  )
}
