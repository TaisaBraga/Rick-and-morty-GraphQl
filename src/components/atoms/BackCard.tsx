export const BackCard = ({ name, species, status, type }: any) => {

  return (
    <div>
      <h4>{name} </h4>
      <p>Specie: {species}</p>
      <p>Status: {status}</p>
      <p>Type: {type}</p>
    </div>

  )
}