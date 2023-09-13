import React from 'react'

const PokemonCardItem = (props) => {
  return (
    <div  >


             <img src={props.pokemon.sprites.large}></img>
    </div>
  )
}

export default PokemonCardItem