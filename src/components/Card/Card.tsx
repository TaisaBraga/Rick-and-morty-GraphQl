import { makeStyles } from "@material-ui/core/styles";
import { useCharactersResultContext } from "../context/CardContext";

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
    borderRadius: "5%",
    borderStyle: "solid",
    color: "#fff",
    display: "flex",
    flexDirection: "column",
    flexWrap: "wrap",
    fontFamily: "Klee One",
    justifyContent: "center",
    margin: "1em",
    padding: "1em",
    width: "20em",
    "& img": {
      borderRadius: "50%",
      marginBottom: "0.6em",
      width: "30%",
    }
  }
}))

export const Card = () => {
  const { charactersResultData } = useCharactersResultContext()
  const classes = useStyles();

  return (
    <div style={{ paddingBottom: "20px", width: "100%", display: "flex", alignItems: "center", justifyContent: "center" }}>
      <div className={classes.cardContainer}>
        {charactersResultData?.characters.results.map((character: any) => (
          <div className={classes.characterDiscribe}
            style={{
              borderColor: character.status === "Alive" ? "#32CD32" : "#FF0000",
              boxShadow: character.status === "Alive" ?
                "6px 2px 5px #32CD32" : " 6px 2px 5px #FF0000"
            }}
            key={character.id}
          >
            <img src={character.image} alt="Avatar" />
            <h4>{character.name} </h4>
            <p>Specie: {character.species}</p>
            <p>Status: {character.status}</p>
            <p>Type: {character.type === "" ? "Unknown" : character.type}</p>
          </div>
        ))}
      </div>
    </div>
  )
}
