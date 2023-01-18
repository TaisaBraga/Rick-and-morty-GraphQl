import { useQuery } from '@apollo/client'
import { makeStyles } from '@material-ui/core/styles';
import { Character, GET_CHARACTERS } from '../../queries/Queries';
import { Card } from '../Card/Card';
import { Loader } from '../Loader/Loader';

const useStyles = makeStyles(() => ({

}))

export const Home = () => {
  const { data, loading, error } = useQuery<{ characters: Character }>(GET_CHARACTERS);
  const classes = useStyles();

  return (
    <div>
      {loading ? <Loader /> : <Card />}
      {error && <p>Error! {error.message}</p>}
    </div>
  )
}
