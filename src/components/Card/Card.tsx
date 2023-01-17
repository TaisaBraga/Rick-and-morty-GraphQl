import { useQuery } from "@apollo/client";
import { makeStyles } from "@material-ui/core/styles";
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
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
  },
  loadingMorePage: {
    display: "flex",
    color: "#32CD32",
    cursor: "pointer",
    fontFamily: "Schoolbell",
    fontSize: "1.3em",
    justifyContent: "center",
    textShadow: "3px 3px 5px #32CD32",
  }
}))

export const Card = () => {
  const { data, fetchMore } = useQuery<{ characters: Character }>(GET_CHARACTERS, {
    variables: {
      page: 1,
    }
  });
  const classes = useStyles();

  const handleAddPageClick = () => {
    fetchMore({
      variables: { page: data?.characters.info.next },
      updateQuery: (prevResult, { fetchMoreResult }) => {
        fetchMoreResult.characters.results = [
          ...prevResult.characters.results,
          ...fetchMoreResult.characters.results
        ]
        return fetchMoreResult;
      }
    })
  };


  return (
    <div style={{ paddingBottom: "20px", width: "100%" }}>
      <div className={classes.cardContainer}>
        {data?.characters.results.map((character: any) => (
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
      <div className={classes.loadingMorePage}>
        <p onClick={handleAddPageClick}>Loading More...
          <ExpandMoreIcon />
        </p>
      </div>
    </div>
  )
}
