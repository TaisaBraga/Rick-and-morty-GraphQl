import character from "../../assets/character.png";
import CachedIcon from '@material-ui/icons/Cached';
import { makeStyles } from "@material-ui/core";
import { NetworkStatus, useQuery } from "@apollo/client";
import { DotLoader } from 'react-spinners';
import { Character, GET_CHARACTERS } from "../../queries/Queries";
import { useState } from "react";
import { styled } from "@material-ui/core/styles";

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
  }
}));

export const ErrorPage = (props: any) => {
  const { errorText } = props;
  const classes = useStyles();

  const { refetch } = useQuery<{ characters: Character }>(GET_CHARACTERS, {
    variables: { page: 1 },
    errorPolicy: 'all',
  });

  return (
    <div className={classes.errorMessage}>
      <img src={character} alt="Rick Sanchez photo" />
      <div className={classes.refreshPageText}>
        <p>{errorText}</p>
        <CachedIcon className={classes.refreshIcon} onClick={() => refetch({ page: 1 })} />
      </div>
    </div>
  )
}
