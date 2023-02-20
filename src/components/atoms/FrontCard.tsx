import { makeStyles } from '@material-ui/core'

const useStyles = makeStyles(() => ({
  frontCard: {
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
    margin: "1em",
    padding: "1em",
    height: "15em",
    width: "15em",
  },
  characterImage: {
    borderRadius: "50%",
    marginBottom: "0.6em",
    width: "45%",
  }
}))

export const FrontCard = ({ image, id, status, name }: any) => {
  const classes = useStyles();

  return (
    <div id={id} className={classes.frontCard}
      style={{
        borderColor: status === "Alive" ? "#32CD32" : "#FF0000",
        boxShadow: status === "Alive" ?
          "6px 2px 5px #32CD32" : " 6px 2px 5px #FF0000"
      }}
    >
      <img src={image} alt="Avatar" className={classes.characterImage} />
      <h4>{name}</h4>
    </div>
  )
}
