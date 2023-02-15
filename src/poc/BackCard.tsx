import { makeStyles } from "@material-ui/core/styles";
import { useCharactersResultContext } from "../components/context/CardContext";


export const BackCard = ({ name, species, status, type }: any) => {

  return (
    <div style={{ color: "#fff" }} >
      <h4>{name} </h4>
      <p>Specie: {species}</p>
      <p>Status: {status}</p>
      <p>Type: {type}</p>
    </div>

  )
}
