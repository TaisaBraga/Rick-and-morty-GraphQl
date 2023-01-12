import { makeStyles } from '@material-ui/core/styles';
import Home from './components/Home/Home';

const useStyles = makeStyles(() => ({
  title: {
    color: "#DF608C"
  }
}))

function App() {

  const classes = useStyles();
  return (
    <div className="App">
      <div>
        <h1 className={classes.title}>Rick and Morty</h1>
        <Home />
      </div>
    </div>
  )
}

export default App
