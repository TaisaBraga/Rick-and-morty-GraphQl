import { makeStyles } from '@material-ui/core/styles';
import Home from './components/Home/Home';
import "./App.css"

const useStyles = makeStyles(() => ({
  title: {
    color: "#008B8B",
    fontFamily: 'Rubik Bubbles',
    fontSize: "3.5em",
    padding: "0.5em",
    textAlign: "center",
    WebkitTextStrokeWidth: "0.5px",
    WebkitTextStrokeColor: '#32CD32',
  }
}))

function App() {

  const classes = useStyles();
  return (
    <div className="App">
      <div>
        <h1 className={classes.title}>Rick <span style={{ fontSize: "30px" }}>And</span> Morty</h1>
        <Home />
      </div>
    </div>
  )
}

export default App
