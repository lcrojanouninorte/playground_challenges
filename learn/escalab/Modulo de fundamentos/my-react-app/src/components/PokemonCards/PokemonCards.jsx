import React from 'react'
import PokemonCardItem from '../PokemonCardItem/PokemonCardItem'
import s from "./styles.module.css";
const PokemonCards = (props) => {
  return (
    <div >
    
        <div className={s.container}>
        {
          props.selectedPokemons ?  
          props.selectedPokemons.map((pokemon, idx)=>(
            <div     className={s.pokemon_container} key={idx}>
             < PokemonCardItem
          
              pokemon={pokemon}
             />
             
           
            </div>
          ))
          : "No pokemons selected"
        }
          </div> 
    </div>
   
  
  )
}

export default PokemonCards