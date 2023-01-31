import { useCharactersResultContext } from "../context/CardContext";
import { PropagateLoader } from 'react-spinners';
import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles(() => ({
  loadingMorePage: {
    display: "flex",
    color: "#32CD32",
    cursor: "pointer",
    fontFamily: "Schoolbell",
    fontSize: "1.3em",
    justifyContent: "center",
    textShadow: "3px 3px 5px #32CD32",
    paddingBottom: "2em",
  }
}))

export const PaginationLoader = () => {
  const classes = useStyles();
  const { clickToLoading } = useCharactersResultContext();

  return (
    <>
      {
        clickToLoading === true ? (
          <div className={classes.loadingMorePage} >
            <PropagateLoader color="#32CD32" />
          </div>
        ) : (null)
      }
    </>
  )

}
