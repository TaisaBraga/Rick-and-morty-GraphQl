import { useQuery } from '@apollo/client'
import Home from './components/Home/Home';
import { Character, GET_CHARACTERS } from './queries/Queries';


function App() {
  const { loading, error, data } = useQuery(GET_CHARACTERS);

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>an error occurred...</p>;
  }
  return (
    <div className="App">
      <div>
        <h1>Rick and Morty</h1>
        <Home />
      </div>
    </div>
  )
}

export default App
