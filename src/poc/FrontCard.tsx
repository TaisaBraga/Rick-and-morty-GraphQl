import { makeStyles } from "@material-ui/core/styles";
import { useCharactersResultContext } from "../components/context/CardContext";



export const FrontCard = ({ image, id }: any) => {



  return (
    <div id={id}>
      <img src={image} alt="Avatar" />
    </div>

  )
}
