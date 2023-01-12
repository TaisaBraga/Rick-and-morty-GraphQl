import { useQuery } from "@apollo/client";
import { Character, GET_CHARACTERS } from "../../queries/Queries";


export const Card = () => {
  const { data } = useQuery<{ characters: Character }>(GET_CHARACTERS);

  // const useStyles = makeStyles(() => {

  // })
  return (
    <div>
      {data?.characters.results.map((character: any) => (
        <div className="card" key={character.id}>
          <img src={character.image} alt="Avatar" style={{ width: "100%" }} />
          <div className="container">
            <h4>
              <b>{character.name}</b>
            </h4>
            <p>
              <b>Species:</b> {character.species}
            </p>
            <p>
              <b>Status:</b> {character.status}
            </p>
            <p>
              <b>Type:</b>{character.type}
            </p>
          </div>
        </div>
      ))}
    </div>
  )
}
