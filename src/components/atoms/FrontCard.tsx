import React from 'react'

export const FrontCard = ({ image, id }: any) => {
  return (
    <div id={id}>
      <img src={image} alt="Avatar" />
    </div>
  )
}
