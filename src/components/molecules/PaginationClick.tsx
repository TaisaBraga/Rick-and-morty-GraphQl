import { makeStyles } from '@material-ui/core';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import { useCharactersResultContext } from "../context/CardContext";

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

export const PaginationClick = () => {
  const classes = useStyles();
  const {
    charactersResultData,
    charactersResultLoading,
    charactersResultError,
    handlePaginationClick,
  } = useCharactersResultContext();

  return (
    <>
      {
        charactersResultError || charactersResultLoading ||
          charactersResultData?.characters.info.next === null ? ('') :
          (
            <div className={classes.loadingMorePage}>
              <p onClick={handlePaginationClick}>Loading More...
                <ExpandMoreIcon />
              </p>
            </div>
          )
      }
    </>
  )
}