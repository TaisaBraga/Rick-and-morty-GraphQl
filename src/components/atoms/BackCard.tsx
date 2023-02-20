import { makeStyles } from "@material-ui/core"

const useStyles = makeStyles(() => ({
  characterDescribe: {
    alignItems: "center",
    background: "radial-gradient(circle, rgba(10,21,10,0.29744397759103647) 0%, rgba(14,29,17,0.7008053221288515) 100%)",
    borderRadius: "5%",
    color: "#fff",
    display: "flex",
    flexDirection: "column",
    flexWrap: "wrap",
    fontFamily: "Klee One",
    fontSize: "1.2em",
    justifyContent: "center",
    height: "15em",
    margin: "1em",
    padding: "1em",
    width: "15em",
  }
}))

export const BackCard = ({ species, status, type }: any) => {
  const classes = useStyles();

  return (
    <div className={classes.characterDescribe}
      style={{
        borderColor: status === "Alive" ? "#32CD32" : "#FF0000",
        boxShadow: status === "Alive" ?
          "6px 2px 5px #32CD32" : " 6px 2px 5px #FF0000"
      }}
    >
      <p>Specie: {species}</p>
      <p>Status: {status}</p>
      <p>Type: {type}</p>
    </div>

  )
}