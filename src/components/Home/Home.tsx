import { NetworkStatus, useQuery } from '@apollo/client'
import { makeStyles } from '@material-ui/core/styles';
import { DotLoader, PropagateLoader } from 'react-spinners';
import { Character, GET_CHARACTERS } from '../../queries/Queries';
import { Card } from '../Card/Card';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import { useState } from 'react';

const useStyles = makeStyles(() => ({
  loaderDiv: {
    alignItems: "center",
    display: "flex",
    justifyContent: "center",
    margin: "300px",
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
      {error && <p>Error! {error.message}</p>}
      <div className={classes.loadingMorePage}>
        {
          data?.characters.info.next === null ? ('') :
            (
              <p onClick={handleAddPageClick}>Loading More...
                <ExpandMoreIcon />
              </p>
            )
        }
      </div>
    </div >
  )
}
