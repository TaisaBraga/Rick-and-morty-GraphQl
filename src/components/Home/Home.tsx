import { useQuery } from '@apollo/client'
import { makeStyles } from '@material-ui/core/styles';
import { CircleLoader, DotLoader } from 'react-spinners';
import { Character, GET_CHARACTERS } from '../../queries/Queries';
import { Card } from '../Card/Card';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

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
  const { data, loading, error, fetchMore } = useQuery<{
    characters: Character
  }>(GET_CHARACTERS,
    {
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
    <div>
      {loading ? (
        <div className={classes.loaderDiv}>
          <DotLoader color="#32CD32" size="5em" />
        </div>)
        : (<Card />)
      }
      {error && <p>Error! {error.message}</p>}
      <div className={classes.loadingMorePage}>
        <p onClick={handleAddPageClick}>Loading More...
          <ExpandMoreIcon />
        </p>
      </div>
    </div>
  )
}
