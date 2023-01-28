import { makeStyles } from '@material-ui/core/styles';
import { DotLoader, PropagateLoader } from 'react-spinners';
import { Card } from '../Card/Card';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import { useState } from 'react';
import { ErrorPage } from '../ErrorPage/ErrorPage';
import { useCharactersResultContext } from '../context/CardContext';

const useStyles = makeStyles(() => ({
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

  const {
    charactersResultData,
    charactersResultLoading,
    charactersResultError,
    charactersResultFetchMore } =
    useCharactersResultContext();

  const handleAddPageClick = () => {
    setClickToLoading(true)
    charactersResultFetchMore({
      variables: { page: charactersResultData?.characters.info.next },
      updateQuery: (prevResult: { characters: { results: any; }; }, { fetchMoreResult }: any) => {
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
        charactersResultLoading ? (
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
        charactersResultError || charactersResultLoading ||
          charactersResultData?.characters.info.next === null ? ('') :
          (
            <div className={classes.loadingMorePage}>
              <p onClick={handleAddPageClick}>Loading More...
                <ExpandMoreIcon />
              </p>
            </div>
          )
      }
      {
        charactersResultError &&
        <div>
          <ErrorPage errorText={"Something went wrong, please try again!"} />
        </div>
      }

    </div >
  )
}
