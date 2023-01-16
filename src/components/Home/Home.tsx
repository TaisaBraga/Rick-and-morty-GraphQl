import { useQuery } from '@apollo/client'
import { makeStyles } from '@material-ui/core/styles';
import { Character, GET_CHARACTERS } from '../../queries/Queries';
import { Card } from '../Card/Card';

const useStyles = makeStyles(() => ({

}))

function Home() {
  const { data, loading, error } = useQuery<{ characters: Character }>(GET_CHARACTERS);
  const classes = useStyles();

  return (
    <div>
      {loading ? <p>Loading...</p> : <Card />}
      {error && <p>Error! {error.message}</p>}
    </div>
  )
}

export default Home