import { useState } from "react";
import ReactCardFlip from "react-card-flip";
import { BackCard } from "../atoms/BackCard";
import { FrontCard } from "../atoms/FrontCard";

export const Card = ({ image, name, species, status, type }: any) => {
  const [isFlipped, setIsFlipped] = useState(false)

  return (
    <>
      <div >
        <ReactCardFlip isFlipped={isFlipped}>
          <div onClick={() => setIsFlipped(true)}>
            <FrontCard image={image} name={name} status={status} />
          </div>
          <div onClick={() => setIsFlipped(false)}>
            <BackCard name={name} species={species} status={status} type={type} />
          </div>
        </ReactCardFlip >
      </div>
    </>
  )
}
