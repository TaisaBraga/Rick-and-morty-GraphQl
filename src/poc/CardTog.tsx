import { Box, makeStyles } from '@material-ui/core';
import React, { useState } from 'react'
import ReactCardFlip from 'react-card-flip';
import { useCharactersResultContext } from '../components/context/CardContext';
import { ICharactersResult, IGetCharacters } from '../hooks/useGetCharacters';
import { BackCard } from './BackCard';
import { FrontCard } from './FrontCard';
import { Tog } from './Tog';

const useStyles = makeStyles(() => ({
  wrapper: {
    height: "450px",
    maxWidth: "300px",
    margin: "0 auto",
    position: "relative",
    perspective: "900px",
    "&:hover & singleCard": {
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
    backfaceVisibility: "hidden",
  },

}));

export const CardTog = () => {
  const classes = useStyles();
  const { charactersResultData } = useCharactersResultContext();
  const [isFlipped, setIsFlipped] = useState(false)

  // const handleClick = (item: any) => {
  //   console.log('cliqe')
  //   setIsFlipped(!isFlipped)
  // }


  return (
    // <>
    //   {charactersResultData?.characters.results.map((item: ICharactersResult) => (
    //     <div className={classes.singleCard} key={item.id}>

    //       <FrontCard
    //         image={item.image}
    //         className={classes.front}
    //         id={item.id}
    //         onClick={() => console.log(item.id)}
    //       />
    //       <BackCard
    //         name={item.name}
    //         species={item.species}
    //         status={item.status}
    //         type={item.type === "" ? "Unknown" : item.type}
    //         className={classes.back}
    //         onClick={() => setIsFlipped(!isFlipped)}
    //       />
    //     </div>
    //   ))}
    // </>
    <div>
      {charactersResultData?.characters.results.map((item: ICharactersResult) => (
        <div key={item.id}>
          <Tog
            image={item.image}
            name={item.name}
            species={item.species}
            status={item.status}
            type={item.type === "" ? "Unknown" : item.type}
          />
        </div>
      ))}
    </div>
  )
}
