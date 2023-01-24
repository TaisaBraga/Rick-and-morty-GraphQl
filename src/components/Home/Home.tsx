import { NetworkStatus, useQuery } from '@apollo/client'
import { makeStyles } from '@material-ui/core/styles';
import { DotLoader, PropagateLoader } from 'react-spinners';
import { Character, GET_CHARACTERS } from '../../queries/Queries';
import { Card } from '../Card/Card';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import { useState } from 'react';
import character from "../../assets/character.png";

const useStyles = makeStyles(() => ({
  errorMessage: {
    alignItems: "center",
    color: "#fff",
    display: "inline-block",
    fontFamily: 'Syne Mono',
    fontSize: "2.5em",
    height: "75vh",
    margin: "0 auto",
    textAlign: "center",
    width: "100vw",
    "& img": {
      width: "50%",
    }
  },
  loaderDiv: {
    alignItems: "center",
    display: "flex",
    justifyContent: "center",
    flexDirection: "row",
    width: "100vw",
    height: "100vh",
  },
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

export const Home = () => {
  const classes = useStyles();
  const [clickToLoading, setClickToLoading] = useState<boolean>(false);
  const { data, loading, error, fetchMore } = useQuery<{
    characters: Character
  }>(GET_CHARACTERS,
    {
      variables: {
        page: 1,
      },
    });

  const handleAddPageClick = () => {
    setClickToLoading(true)
    fetchMore({
      variables: { page: data?.characters.info.next },
      updateQuery: (prevResult, { fetchMoreResult }) => {
        setClickToLoading(false)
        fetchMoreResult.characters.results = [
          ...prevResult.characters.results,
          ...fetchMoreResult.characters.results
        ]
        return fetchMoreResult;
      },
    })
  };

  return (
    <div>
      {
        loading ? (
          <div className={classes.loaderDiv}>
            <DotLoader color="#32CD32" size="3em" />
          </div>
        ) : (<Card />)
      }
      {
        clickToLoading === true ? (
          <div className={classes.loadingMorePage}>
            <PropagateLoader color="#32CD32" />
          </div>
        ) : (null)
      }
      {
        error || loading || data?.characters.info.next === null ? ('') :
          (
            <div className={classes.loadingMorePage}>
              <p onClick={handleAddPageClick}>Loading More...
                <ExpandMoreIcon />
              </p>
            </div>
          )
      }
      {
        error && <div>
          <div className={classes.errorMessage}>
            <img src={character} alt="Rick Sanchez photo" />
            <p>Something went wrong, please try again!</p>
          </div>
        </div>
      }

    </div >
  )
}
