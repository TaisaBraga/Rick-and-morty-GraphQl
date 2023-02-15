import { makeStyles } from '@material-ui/core';
import React, { useState } from 'react'
import ReactCardFlip from 'react-card-flip';
import { useCharactersResultContext } from '../components/context/CardContext';
import { BackCard } from './BackCard'
import { FrontCard } from './FrontCard'

const useStyles = makeStyles(() => ({
  wrapper: {
    height: "450px",
    maxWidth: "300px",
    margin: "0 auto",
    position: "relative",
    perspective: "900px",
    "&:hover &singleCard": {
      transform: "rotateY(180deg)",
    },
  },
  singleCard: {
    textAlign: "center",
    transition: "all 1.5s cubic-bezier(0.7, -0.5, 0.3, 1.8)",
    transformStyle: "preserve-3d",
    willChange: "transform",
  },
  front: {
    cursor: "pointer",
    height: "100%",
    backgroundImage: "url(1.jpg)",
    borderRadius: "50px",
    backgroundSize: "cover",
    backgroundPosition: "center center",
    backfaceVisibility: "hidden",
  },
  back: {
    transform: "rotateY(180deg)",
    position: "absolute",
    borderRadius: "50px",
    height: "450px",
    background: "#fff",
    backfaceVisibility: "hidden",
  },
}));


export const Tog = ({ id, image, name, species }: any) => {

  const classes = useStyles();
  const [isFlipped, setIsFlipped] = useState(false)

  const handleClick = (id: any) => {
    console.log('cliqe')
    setIsFlipped(!isFlipped)
  }

  return (
    <div className={classes.wrapper}>
      <div className={classes.singleCard}>
        <ReactCardFlip isFlipped={isFlipped}>
          <div onClick={() => setIsFlipped(true)}>
            <FrontCard image={image} className={classes.front} />
          </div>
          <div onClick={() => setIsFlipped(false)}>
            <BackCard name={name} species={species} className={classes.back} />
          </div>
        </ReactCardFlip>
      </div>
    </div>


  )
}
