import character from "../../assets/character.png";
import CachedIcon from '@material-ui/icons/Cached';
import { makeStyles } from "@material-ui/core";
import { useQuery } from "@apollo/client";
import { Character, GET_CHARACTERS } from "../../queries/Queries";
import { memo } from "react";

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

export const ErrorPage = (props: any) => {
  const { errorText } = props;
  const classes = useStyles();

  const { refetch } = useQuery<{ characters: Character }>(GET_CHARACTERS, {
    variables: { page: 1 },
    errorPolicy: 'all',
  });

  const refreshPage = () => {
    refetch({ page: 1 })
  }

  return (
    <div className={classes.errorMessage}>
      <img src={character} alt="Rick Sanchez photo" />
      <div className={classes.refreshPageText}>
        <p>{errorText}</p>
        <CachedIcon className={classes.refreshIcon} onClick={refreshPage} />
      </div>
    </div>
  )
}
