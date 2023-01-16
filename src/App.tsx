import { makeStyles } from '@material-ui/core/styles';
import Home from './components/Home/Home';
import "./App.css"

const useStyles = makeStyles(() => ({
  title: {
    color: "#008B8B",
    fontFamily: 'Rubik Bubbles',
    fontSize: "3.5em",
    paddingTop: "0.5em",
    textAlign: "center",
    WebkitTextStrokeWidth: "0.5px",
    WebkitTextStrokeColor: '#32CD32',
    width: "95%",
    '& span': {
      fontSize: "30px"
    }
  }
}))

function App() {

  const classes = useStyles();
  return (
    <div className="App">
      <div>
        <h1 className={classes.title}>Rick <span>And</span> Morty</h1>
        <Home />
      </div>
    </div>
  )
}

export default App
