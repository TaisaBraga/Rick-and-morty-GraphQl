import character from "../../assets/character.png";
import CachedIcon from '@material-ui/icons/Cached';
import { makeStyles } from "@material-ui/core";
import { useCharactersResultContext } from "../context/CardContext";

const useStyles = makeStyles(() => ({
  errorMessage: {
    alignItems: "center",
    color: "#fff",
    fontFamily: 'Syne Mono',
    fontSize: "2.5em",
    justifyContent: "center",
    height: "75vh",
    textAlign: "center",
    width: "100vw",
    "& img": {
      width: "50%",
    }
  },
  refreshPageText: {
    alignItems: "center",
    display: "flex",
    justifyContent: "center",
    textAlign: "center",
    "& p": {
      width: "50%"
    }
  },
  refreshIcon: {
    cursor: "pointer",
    fontSize: "1.2em",
    transition: "rotate 0.5s ease-out",
    "&:active": {
      rotate: "360deg",
    }
  },

}));

export const ErrorPage = () => {
  const classes = useStyles();

  const {
    charactersResultError,
    charactersResultRefetch
  } = useCharactersResultContext();

  return (
    <>
      {
        charactersResultError &&
        <div className={classes.errorMessage}>
          <img src={character} alt="Rick Sanchez photo" />
          <div className={classes.refreshPageText}>
            <p>Something went wrong, please try again!</p>
            <CachedIcon className={classes.refreshIcon} onClick={() => charactersResultRefetch()} />
          </div>
        </div>
      }
    </>
  )
}
