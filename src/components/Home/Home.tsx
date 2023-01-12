import { useQuery } from '@apollo/client'
import { Key } from 'react';
import { Character, GET_CHARACTERS } from '../../queries/Queries';
import { Card } from '../Card/Card';

function Home() {
  const { data, loading, error } = useQuery<{ characters: Character }>(GET_CHARACTERS);

  return (
    <div>
      {loading ? <p>Loading...</p> : <Card />}
      {error && <p>Error! {error.message}</p>}

    </div>
  )
}

export default Home