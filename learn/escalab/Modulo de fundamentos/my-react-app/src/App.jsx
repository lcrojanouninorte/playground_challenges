import { useState } from "react";
import PokemonList from "./components/PokemonList/PokemonList";
import PokemonCards from "./components/PokemonCards/PokemonCards";
import s from "./styles.module.css";

function App() {
  const [currentPokemon, setCurrentPokemon] = useState([]);
  const [selectedPokemons, setSelectedPokemons] = useState([]);
   const onPokemonItemClick = (pokemon) => {
    setCurrentPokemon(pokemon);
  };

  const teamLimit = 6;
  
  const onAddBtnClick = () => {
    //limit to 5 pokemons

    let pokemons = [currentPokemon,...selectedPokemons];
    if(pokemons.length>teamLimit){
      pokemons.pop()
    }
     
    // Set state
    setSelectedPokemons(pokemons);
  };
  return (
    <div>
      <h1 style={{ textAlign: "center" }}>Pokemon team</h1>
      <div className={s.container}>
        <div>
        <h2>Choose your {teamLimit} pokemons</h2>
          <div className={s.card}>
            <PokemonList
              pokemon={currentPokemon}
              onPokemonItemClick={onPokemonItemClick}
            />
          </div>

        
        </div>
        <button onClick={onAddBtnClick}>
              Add {currentPokemon?.name} to your team  
              <img src={currentPokemon?.sprites?.normal}></img>
            </button>
        <div >
          <p>Your team: {selectedPokemons.length}</p>
          <div className={s.card}>
             <PokemonCards selectedPokemons={selectedPokemons} />
          </div>
         
        </div>
      </div>
    </div>
  );
}

export default App;
