import { useQuery } from "@apollo/client";
import { makeStyles } from "@material-ui/core/styles";
import { useState } from "react";
import { Character, GET_CHARACTERS } from "../../queries/Queries";

const useStyles = makeStyles(() => ({
  cardContainer: {
    alignItems: "center",
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "center",
    margin: "2em",

  },
  characterDiscribe: {
    alignItems: "center",
    background: "radial-gradient(circle, rgba(10,21,10,0.29744397759103647) 0%, rgba(14,29,17,0.7008053221288515) 100%)",
    boxShadow: "6px 2px 5px #32CD32",
    borderColor: "#32CD32",
    borderStyle: "solid",
    borderRadius: "5%",

    color: "#fff",
    display: "flex",
    flexWrap: "wrap",
    flexDirection: "column",
    justifyContent: "center",
    margin: "1em",
    padding: "1em",
    "& p": {
    }

  },
  cardImage: {
    borderRadius: "50%",
    width: "30%",
  },
}))

export const Card = () => {
  const [page, setPage] = useState(2);
  const [rowsPerPage, setRowsPerPage] = useState(10);
  const { data } = useQuery<{ characters: Character }>(GET_CHARACTERS);
  const classes = useStyles();

  return (
    <div className={classes.cardContainer}>
      {data?.characters.results.map((character: any) => (
        <div className={classes.characterDiscribe} key={character.id}>
          <img className={classes.cardImage} src={character.image} alt="Avatar" />
          <h4>{character.name} </h4>
          <p>Species: {character.species}</p>
          <p>Status: {character.status}</p>
          <p>Type:{character.type}</p>

        </div>
      ))}
    </div>
  )
}
