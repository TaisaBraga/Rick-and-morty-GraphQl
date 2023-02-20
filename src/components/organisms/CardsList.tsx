import { makeStyles } from '@material-ui/core';
import { ICharactersResult } from '../../hooks/useGetCharacters';
import { useCharactersResultContext } from '../context/CardContext';
import { Card } from '../molecules/Card';

const useStyles = makeStyles(() => ({
  cardContainer: {
    alignItems: "center",
    display: "flex",
    flexWrap: "wrap",
    margin: "1em",
    justifyContent: "center"
  },
}))

export const CardsList = () => {
  const classes = useStyles();
  const { charactersResultData } = useCharactersResultContext();
  return (
    <div className={classes.cardContainer}>
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
    </div>
  )
}
