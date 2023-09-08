import React from 'react'
import { POKEMONS } from '../../shared/pokemons'
import PokemonItem from '../PokemonItem/PokemonItem'

const PokemonList = (props) => {
  return (
    <div>
     
      <div>

      {
        POKEMONS.map((pokemon, idx)=>(
          <p key={idx}>
           <PokemonItem
            isSelected={props.pokemon === pokemon}
           pokemon={pokemon}
           onClick={props.onPokemonItemClick}
           />
          </p>
        ))
      }
      </div>
    </div>
  )
}

export default PokemonList